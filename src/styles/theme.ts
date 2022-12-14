import { DefaultTheme } from 'styled-components';

import palette from './palette';

const theme: DefaultTheme = {
  bg1: palette.white,
  bg2: palette.gray1,
  bg3: palette.purple1,

  headline: palette.black,
  text1: palette.gray6,
  text2: palette.gray3,
  text3: palette.gray2,
  text4: palette.white,
  text5: palette.gray5,
  highlight: palette.purple2,
  description: palette.gray4,

  purpleGradient: `linear-gradient(${palette.purple2}, ${palette.purple3})`,

  button: palette.purple2,
  onButton: palette.white,
};

export default theme;
