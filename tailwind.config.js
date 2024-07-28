/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    corePlugins: {
      fontSize: false, // 폰트 사이즈 기본 플러그인 비활성화
    },
  },
  plugins: [],
};
