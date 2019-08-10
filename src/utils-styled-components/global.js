import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* Minimal CSS Reset Start */

html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, small, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

/* Minimal CSS Reset End */

body {
  font-family: 'Open Sans', sans-serif;
  background: ${props => props.theme.colors.background.lightGrey};
  color: ${props => props.theme.colors.text.darkGrey};
  line-height: 19.1px
}

h1, h3 {
  font-family: 'Hind', sans-serif;
  font-weight: 500;
}

h1 {
  font-size: 48px;
  line-height: 57.3px;
}

h3 {
  font-size: 32px;
  line-height: 38.2px;
}

small {
  font-size: 14px;
  line-height: 16.7px;
}

`;

export default GlobalStyle;
