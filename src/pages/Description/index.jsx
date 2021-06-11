import React from "react";

import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import Span from "../../components/Span/Index";
import { CardTwo, Contact, DescriptionJob, Job, Title } from "./Styles.jsx";
export const Description = () => {
  const history = useHistory();
  const { location } = useHistory();
  const { companyLogo, title, type, company, description } = location.state;
  const handleClick = () => {
    history.push("/");
  };

  return (
    <>
      <Button onClick={handleClick}>Back to search</Button>
      <Title>{title}</Title>
      <Contact>
        Please email a copy of your resume and online portfolio to{" "}
        <a href="">wes@kasisto.com</a> & CC <a href="">eric@kasisto.com</a>
      </Contact>
      <Job></Job>
      <Button>{type}</Button>
      <Span clock block>
        5 days ago
      </Span>
      <CardTwo>
        <img src={companyLogo} alt={title} />
        <div>
          <h3>{company}</h3>
          <Span world>New York</Span>
        </div>
      </CardTwo>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
      <DescriptionJob>{description}</DescriptionJob>
    </>
  );
};
