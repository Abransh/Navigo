// extract-lottie-animations.js
// Run this script with Node.js to extract Lottie animation URLs from the Webflow HTML
// Usage: node extract-lottie-animations.js input.html

const fs = require('fs');
const path = require('path');
const https = require('https');
const { JSDOM } = require('jsdom');

// Check if an input file is provided
if (process.argv.length < 3) {
  console.error('Please provide the path to the HTML file as an argument');
  console.error('Usage: node extract-lottie-animations.js input.html');
  process.exit(1);
}

const inputFile = process.argv[2];
const animationsDir = path.join('public', 'animations');

// Create animations directory if it doesn't exist
if (!fs.existsSync(animationsDir)) {
  fs.mkdirSync(animationsDir, { recursive: true });
  console.log(`Created directory: ${animationsDir}`);
}

// Read the HTML file
const html = fs.readFileSync(inputFile, 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

// Find elements with data-animation-type="lottie"
const lottieElements = document.querySelectorAll('[data-animation-type="lottie"]');
console.log(`Found ${lottieElements.length} Lottie animation elements`);

// Function to download a file from URL
const downloadFile = (url, outputPath) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    
    https.get(url, response => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}, status code: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close(resolve);
        console.log(`Downloaded: ${outputPath}`);
      });
    }).on('error', err => {
      fs.unlink(outputPath, () => {}); // Delete the file async if there's an error
      reject(err);
    });
  });
};

// Process each Lottie element
let foundAnimations = 0;
const processedUrls = new Set();

lottieElements.forEach((element, index) => {
  const dataSrc = element.getAttribute('data-src');
  
  if (!dataSrc) {
    console.log(`Element ${index} has no data-src attribute`);
    return;
  }
  
  // Skip if we've already processed this URL
  if (processedUrls.has(dataSrc)) {
    console.log(`Skipping duplicate URL: ${dataSrc}`);
    return;
  }
  
  processedUrls.add(dataSrc);
  foundAnimations++;
  
  // Extract filename from URL
  const urlParts = dataSrc.split('/');
  const originalFilename = urlParts[urlParts.length - 1];
  
  // Generate a nicer filename based on the element's position or class
  let filename = originalFilename;
  
  // Try to generate a more descriptive filename based on element classes
  if (element.classList.contains('lottie_squiggle')) {
    filename = 'squiggle-animation.json';
  } else if (element.classList.contains('lottie_menu')) {
    filename = 'menu-animation.json';
  } else {
    // Use a generic name with index if we can't determine a better one
    filename = `animation-${index}.json`;
  }
  
  const outputPath = path.join(animationsDir, filename);
  
  // Download the animation file
  downloadFile(dataSrc, outputPath)
    .catch(err => {
      console.error(`Error downloading ${dataSrc}:`, err);
    });
  
  // Also write a mapping file for reference
  fs.appendFileSync(
    path.join(animationsDir, 'animation-mapping.txt'),
    `${dataSrc} => ${filename}\n`
  );
});

console.log(`Found ${foundAnimations} unique Lottie animation URLs`);
console.log(`Mapping saved to: ${path.join(animationsDir, 'animation-mapping.txt')}`);
console.log('\nNOTE: This script requires the "jsdom" package to run.');
console.log('If you get an error, install it with: npm install jsdom');