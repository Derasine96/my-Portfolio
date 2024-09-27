import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: ["./pages/**/*.{js, jsx, ts,tsx}", "./components/**/*.{js, jsx, ts,tsx}", "./app/**/*.{js, jsx, ts,tsx}", "./src/**/*.{js, jsx, ts,tsx}"],
  prefix: "",
  theme: {
    fontFamily: {
      inter: ["var(--font-inter)", "sans-serif", "Arial"],
      inria: ["var(--font-inria)", "sans-serif", "Helvetica"],
      robotoSlab: ["var(--font-roboto-slab)", "serif", "Georgia"],
      lato: ["var(--font-lato)", "sans-serif", "Tahoma"],
      robotoSerif: ["var(--font-roboto-serif)", "serif", "Times"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        xs: { max: "639px" },
        sm: { min: "640px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px" },
        xl: { min: "1280px" },
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#771010",
          foreground: "#FF4500",
          darkRed: "#370609",
          orangeBrown: "#A85A32",
          lightBeige: "#D1B89B",
          brightCoral: "#FE6B59",
          offWhite: "#F5F5F5",
          darkSlateGray: "#2F4F4F",
          lightRed: "#771010",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("daisyui"), require("tailwind-scrollbar")],
} satisfies Config;

export default config;
