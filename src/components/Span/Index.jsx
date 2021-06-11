import React from "react";

import { SvgIconClock, SvgIconWorld } from "../../common/svgs";
import { StyledSpan } from "./Styles";

const Span = ({ children, variant, world, clock, block }) => {
  return (
    <StyledSpan block>
      {world && <SvgIconWorld />}
      {clock && <SvgIconClock />}
      {children}
    </StyledSpan>
  );
};

export default Span;
