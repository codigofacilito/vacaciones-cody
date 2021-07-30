import styled from "styled-components";
import theme from "theme";

export const Hidden = styled.main`
  @media screen and (max-width: ${theme.threshold.width}) {
    display: ${(props) => (props.onmovil ? "none" : "block")};
  }
  @media screen and (min-width: ${theme.threshold.width}) {
    display: ${(props) => (props.ondesktop ? "none" : "block")};
  }
`;
