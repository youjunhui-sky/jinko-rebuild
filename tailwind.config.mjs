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
      borderRadius: {
        none: '0',
        DEFAULT: '0',        // 覆盖默认 0.25rem → 卡片/按钮/图片全直角
        'sharp': '2px',      // 2px 微倒角：硬朗但不死板
        sm: '0',             // 覆盖默认 0.125rem
        md: '0',             // 覆盖默认 0.375rem（88 处）
        lg: '0',
        xl: '0',
        '2xl': '0',          // 覆盖默认 1rem（52 处）
        '3xl': '0',          // 覆盖默认 1.5rem（38 处）
        full: '9999px',      // 保留 34 处圆形/胶囊形不动
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -8px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
