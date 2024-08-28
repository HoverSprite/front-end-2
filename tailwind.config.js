/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#43766c",
        white: "rgba(255, 255, 255, 0.95)",
        gray: {
          "100": "rgba(0, 0, 0, 0.2)",
          "200": "rgba(0, 0, 0, 0.25)",
          "300": "rgba(0, 0, 0, 0.9)",
          "400": "rgba(0, 0, 0, 0.1)",
        },
        black: "rgba(0, 0, 0, 0.7)",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
      },
      borderRadius: {
        mini: "15px",
      },
    },
    fontSize: {
      "9xl": "28px",
      "3xl": "22px",
      "11xl": "30px",
      "5xl": "24px",
      lg: "18px",
      "6xl": "25px",
      xl: "20px",
      "16xl": "35px",
      "31xl": "50px",
      inherit: "inherit",
    },
    screens: {
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
