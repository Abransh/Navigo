// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'sand': '#FFE1C8',
          'petal': '#FFF3E6',
          'merlot': '#41051E',
          'grapefruit': '#FF8255',
          'lime-green': '#E6FF82',
          'raspberry': '#78142D',
          'black': '#000000',
          'white': '#FFFFFF',
          'blood-orange': '#C33C00',
        },
        'neutral': {
          'darkest': '#111111',
          'darker': '#222222',
          'dark': '#444444',
          'DEFAULT': '#666666',
          'light': '#AAAAAA',
          'lighter': '#CCCCCC',
          'lightest': '#EEEEEE',
          'black': '#000000',
          'white': '#FFFFFF',
        },
        'system': {
          'success-green': '#027A48',
          'success-green-light': '#ECFDF3',
          'error-red': '#B42318',
          'error-red-light': '#FEF3F2',
        },
        'transparent': 'transparent',
      },
      fontFamily: {
        'mattone': ['Mattone', 'sans-serif'],
        'fields': ['Fieldsdisplay', 'sans-serif'],
        'karla': ['Karla Variablefont Wght', 'sans-serif'],
      },
      fontSize: {
        'clamp-h1': 'clamp(4rem, 6vw, 5.25rem)',
        'clamp-h2': 'clamp(3rem, 3.5vw, 3.6rem)',
        'clamp-h4': 'clamp(1.3rem, 1.5vw, 2rem)',
      },
      spacing: {
        'xxsmall': '0.5rem',
        'xsmall': '1rem',
        'small': '1.5rem',
        'medium': '2rem',
        'large': '3rem',
        'xlarge': '4rem',
        'xxlarge': '5rem',
        'huge': '6rem',
        'xhuge': '7rem',
        'xxhuge': '10rem',
      },
      borderRadius: {
        'full': '100vh',
      },
      boxShadow: {
        'xxsmall': '0 1px 2px #0000000d',
        'xsmall': '0 1px 3px #0000001a, 0 1px 2px #0000000f',
        'small': '0 4px 8px -2px #0000001a, 0 2px 4px -2px #0000000f',
        'medium': '0 12px 16px -4px #00000014, 0 4px 6px -2px #00000008',
        'large': '0 20px 24px -4px #00000014, 0 8px 8px -4px #00000008',
        'xlarge': '0 24px 48px -12px #0000002e',
        'xxlarge': '0 32px 64px -12px #00000024',
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee2': 'marquee2 25s linear infinite',
        'spin': 'spin 0.8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
  // Keep Webflow classes - don't purge them
  safelist: [
    // Add any class names that might be dynamically added
    'w-nav',
    'w-nav-brand',
    'w-nav-menu',
    'w-nav-link',
    'w--current',
    'w-inline-block',
    'w-layout-layout',
    'w-layout-cell',
    'w-layout-grid',
    'w-embed',
    // Add additional classes as needed
  ],
}