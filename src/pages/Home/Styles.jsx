import styled from "styled-components";

const TitleStyle = styled.h1`
  & span {
    font-weight: 300;
  }
`;

const Container = styled.div`
  display: grid;
  grid-row-gap: 20px;
  justify-content: center;
`;

export { TitleStyle, Container };
