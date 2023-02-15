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
        silver: "#C0C0C0",
        gunmetal: "#1C2A35",
        bdazzled: "#39556E",
        cerulean: "#789BBA",
        battleship: "#767676",
        platinum: "#E5E5E5",
      },
      textColor: {
        silver: "#C0C0C0",
        gunmetal: "#1C2A35",
        bdazzled: "#39556E",
        cerulean: "#789BBA",
        battleship: "#767676",
        platinum: "#E5E5E5",
      },
      backgroundColor: {
        body: "#d6d6d6",
      },
      backgroundImage: {
        footerBg: "url('./assets/images/vpas-fondo-marino.webp')",
        footerShape: "url('./assets/images/vpas-footer-forma.svg')",
        empresaRoundBg: "url('./assets/images/vpas-empresa-imagen-fondo.svg')",
        highlightBg: "url('./assets/images/vpas-superficie-oceano-burbujas.webp')",
      },
    },
  },
  shortcuts: {
    heading: "text-bdazzled font-black",
    "heading-1": "heading text-3xl",
    "heading-2": "heading text-2xl",
    "heading-3": "heading text-xl",
    "heading-4": "heading text-lg",
    "heading-5": "heading text-base",
    "heading-6": "heading text-sm font-extrabold",
    "paragraph-a": "text-xl",
    "paragraph-b": "text-3xl",
    "flex-col-center": "flex flex-col justify-center",
    "filter-to-white":
      "filter invert-99 sepia-2 saturate-75 hue-rotate-99 brightness-0 contrast-100",
    "app-hero-bg-gradient":
      "bg-gradient-to-b from-gunmetal to-bdazzled bg-no-repeat",
  },
});
