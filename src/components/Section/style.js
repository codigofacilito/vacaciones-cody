import styled from "styled-components";
import theme from "theme";

export const Section = styled.section`
  width: 95%;
  max-width: 1000px;
  padding: 1rem;
  margin: 2rem auto;
  position: relative;
  background-color: #333;
  color: #ccc;
  border-radius: 5px;
  list-style-position: inside;
  opacity: ${theme.opacity.global};
  h2::before {
    font-family: monospace;
    color: ${theme.colors.thirdVariant};
    content: "<h2> ";
  }
  h2::after {
    font-family: monospace;
    color: ${theme.colors.thirdVariant};
    content: " </h2>";
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    right: -1px;
    bottom: -1px;
    background-color: #5555;
    filter: blur(4px);
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
