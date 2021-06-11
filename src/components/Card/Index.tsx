import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { SvgIconClock, SvgIconWorld } from "../../common/svgs";
import Button from "../Button";
import { StyledCard, StyledSvgIconsContainer } from "./styles";
import { ICard } from "./types";

const Card: React.FC<ICard> = ({
  companyLogo,
  title,
  type,
  location,
  createdAt,
  company,
  history,
  description,
}: ICard): JSX.Element => {
  const handleClick = () => {
    // history.push("/description", {
    //   companyLogo,
    //   title,
    //   type,
    //   location,
    //   createdAt,
    //   company,
    //   description,
    // });
  };

  return (
    <StyledCard>
      <Router>
        <img src={companyLogo} alt={title}></img>
        <div>
          <h2>{company}</h2>
          <p>{title}</p>
          <Button>{type}</Button>
          {/* <ContainerMoreInfo /> */}
          <StyledSvgIconsContainer>
            <SvgIconWorld />
            <SvgIconClock />
          </StyledSvgIconsContainer>
        </div>
        <Button onClick={handleClick}>Ir</Button>
      </Router>
    </StyledCard>
  );
};

export default Card;
