/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      width :{
        'cus' : '81%',
        'form': '45%',
        'side' : '40rem'
      },
      right: {
        'customSize': '35%', // Replace with your desired custom size value
      },
    },
  },
  plugins: [],
}

