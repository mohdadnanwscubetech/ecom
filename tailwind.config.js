/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'largelaptop':'1440px',
        'laptop':'1030px',
        'tablet':'770px',
        'largemob':'430px',
        'medieummob':'375px',
        'smallmob':'260px'
      },
      fontFamily:{
        'family':['Mier book','san-serif'],
      },
    },
  },
  plugins: [],
}
