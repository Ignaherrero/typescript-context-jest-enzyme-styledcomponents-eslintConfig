import styled from "styled-components";

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 124px auto;
  color: #334680;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  height: 151px;
  width: 347px;

  & h2 {
    font-weight: 700;
    font-size: 0.9rem;
    transform: translateY(7px);
  }

  & p {
    font-size: 1.2rem;
  }
`;

const StyledSvgIconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 208px;
  color: #b7bcce;
  font-size: 0.9rem;
  font-weight: 500;
  transform: translate(-5px, 27.1px);
`;

export { StyledCard, StyledSvgIconsContainer };
