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
  @media screen and (min-width: ${theme.threshold.width}) {
    margin-left: 15vw;
  }
  margin-bottom: 100px;
`;
