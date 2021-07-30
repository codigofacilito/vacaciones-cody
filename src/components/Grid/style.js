import styled from "styled-components";

export const Grid = styled.main`
  display: grid;
  grid-template-columns: ${(props) =>
    props.alv ? `repeat(${props.alv}, 1fr)` : "1fr"};
`;
