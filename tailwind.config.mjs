/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./components/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./app/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        slideUp: 'slideUp 1s ease-in-out forwards',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        }},
        
      colors: {
        purpBG:"#B490CC",
        mainBg:"#282E3C",
        bordBG:"#378C8F",
        customGreen: '#57EB98',
        darkerBG: "#1B2130",
        darkPP: "#A04BD8",
        blueHov:"#57EB98",
      },
      fontFamily:{
        abc:["Poppins"],
        xyz:["Quicksand"],
      },
      spacing: {
        'lowb': '10px',
        'mc': '104px',
        "resize_w":"90%",
        "sc":"40%",
        "ex":"80%",
        "mx": "60%",
        "mid":"57%",
        "wz":"96%",
        "mz": "85%",
        "cs":"97.5%",
        "ix": "27%",
        "xi": "73%",
        'my_img_w':'22%',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        // 'zz': { 'max': '767px'},
        'spr':{'max':'1300px'},
        'lx':{'max':'1150px'},
        'xb':{'max':'950px'},
        'xs': {'max': '800px'},
        'mx_w': {'max':'605px'},
        'xb':{'max':'950px'},
        'xs': {'max': '800px'},
        'fmd':{'max':'580px'},
        'mini_s': {'max':'480px'},
        'very_s': {'max':'350px'},
        'early_blk':{'max':'300px'},
        'blank': {'max':'200px'},
        'tt':'730px',
       
      },
    },

  },
  
  plugins: [],
};
