import styled from "styled-components";
import theme from "theme";
import { Link as LinkGatsby } from "gatsby";

export const Footer = styled.footer`
  background-color: ${theme.colors.primary};
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  opacity: ${theme.opacity.global};
`;

export const Link = styled(LinkGatsby)`
  display: flex;
  padding: 5px 0;
  font-size: 0.7rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &[aria-current] {
    background-color: ${theme.colors.third};
  }
`;
