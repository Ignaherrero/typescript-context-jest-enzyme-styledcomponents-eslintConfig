import styled, { css } from "styled-components";

export const StyledInput = styled.input`
  display: ${({ dontShowPromptCheckbox }) =>
    dontShowPromptCheckbox && "hidden"};

  /* & input[type="text"] {
    border-radius: 4px;
    width: 347px;
    height: 47px;
    font-family: "roboto";
    color: #b9bdcf;
    background-color: white;
    font-weight: 400;
    font-size: 1rem;
    border: none;
  } */
`;

export const variants = {
  primary: css``,
};
