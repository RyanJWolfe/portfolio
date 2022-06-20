const defaultTheme = require('tailwindcss/defaultTheme')

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  darkMode: 'class',
  content: [
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        based: withOpacity('--color-text-based'),
        'based-hover': withOpacity('--color-text-based-hover'),
        muted: withOpacity('--color-text-muted'),
        primary: withOpacity('--color-primary'),
        secondary: withOpacity('--color-secondary'),
        'bg-base': withOpacity('--color-bg'),
        'surface': withOpacity('--color-bg-surface'),
        'surface-accent': withOpacity('--color-bg-surface-accent'),
        'primary-hover': withOpacity('--color-primary-hover'),
        'primary-press': withOpacity('--color-primary-press'),
        'secondary-hover': withOpacity('--color-secondary-hover'),
        'secondary-press': withOpacity('--color-secondary-press'),
      },
      textColor: {
        based: withOpacity('--color-text-based'),
        muted: withOpacity('--color-text-muted'),
        inverted: withOpacity('--color-text-inverted'),
        primary: withOpacity('--color-primary'),
      },
      backgroundColor: {
        base: withOpacity('--color-bg'),
        primary: withOpacity('--color-primary'),
      },
      borderColor: {
        base: withOpacity('--color-bg'),
      },
      gradientColorStops: {
        base: {
          hue: withOpacity('--color-bg'),
          surface: withOpacity('--color-bg-surface'),
        },
      },
      transitionDuration: {
        'nav-load': 'var(--nav-load-time)',
        'nav-link-load': 'var(--nav-link-load-time)',
      },
      transitionDelay: {
        'nav-load': 'var(--nav-load-time)',
        'nav-link-load': 'var(--nav-link-load-time)',
        'content-load': 'var(--content-load-delay)',
      },
      keyframes: {
        'nav-load': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'nav-link-load': {
          '0%': { transform: 'translateY(-25%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'content-load': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
      },
      animation: {
        'nav-load': 'nav-load var(--nav-load-time) ease-in',
        'nav-link-load': 'nav-link-load var(--nav-link-load-time) ease-in forwards',
        'content-load': 'content-load 300ms ease-in var(--content-load-delay) forwards',
        'content-load-long': 'content-load 300ms ease-in var(--content-long-load-delay) forwards',
        'content-secondary-load': 'content-load 300ms ease-in var(--content-secondary-load-delay) forwards',
        'content-secondary-load-long': 'content-load 300ms ease-in var(--content-secondary-long-load-delay) forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
