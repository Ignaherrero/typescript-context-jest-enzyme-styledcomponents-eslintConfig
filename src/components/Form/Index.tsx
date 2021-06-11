import React from "react";

import { StyledFormContainer } from "./Styles";
import { IForm } from "./types";

const Form = ({ children }: IForm): JSX.Element => {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <StyledFormContainer onSubmit={handleSubmit}>
      {children}
    </StyledFormContainer>
  );
};

export default Form;
