import styled from "styled-components";
import theme from "theme";

export const Box = styled.main`
  transition: 300ms ease;
  &:hover {
    color: ${theme.colors.primary};
  }
`;
