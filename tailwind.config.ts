import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    spacing: {
      2: "8px",
      3: "12px",
      4: "16px",
      5: "24px",
      6: "32px",
      7: "40px",
    },
    fontFamily: {
      sans: ["Inter", "sans"],
    },
    borderRadius: {
      md: "4px",
      3: "6px",
      4: "8px",
      5: "12px",
      6: "16px",
    },
    extend: {
      fontSize: {
        "1": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0.0025em",
          },
        ],
        "2": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0em",
          },
        ],
        "3": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0em",
          },
        ],
        "4": [
          "18px",
          {
            lineHeight: "26px",
            letterSpacing: "-0.0025em",
          },
        ],
        "5": [
          "20px",
          {
            lineHeight: "28px",
            letterSpacing: "-0.005em",
          },
        ],
        "6": [
          "24px",
          {
            lineHeight: "30px",
            letterSpacing: "-0.00625em",
          },
        ],
        "7": [
          "28px",
          {
            lineHeight: "36px",
            letterSpacing: "-0.0075em",
          },
        ],
        "8": [
          "35px",
          {
            lineHeight: "40px",
            letterSpacing: "-0.01em",
          },
        ],
        "9": [
          "60px",
          {
            lineHeight: "60px",
            letterSpacing: "-0.025em",
          },
        ],
      },

      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      colors: {
        text: "#1C2024",
        darkBackground: "#18181A",
        panelDefault: "rgba(255, 255, 255, 0.80)",
        accents: {
          1: "#FBFDFF",
          2: "#F5FAFF",
          3: "rgba(2, 128, 255, 0.07)",
          4: "#E1F0FF",
          5: "#CEE7FE",
          6: "#B7D9F8",
          7: "#96C7F2",
          8: "#5EB0EF",
          9: "#0C85F3",
          10: "#0880EA",
          11: "#0B68CB",
          12: "#113264",
        },
        neutral: {
          1: "#FCFCFD",
          2: "#F9F9FB",
          3: "rgba(0, 0, 59, 0.05)",
          4: "#EBEBEF",
          5: "#E4E4E9",
          6: "#DDDDE3",
          7: "#D3D4DB",
          8: "#B9BBC6",
          9: "#8B8D98",
          10: "#7E808A",
          11: "#60646C",
          12: "#1C2024",
        },

        error: {
          1: "#FFFCFC",
          2: "#FFF7F7",
          3: "#FFEFEF",
          4: "#FFE5E5",
          5: "#FDD8D8",
          6: "#F9C6C6",
          7: "#F3AEAF",
          8: "#EB9091",
          9: "#E5484D",
          10: "#D93D42",
          11: "#C62A2F",
          12: "#641723",
        },
        success: {
          1: "#FBFEFC",
          2: "#F2FCF5",
          3: "#E9F9EE",
          4: "#DDF3E4",
          5: "#CCEBD7",
          6: "#B4DFC4",
          7: "#92CEAC",
          8: "#5BB98C",
          9: "#30A46C",
          10: "#299764",
          11: "#18794E",
          12: "#193B2D",
        },
        warning: {
          1: "#FEFDFB",
          2: "#FFF9ED",
          3: "#FFF3D0",
          4: "#FFECB7",
          5: "#FFE0A1",
          6: "#F5D08C",
          7: "#E4BB78",
          8: "#D6A35C",
          9: "#FFC53D",
          10: "#FFBA1A",
          11: "#915930",
          12: "#4F3422",
        },
        info: {
          1: "#F9FEFF",
          2: "#F1FCFF",
          3: "#E2F9FF",
          4: "#D2F4FD",
          5: "#BFEBF8",
          6: "#A5DCED",
          7: "#82CAE0",
          8: "#46B8D8",
          9: "#7CE2FE",
          10: "#72DBF8",
          11: "#256E93",
          12: "#19404D",
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
