const colorPalette = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#00bcd4',
  '#2196f3',
  '#009688',
  '#4caf50',
  '#ff5722',
  '#795548',
  '#607d8b',
];

export const useColorPalette = codeString => {
  if (codeString === undefined) return undefined;
  var hash = codeString.split('').reduce((c, n) => {
    return c + n.charCodeAt(0);
  }, 0);
  return colorPalette[hash % colorPalette.length];
};

useColorPalette.colors = colorPalette;
