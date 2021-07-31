import styled from "styled-components";
import theme from "theme";

export const Box = styled.main`
  padding: 1px 5px;
  transition: 300ms ease;
  &:hover {
    color: ${theme.colors.secondary};
  }
`;
