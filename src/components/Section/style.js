import styled from "styled-components";
import theme from "theme";

export const Section = styled.section`
  width: 95%;
  max-width: 1000px;
  padding: 1rem;
  margin: 2rem auto;
  position: relative;
  background-color: ${theme.colors.grayVariant};
  color: #ccc;
  border-radius: 5px;
  list-style-position: inside;
  //opacity: ${theme.opacity.global};
  h2::before {
    font-family: monospace;
    color: ${theme.colors.thirdVariant};
    content: "<h2> ";
    transition: ${theme.transitions.global};
  }
  h2::after {
    font-family: monospace;
    color: ${theme.colors.thirdVariant};
    content: " </h2>";
    transition: ${theme.transitions.global};
  }
  &:hover h2::before,
  &:hover h2::after {
    color: ${theme.colors.secondary};
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 4px;
    left: 4px;
    right: -4px;
    bottom: -4px;
    background-color: #555;
    filter: blur(10px);
    z-index: -1;
    opacity: ${theme.opacity.global};
  }

  // For Movil
  @media screen and (max-width: ${theme.threshold.width}) {
    h2::before,
    h2::after {
      font-size: ${theme.fontSizes.movil};
    }
  }
`;
