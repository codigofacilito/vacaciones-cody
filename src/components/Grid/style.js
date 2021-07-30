import styled from "styled-components";

export const Grid = styled.main`
  display: grid;
  grid-template-columns: ${(props) =>
    props.length ? `repeat(${props.length}, 1fr)` : "1fr"};
  gap: 1rem;
`;
