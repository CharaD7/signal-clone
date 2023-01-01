const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const black = '#000';
const ash = '#ccc';

export default {
  light: {
    text: black,
    background: tintColorDark,
    tint: tintColorLight,
    tabIconDefault: ash,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: tintColorDark,
    background: black,
    tint: tintColorDark,
    tabIconDefault: ash,
    tabIconSelected: tintColorDark,
  },
};
