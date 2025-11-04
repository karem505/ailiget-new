import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // AILIGENT brand colors
        brand: {
          violet: {
            50: "#7940BE",
            60: "#9952E0",
            70: "#AB6DF7",
          },
          cyan: {
            50: "#00D4FF",
          },
          azure: {
            53: "#5994B7",
            70: "#A7AFBE",
          },
          green: {
            38: "#14B06C",
          },
          dark: {
            bg: "#010413",
            surface: "#0F1522",
            overlay: "#0E1525",
            card: "rgba(14, 21, 37, 0.60)",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        commissioner: ['Commissioner', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(90deg, #7940BE 0%, #9952E0 19.85%, #5994B7 64.34%, #14B06C 100%)',
        'gradient-hero': 'linear-gradient(117deg, #131119 2.09%, #171321 21.39%, #41227C 65.31%, #4772A7 100%)',
        'gradient-card': 'linear-gradient(129deg, rgba(27, 34, 50, 0.70) 0%, rgba(14, 21, 37, 0.60) 100%)',
        'gradient-icon': 'linear-gradient(123deg, rgba(121, 64, 190, 0.50) 0.97%, rgba(153, 82, 224, 0.50) 20.49%, rgba(89, 148, 183, 0.50) 68.1%, rgba(20, 176, 108, 0.50) 100%)',
        'gradient-text': 'linear-gradient(90deg, #5994B7 40%, #14B06C 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
