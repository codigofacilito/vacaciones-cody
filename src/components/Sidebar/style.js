import styled from "styled-components";
import { Link as LinkGatsby } from "gatsby";
import theme from "theme";

export const Sidebar = styled.main`
  width: 15vw;
  position: fixed;
  top: ${(props) => (props.height ? props.height + "px" : "90px")};
  left: 0;
  bottom: 0;
  background-color: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  opacity: ${theme.opacity.global};
`;

export const Link = styled(LinkGatsby)`
  color: #fff;
  padding: 1rem 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: ${theme.transitions.global};

  &[aria-current] {
    background-color: ${theme.colors.third};
  }

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;
