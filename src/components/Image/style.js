import styled from "styled-components";
import ImgGatsby from "gatsby-image";
import theme from "theme";

export const Img = styled(ImgGatsby)`
  cursor: pointer;
  transition: ${theme.transitions.global};

  &:hover {
    opacity: calc(${theme.opacity.global} - 0.2);
  }
`;
