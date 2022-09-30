import { createGlobalStyle } from "styled-components";
import BebasNeue from "../../fonts/BebasNeue-Regular.ttf";
import Cormorant from "../../fonts/Cormorant-VariableFont_wght.ttf";
import OpenSans from "../../fonts/OpenSans-Regular.ttf";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: "BebasNeue";
  src: url(${BebasNeue}) format("truetype");
}

@font-face{
  font-family: "OpenSans";
  src: url(${OpenSans}) format("truetype");
}

@font-face{
  font-family: "Cormorant";
  src: url(${Cormorant}) format("truetype");
}

* {
  font-family: "OpenSans", Arial, Helvetica, sans-serif;
}

h1, h2, h3, h4, button {
  font-family: "BebasNeue";
}

html, body {
  background-color: ${props => props.theme.colors.DarkGray}
}
`;

export default GlobalStyle;