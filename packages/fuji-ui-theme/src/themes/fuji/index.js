// space scales
const space = [0, '4px', '8px', '16px', '32px', '64px'];
space.xs = space[1];
space.s = space[2];
space.m = space[3];
space.l = space[4];
space.xl = space[5];

// font-size scales
const fontSizes = [
  '0.75rem',
  '0.875rem',
  '1.0rem',
  '1.25rem',
  '1.5rem',
  '2.0rem',
  '2.5rem',
];
fontSizes.h1 = fontSizes[6];
fontSizes.h2 = fontSizes[5];
fontSizes.h3 = fontSizes[4];
fontSizes.h4 = fontSizes[3];
fontSizes.h5 = fontSizes[2];
fontSizes.h6 = fontSizes[1];
fontSizes.body = fontSizes[2];
fontSizes.xxs = fontSizes[0];
fontSizes.xs = fontSizes[1];
fontSizes.s = fontSizes[2]; // default
fontSizes.m = fontSizes[3];
fontSizes.l = fontSizes[4];
fontSizes.xl = fontSizes[5];
fontSizes.xxl = fontSizes[6];

// base theme define all base values. You may change the values when creating a new theme
const baseTheme = {
  breakpoints: ['480px', '768px', '960px', '1280px'],
  fontSizes: fontSizes,
  space: space,
  colors: {
    primary: '#0b3f73',
    primaryLightVariant: '#63a4ff',
    primaryDarkVariant: '#1F1F1F',
    secondary: '#eceff1',
    secondaryLightVariant: '#ffffff',
    secondaryDarkVariant: '#cfd8dc',
    error: '#e91e63',
    errorLightVariant: '#f5407d',
    errorDarkVariant: '#c91854',
    link: '#0d47a1',
    background: '#ffffff',
    surface: '#ffffff',
    input: '#F7F7F7',
    onPrimary: '#ffffff',
    onSecondary: '#29434e',
    onBackground: '#263145',
    onSurface: '#263145',
    onInput: '#000000',
    onError: '#ffffff',
    border: 'rgba(0,0,0,0.1)',
    borderLightVariant: 'rgba(255.0,255.0,255.0,0.2)',
  },
  fonts: {
    heading: '"Roboto Slab", serif',
    // body: 'system-ui, sans-serif',
    body:
      "'Roboto', -apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    subtitle: 700,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    subtitle: 1.25,
    heading: 1.25,
  },
  borderWidths: {
    separator: '1px',
    surface: '1px',
    input: '2px',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  radii: {
    s: '2px',
    m: '4px',
    l: '8px',
  },
  transitions: {
    box: 'all 0.2s ease',
    input: 'all 0.2s ease',
    button: 'all 0.2s ease',
  },
};

const theme = {
  ...baseTheme,
  buttons: {
    primary: {
      '--button-bg': baseTheme.colors.primary,
      backgroundColor: baseTheme.colors.primary,
      color: baseTheme.colors.onPrimary,
      '&:hover, &:focus': {
        '--button-bg': baseTheme.colors.primaryDarkVariant,
        backgroundColor: baseTheme.colors.primaryDarkVariant,
      },
      '.spinner': {
        backgroundColor: 'var(--button-bg)',
      },
    },
    secondary: {
      '--button-bg': baseTheme.colors.secondary,
      backgroundColor: baseTheme.colors.secondary,
      color: baseTheme.colors.onSecondary,
      '&:hover, &:focus': {
        '--button-bg': baseTheme.colors.secondaryDarkVariant,
        backgroundColor: baseTheme.colors.secondaryDarkVariant,
      },
      '.spinner': {
        backgroundColor: 'var(--button-bg)',
      },
    },
    plain: {
      '--button-bg': '#EEEEEE',
      backgroundColor: '#EEEEEE',
      color: 'rgba(0,0,0,0.9)',
      '&:hover, &:focus': {
        '--button-bg': '#DDDDDD',
        backgroundColor: '#DDDDDD',
      },
      '.spinner': {
        backgroundColor: 'var(--button-bg)',
      },
    },
    danger: {
      '--button-bg': baseTheme.colors.error,
      backgroundColor: baseTheme.colors.error,
      color: baseTheme.colors.onError,
      '&:hover, &:focus': {
        '--button-bg': baseTheme.colors.errorDarkVariant,
        backgroundColor: baseTheme.colors.errorDarkVariant,
      },
      '.spinner': {
        backgroundColor: 'var(--button-bg)',
      },
    },
    icon: {
      borderRadius: baseTheme.radii.m,
      '--button-bg': 'transparent',
      backgroundColor: 'transparent',
      color: baseTheme.colors.primary,
      '&:hover, &:focus': {
        '--button-bg': 'transparent',
        backgroundColor: 'transparent',
      },
      '> .spinner': {
        backgroundColor: 'var(--button-bg)',
      },
    },
  },
  inputSizes: {
    s: {
      fontSize: baseTheme.fontSizes.xs,
      minHeight: '1.75rem',
    },
    m: {
      fontSize: baseTheme.fontSizes.s,
      minHeight: '2.25rem',
    },
    l: {
      fontSize: baseTheme.fontSizes.m,
      minHeight: '2.75rem',
    },
  },
  borders: {
    light: `${baseTheme.borderWidths.surface} solid ${baseTheme.colors.border}`,
    input: `${baseTheme.borderWidths.input} solid ${baseTheme.colors.border}`,
  },
};

export default theme;
