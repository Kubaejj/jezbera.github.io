/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
  
    },
    screens: {
      sm:'480px',
      lg:'97px',
    },
    spacing: {
      '1': '100px', // class="mb-1, to znamena margin 8px"
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    }
  },
  plugins: [],
}