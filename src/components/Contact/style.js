import styled from "styled-components";
import theme from "theme";

export const Contact = styled.main`
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Box = styled.main`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  padding: 5px 1rem;

  // On Movil
  @media screen and (max-width: ${theme.threshold.width}) {
    font-size: 1.5rem;
  }
`;
