import styled from "styled-components";

import { colors } from "../../common/styles";

const StyledButton = styled.button`
  color: ${colors.darkCornFlowerBlue};
  font-size: 0.9rem;
  font-weight: 700;
  border: 1px solid ${colors.darkCornFlowerBlue};
  box-sizing: border-box;
  border-radius: 4px;
  width: 66px;
  min-height: 25px;
  background-color: transparent;
  transform: translateY(3px);
  margin: 12px 0;
  cursor: pointer;
`;

// StyledBack

export { StyledButton };
