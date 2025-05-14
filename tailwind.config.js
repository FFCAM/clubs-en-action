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
          ffcam: { 
            DEFAULT: '#0073CF',
            dark: '#005CA3',
            light: '#3399E0',
          } 
        },
        fontFamily: {
          sans: ['var(--font-sans)'],
        },
      },
    },
    plugins: [],
  };
  