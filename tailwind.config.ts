import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        "brand-txt": "#1f2026",
        muted: "#C7C8CC",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
};
