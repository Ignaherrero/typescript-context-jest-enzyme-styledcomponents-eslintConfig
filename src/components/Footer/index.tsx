import React from "react";

import { StyledFooter } from "./styles";

const Footer: React.FC = (): JSX.Element => {
  return (
    <StyledFooter>
      Challenge by
      <a href="https://devchallenges.io/" target="_blank" rel="noreferrer">
        DevChallenge.{" "}
      </a>
      Coded by{" "}
      <a href="https://github.com/Ignaherrero" target="_blank" rel="noreferrer">
        Ignacio Herrero.
      </a>
    </StyledFooter>
  );
};

export default Footer;
