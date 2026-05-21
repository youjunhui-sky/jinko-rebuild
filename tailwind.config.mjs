/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        jinko: {
          DEFAULT: '#0066B3',   // Jinko 蓝
          dark: '#003E6F',
          accent: '#FFB400',    // 太阳能黄
          ink: '#0F172A',
          mute: '#475569',
          line: '#E2E8F0',
          bg: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
      },
      maxWidth: { content: '1200px' },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -8px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
