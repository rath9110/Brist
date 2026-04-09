import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F4F6F4",
        surface: "#FFFFFF",
        primary: "#1F3D2B",
        "primary-tint": "#F0F5F2",
        secondary: "#4F7A65",
        accent: "#DCE5DF",
        text: "#1F2A24",
        "text-muted": "#6B6B6B",
        success: "#2ECC71",
        error: "#C0392B",
        warning: "#D68910",
      },
      fontFamily: {
        serif: ["var(--font-dm-serif-display)", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "480px",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};
export default config;
