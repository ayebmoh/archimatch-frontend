const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        Unbounded: ["Unbounded", "sans-serif"],
        "Montserrat-Alternates": ['"Montserrat Alternates"', "sans-serif"],
      },
      otp_area:{ 
        width: "w-[70%]" ,
        margin: "m-20 m-auto",
    textAlign : "text-center",
    display: "flex",
    gap:"gap-2",
          },
          focus:{ 
         border: "border-2",
         border_color: "border_color_red"
              },
        colors: {
        page_bg: "#fafbff",
        client: {
          primary: "#11abec",
          secondary_text_color: "#888fa7",
          dark_blue: "#1b2534",
          success: "#008f5d",
          destructive: "#ff0000",
          text_hover: "#0c1e5b",
        },
        architect: {
          primary: "#f65858",
          secondary_text_color: "#888fa7",
          main_blue : "#0C1E5B",
          dark_blue: "#1b2534",
          success: "#008f5d",
          destructive: "#ff0000",
          text_hover: "#0c1e5b",
          font_gris : "#344054",
          border_color:"#888FA7"
        },
      },
    },
  },
  plugins: [],
});