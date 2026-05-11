/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0A0A0F',
          soft: '#11111A',
          card: 'rgba(255,255,255,0.04)',
        },
        line: 'rgba(255,255,255,0.08)',
        text: {
          DEFAULT: '#E6E6F0',
          dim: '#9A9AB0',
          mute: '#6B6B80',
        },
        violet: {
          glow: '#7C3AED',
        },
        cyan: {
          glow: '#22D3EE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'aurora-grad': 'linear-gradient(135deg, #7C3AED 0%, #22D3EE 100%)',
        'grid-pattern':
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: '64px 64px',
      },
      boxShadow: {
        'glow-violet': '0 0 40px -10px rgba(124, 58, 237, 0.6)',
        'glow-cyan': '0 0 40px -10px rgba(34, 211, 238, 0.5)',
        card: '0 8px 24px -8px rgba(0,0,0,0.5)',
      },
      animation: {
        'aurora-1': 'aurora1 24s ease-in-out infinite',
        'aurora-2': 'aurora2 30s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        aurora1: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '50%': { transform: 'translate(20%, -15%) scale(1.2)' },
        },
        aurora2: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1.1)' },
          '50%': { transform: 'translate(-25%, 10%) scale(0.9)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
