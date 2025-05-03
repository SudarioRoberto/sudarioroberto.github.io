// src/scripts/extractImageFromUrl.js
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

/**
 * Extract the main image from a given URL
 * @param {string} url - The URL to extract the image from
 * @param {string} fallbackImagePath - Fallback image if no image is found
 * @returns {Promise<string>} - Path to the image
 */
export async function extractImageFromUrl(url, fallbackImagePath = '/images/fallback-blog.jpg') {
  if (!url) return fallbackImagePath;
  
  try {
    // Fetch the page content
    const response = await fetch(url);
    const html = await response.text();
    
    // Parse the HTML
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    // Try to find Open Graph image first (usually high quality and representative)
    let imageSrc = document.querySelector('meta[property="og:image"]')?.getAttribute('content');
    
    // If no OG image, try Twitter image
    if (!imageSrc) {
      imageSrc = document.querySelector('meta[name="twitter:image"]')?.getAttribute('content');
    }
    
    // If still no image, try the first large image on the page
    if (!imageSrc) {
      const images = Array.from(document.querySelectorAll('img'));
      // Filter for larger images (likely to be content images, not icons)
      const largeImages = images.filter(img => {
        const width = parseInt(img.getAttribute('width') || '0', 10);
        const height = parseInt(img.getAttribute('height') || '0', 10);
        return (width > 300 && height > 200) || img.src.includes('featured') || img.src.includes('header');
      });
     
      if (largeImages.length > 0) {
        imageSrc = largeImages[0].getAttribute('src');
      }
    }
    
    // If we found an image but it's a relative URL, make it absolute
    if (imageSrc && !imageSrc.startsWith('http')) {
      const urlObj = new URL(url);
      if (imageSrc.startsWith('/')) {
        imageSrc = `${urlObj.protocol}//${urlObj.host}${imageSrc}`;
      } else {
        imageSrc = `${urlObj.protocol}//${urlObj.host}/${imageSrc}`;
      }
    }
    
    // If we found an image, download it to the public directory
    if (imageSrc) {
      const urlObj = new URL(url);
      const hostname = urlObj.hostname.replace('www.', '');
      const filename = `extracted-${hostname}-${Date.now()}.jpg`;
      const imagePath = path.join(process.cwd(), 'public', 'images', 'external', filename);
      
      // Create the directory if it doesn't exist
      const dir = path.dirname(imagePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      // Download and save the image
      const imageResponse = await fetch(imageSrc);
      const imageBuffer = await imageResponse.buffer();
      fs.writeFileSync(imagePath, imageBuffer);
      
      return `/images/external/${filename}`;
    }
  } catch (error) {
    console.error(`Error extracting image from ${url}:`, error);
  }
  
  return fallbackImagePath;
}