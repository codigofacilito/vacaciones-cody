import styled from "styled-components";
import theme from "theme";

export const Grid = styled.main`
  display: grid;
  grid-template-columns: ${(props) =>
    props.length ? `repeat(${props.length}, 1fr)` : "1fr"};
  gap: 1rem;

  // For Movil
  @media screen and (max-width: ${theme.threshold.width}) {
    ${(props) => (props.movil ? `grid-template-columns: 1fr` : "")}
  }
`;
