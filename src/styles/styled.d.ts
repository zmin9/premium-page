import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bg1: string,
    bg2: string,

    headline: string,
    text1: string,
    text2: string,
    text3: string,
    highlight: string,

    button: string,
    onButton: string,
  }
}