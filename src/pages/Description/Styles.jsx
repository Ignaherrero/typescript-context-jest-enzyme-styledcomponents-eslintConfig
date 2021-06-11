import styled from "styled-components";

const Title = styled.h2`
  color: #b9bdcf;
`;

const Job = styled(Title)`
  color: #334680;
`;

const DescriptionJob = styled.p`
  color: #334680;
`;

const CardTwo = styled.div`
  display: flex;
  margin-top: 12px;

  & img {
    display: block;
    width: 80px;
  }
`;

const Contact = styled.p`
  color: #334680;
  font-weight: 500;
`;

export { Contact, CardTwo, DescriptionJob, Job, Title };
