import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'special': '0 4px 45px rgba(0, 0, 0, 0.05)',
        'question': '20px 20px 114px rgba(0, 0, 0, 0.05)',
        'reply': '4px 0px 100px rgba(0, 0, 0, 0.05)',
    }
    },
  },
  plugins: [],
} satisfies Config;
