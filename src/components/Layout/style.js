import styled, { createGlobalStyle } from "styled-components";
import theme from "theme";

export const GlobalStyle = createGlobalStyle`
  // I prefer this styles
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Raleway, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  // For responsive purposes
  img {
    width: 100%;
  }
`;

export const Layout = styled.main`
  // For Desktop
  @media screen and (min-width: ${theme.threshold.width}) {
    font-size: ${theme.fontSizes.desktop};
    margin-left: 15vw;
  }
  // For Movil
  @media screen and (max-width: ${theme.threshold.width}) {
    font-size: ${theme.fontSizes.movil};
    margin-bottom: 100px;
  }
`;
