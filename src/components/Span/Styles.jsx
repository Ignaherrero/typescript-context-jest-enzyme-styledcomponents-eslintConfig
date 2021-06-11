import styled from "styled-components";

const StyledSpan = styled.span`
  display: ${({ block }) => (block ? "block" : "inline")};
`;

export { StyledSpan };
