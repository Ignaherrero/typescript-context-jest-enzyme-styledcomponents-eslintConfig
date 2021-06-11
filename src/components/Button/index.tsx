import React from "react";

import { StyledButton } from "./styles";
import { IButton } from "./types";

const Button = ({ children, handleClick, variant }: IButton): JSX.Element => {
  return (
    <StyledButton onClick={handleClick} /* variant={variant} */>
      {children}
    </StyledButton>
  );
};

export default Button;
