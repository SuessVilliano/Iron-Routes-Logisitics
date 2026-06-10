import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
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
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'road-lines': 'roadLines 2s linear infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(10,132,255,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(10,132,255,0.7), 0 0 80px rgba(10,132,255,0.3)' },
        },
        roadLines: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(400%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
