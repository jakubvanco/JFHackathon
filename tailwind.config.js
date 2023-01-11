module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'ui-sans-serif', 'system-ui'],
        serif: ['Poppins', 'Arial', 'ui-serif', 'Georgia'],
      },
      screens: {
        tiny: '350px',
        w460: '460px',
        sm: '640px',
        md: '768px',
        lg: '992px',
        w1100: '1100px',
        xl: '1260px',
        w1400: '1401px',
        '2xl': '1536px',
        w2000: '2000px',
      },
      fontFamily: {
        heading: 'var(--fontFamilyHeading)',
        body: 'var(--fontFamilyBody)',
      },
      colors: {
        primary: 'var(--primary, #3b82f6)',
        primaryDark: 'var(--primaryDark, #3b82f6)',
        primaryDarker: 'var(--primaryDarker, #3b82f6)',
        primaryText: 'var(--primaryText, #FFF)',

        secondary: 'var(--secondary, #64748b)',
        secondaryDark: 'var(--secondaryDark, #475569)',
        secondaryDarker: 'var(--secondaryDarker, #475569)',
        secondaryText: 'var(--secondaryText, #FFF)',

        info: 'var(--info, #3b82f6)',
        infoDark: 'var(--infoDark, #2563eb)',
        infoDarker: 'var(--infoDarker, #2563eb)',
        infoText: 'var(--infoText, #FFF)',

        success: 'var(--success, #22c55e)',
        successDark: 'var(--successDark, #16a34a)',
        successDarker: 'var(--successDarker, #16a34a)',
        successText: 'var(--successText, #FFF)',

        warning: 'var(--warning, #f59e0b)',
        warningDark: 'var(--warningDark, #d97706)',
        warningDarker: 'var(--warningDarker, #d97706)',
        warningText: 'var(--warningText, #FFF)',

        danger: 'var(--danger, #ef4444)',
        dangerDark: 'var(--dangerDark, #dc2626)',
        dangerDarker: 'var(--dangerDarker, #dc2626)',
        dangerText: 'var(--dangerText, #FFF)',

        help: 'var(--help, #a855f7)',
        helpDark: 'var(--helpDark, #9333ea)',
        helpDarker: 'var(--helpDarker, #9333ea)',
        helpText: 'var(--helpText, #FFF)',

        // primaryColorRGB: 37, 99, 235;
        // plainButtonTextColorRGB: 169, 169, 169;

        'surface-a': 'var(--surface-a)',
        'surface-b': 'var(--surface-b)',
        'surface-c': 'var(--surface-c)',
        'surface-d': 'var(--surface-d)',
        'surface-e': 'var(--surface-e)',
        'surface-f': 'var(--surface-f)',

        shade000: 'var(--shade000)',
        shade100: 'var(--shade100)',
        shade200: 'var(--shade200)',
        shade300: 'var(--shade300)',
        shade400: 'var(--shade400)',
        shade500: 'var(--shade500)',
        shade600: 'var(--shade600)',
        shade700: 'var(--shade700)',
        shade800: 'var(--shade800)',
        shade900: 'var(--shade900)',
      },
    },
  },
};
