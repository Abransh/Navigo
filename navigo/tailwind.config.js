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
          },
        },
        fontFamily: {
          'mattone': ['Mattone', 'sans-serif'],
          'fields': ['Fieldsdisplay', 'sans-serif'],
          'karla': ['Karla Variablefont Wght', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }