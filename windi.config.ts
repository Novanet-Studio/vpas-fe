import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1366px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        gunmetal: "#1C2A35",
        bdazzled: "#39556E",
        cerulean: "#789BBA",
        battleship: "#767676",
        platinum: "#E5E5E5",
      },
      textColor: {
        silver: "#767676",
        gunmetal: "#1C2A35",
        bdazzled: "#39556E",
        cerulean: "#789BBA",
        battleship: "#767676",
        platinum: "#E5E5E5",
      },
      backgroundColor: {
        body: "#d6d6d6"
      },
      backgroundImage: {
        footerBg: "url('./assets/images/vpas-fondo-marino.webp')",
        footerShape: "url('./assets/images/vpas-footer-forma.svg')"
      },
    },
  },
});
