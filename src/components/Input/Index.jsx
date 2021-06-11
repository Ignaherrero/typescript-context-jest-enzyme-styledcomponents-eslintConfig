import React from "react";

import { StyledInput } from "./Styles";

const Input = ({
  handleChange,
  type,
  value,
  placeholder,
  name,
  dontShowPromptCheckbox,
}) => {
  return (
    <StyledInput
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      dontShowPromptCheckbox
    ></StyledInput>
  );
};

export default Input;
