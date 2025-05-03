// This script prepares your build environment for automatically extracting images
// Run with: node build-setup.js

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Function to run a command and log its output
function runCommand(command) {
  console.log(`\n🚀 Running: ${command}`);
  try {
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`❌ Error executing command: ${command}`);
    console.error(error.message);
    return false;
  }
}

// Main function
async function setup() {
  console.log('🔧 Setting up build environment for external blog image extraction...');

  // Install required dependencies
  console.log('📦 Installing required packages...');
  const packagesToInstall = ['node-fetch@2', 'jsdom'];
  
  // Check if packages are already installed
  let packageJson;
  try {
    packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  } catch (error) {
    console.error('❌ Error reading package.json:', error.message);
    process.exit(1);
  }

  const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
  const packagesToInstallFiltered = packagesToInstall.filter(pkg => {
    const pkgName = pkg.split('@')[0];
    return !dependencies[pkgName];
  });

  if (packagesToInstallFiltered.length > 0) {
    if (!runCommand(`npm install --save ${packagesToInstallFiltered.join(' ')}`)) {
      console.error('❌ Failed to install packages');
      process.exit(1);
    }
  } else {
    console.log('✅ All required packages already installed');
  }

  // Create directories for external images if they don't exist
  const externalImagesDir = path.join('public', 'images', 'external');
  if (!fs.existsSync(externalImagesDir)) {
    console.log(`📁 Creating directory: ${externalImagesDir}`);
    fs.mkdirSync(externalImagesDir, { recursive: true });
  }

  // Create fallback image if it doesn't exist
  const fallbackImage = path.join('public', 'images', 'fallback-blog.jpg');
  if (!fs.existsSync(fallbackImage)) {
    console.log(`🖼️ Creating fallback image: ${fallbackImage}`);
    
    // Ensure the parent directory exists
    const fallbackDir = path.dirname(fallbackImage);
    if (!fs.existsSync(fallbackDir)) {
      fs.mkdirSync(fallbackDir, { recursive: true });
    }
    
    // Create a basic placeholder image (1x1 transparent pixel base64 encoded)
    const placeholderImage = Buffer.from(
      'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
      'base64'
    );
    fs.writeFileSync(fallbackImage, placeholderImage);
    
    console.log('⚠️ Created a placeholder fallback image. You should replace it with a proper fallback image.');
  }

  console.log('\n✅ Setup completed successfully!');
  console.log('\n📝 Next steps:');
  console.log('1. Create external blog posts in src/content/blog/ with isExternal: true and externalUrl properties');
  console.log('2. Run your build process with npm run build');
  console.log('3. Images from external blog posts will be automatically extracted and cached');
}

// Run the setup
setup().catch(error => {
  console.error('❌ Setup failed:', error);
  process.exit(1);
});