import styled from "styled-components";
import theme from "theme";

export const Button = styled.button`
  font-size: 1rem;
  padding: 5px 1rem;
  background-color: ${theme.colors.third};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: ease 200ms;
  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;
