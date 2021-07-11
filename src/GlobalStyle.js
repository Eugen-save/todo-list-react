import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: 'Montserrat', sans-serif;
  background: ${({theme}) => theme.colors.gallery};
  max-width: 900px;
  padding: 20px;
  margin: 0 auto;
}

button {
  cursor: pointer;
}

`;