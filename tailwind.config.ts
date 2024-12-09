import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
		screens: {
			'xs': '320px',  // Extra small devices like small mobile phones
			'sm': '480px',  // Small mobile devices
			'md': '768px',  // Tablets
			'lg': '1024px', // Desktop (laptops, small screens)
			'xl': '1280px', // Larger screens (large desktops)
			'2xl': '1536px', // Very large screens (wide desktop monitors)
		  },


      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        greatvibes: ["'Great Vibes'", "cursive"],
      },
      
    },
  },
  plugins: [],
};
export default config;