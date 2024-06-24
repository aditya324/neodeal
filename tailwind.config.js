/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",


"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgba(100,89,226,1)',
        'custom-indigo': 'rgba(55,49,124,1)',
        'custom-red':'rgba(234,84,96,1)',
        'custom-purple':'rgba(83,86,251,1)'
        
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(248,169,38,1) 0%, rgba(223,106,102,1) 50%)',
        'custom-blue': 'radial-gradient(circle, rgba(100,89,226,1) 0%, rgba(55,49,124,1) 39%)',
        'custom-card': 'linear-gradient(90deg, rgba(234,84,96,1) 0%, rgba(83,86,251,1) 100%)',
      },
    },
  },
  plugins: [],
}

