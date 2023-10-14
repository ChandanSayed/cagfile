/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient': ' linear-gradient(168deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.50) 31.4%, rgba(0, 0, 0, 0.35) 59.71%, rgba(0, 0, 0, 0.00) 98.82%)',
        secondaryGradient: 'linear-gradient(90deg, #FFF 0%, #FFF 66.15%, #F3F4F6 100%)'
      },
      colors: {
        primaryColor: '#008271'
      },
      boxShadow: {
        shadowMobile: '0px -4px 20px 0px rgba(0, 0, 0, 0.15)',
        shadowDesktop: '0px 8px 10px 0px rgba(0, 0, 0, 0.15)'
      }
    }
  },
  plugins: []
};
