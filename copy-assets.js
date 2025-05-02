// copy-assets.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create assets directory if it doesn't exist
if (!fs.existsSync('dist/assets')) {
  fs.mkdirSync('dist/assets', { recursive: true });
}

// Find all CSS files in _astro directory
const astroDir = path.join('dist', '_astro');
if (fs.existsSync(astroDir)) {
  const files = fs.readdirSync(astroDir);
  
  files.forEach(file => {
    if (file.endsWith('.css')) {
      // Copy the file to the assets directory
      fs.copyFileSync(
        path.join(astroDir, file),
        path.join('dist', 'assets', file)
      );
      console.log(`Copied ${file} to assets directory`);
    }
  });
}

console.log('Assets copy complete!');
