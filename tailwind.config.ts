import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050a18',
          900: '#080f20',
          800: '#0d1829',
          700: '#0f2040',
          600: '#142856',
        },
        electric: {
          500: '#0a84ff',
          400: '#38b6ff',
          300: '#5cc8ff',
          200: '#a8dfff',
        },
        sky: {
          400: '#00e5ff',
          300: '#4df0ff',
        },
        silver: {
          100: '#f0f4f8',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'route-move': 'routeMove 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        routeMove: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
