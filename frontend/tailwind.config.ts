import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 3px -2px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1)',
        'card-lg':
          '0 8px 12px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15)',
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
