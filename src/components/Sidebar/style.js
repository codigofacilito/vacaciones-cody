import styled from "styled-components";
import { Link as LinkGatsby } from "gatsby";
import theme from "theme";

export const Sidebar = styled.main`
  width: 15vw;
  position: fixed;
  top: 90px;
  left: 0;
  bottom: 0;
  background-color: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
`;

export const Link = styled(LinkGatsby)`
  color: #fff;
  padding: 1rem 5vw;
`;
