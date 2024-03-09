/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/content/**/*.{md,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      // https://www.fluid-type-scale.com/
      fontSize: {
        '9xl': 'clamp(3.25rem, 5.26vw + 1.68rem, 8rem)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)',
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        'primary-rgba': 'var(--bg-primary-rgba)',
        secondary: 'var(--bg-secondary)',
        tertiary: 'var(--bg-tertiary)',
        border: 'var(--border-primary)',
      },
      backgroundImage: {
        'linear-gradient': 'var(--bg-linear-gradient)',
        'linear-gradient-subtle': 'var(--bg-linear-gradient-subtle)',
      },
      height: {
        screen: 'calc((var(--vh) * 100) - var(--header-height))',
      },
      maxWidth: {
        section: 'var(--max-width-section)',
      },
      boxShadow: {
        focus: 'var(--shadow-focus)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}

module.exports = config
