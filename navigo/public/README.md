# Public Assets Directory

This directory contains all static assets for the Navigo website.

## Directory Structure

- `/images`: All image assets
  - `/logo`: Logo files
  - `/icons`: Icon files
- `/fonts`: Font files
  - Mattone (Font files: Mattone-Bold.otf)
  - Fieldsdisplay (Font files: FieldsDisplay-Medium.otf)
  - Karla (Font files: Karla-VariableFont_wght.ttf)
- `/animations`: Lottie JSON files

## Usage

When referencing these assets in components, use absolute paths from the public directory:

```jsx
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
```

## Adding New Assets

When adding new assets, please follow these conventions:
- Name files using kebab-case (e.g., `hero-image.jpg`)
- Use appropriate subdirectories for organization
- Optimize images for web before adding them
- Add SVGs directly to components when possible, rather than as separate files
