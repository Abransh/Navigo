// setup-public-directory.js
// Run this script with Node.js to set up the public directory structure
// Usage: node setup-public-directory.js

const fs = require('fs');
const path = require('path');

// Define the directory structure
const directories = [
  'public',
  'public/images',
  'public/images/logo',
  'public/images/icons',
  'public/fonts',
  'public/animations',
];

// Define placeholder files to create (to ensure Git tracks empty directories)
const placeholderFiles = [
  'public/images/.gitkeep',
  'public/images/logo/.gitkeep',
  'public/images/icons/.gitkeep',
  'public/fonts/.gitkeep',
  'public/animations/.gitkeep',
];

// Create the directories
directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  } else {
    console.log(`Directory already exists: ${dir}`);
  }
});

// Create placeholder files
placeholderFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '# This file ensures Git tracks this directory\n');
    console.log(`Created placeholder file: ${file}`);
  } else {
    console.log(`File already exists: ${file}`);
  }
});

// Create a README file in the public directory explaining the structure
const readmeContent = `# Public Assets Directory

This directory contains all static assets for the Navigo website.

## Directory Structure

- \`/images\`: All image assets
  - \`/logo\`: Logo files
  - \`/icons\`: Icon files
- \`/fonts\`: Font files
  - Mattone (Font files: Mattone-Bold.otf)
  - Fieldsdisplay (Font files: FieldsDisplay-Medium.otf)
  - Karla (Font files: Karla-VariableFont_wght.ttf)
- \`/animations\`: Lottie JSON files

## Usage

When referencing these assets in components, use absolute paths from the public directory:

\`\`\`jsx
// Images
<img src="/images/logo/logo.png" alt="Navigo Logo" />

// Fonts are loaded via CSS in globals.css

// Animations are loaded via data-src attribute
<div 
  data-animation-type="lottie"
  data-src="/animations/squiggle-animation.json"
  data-loop="1"
  data-autoplay="1"
></div>
\`\`\`

## Adding New Assets

When adding new assets, please follow these conventions:
- Name files using kebab-case (e.g., \`hero-image.jpg\`)
- Use appropriate subdirectories for organization
- Optimize images for web before adding them
- Add SVGs directly to components when possible, rather than as separate files
`;

fs.writeFileSync('public/README.md', readmeContent);
console.log('Created README.md file in public directory');

console.log('\nDirectory structure setup complete!');
console.log('\nReminder: You still need to:');
console.log('1. Copy/download the actual image assets from the Webflow site');
console.log('2. Obtain and add the required font files');
console.log('3. Extract and add the Lottie animation JSON files');