/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import React, { useState, useReducer } from "react";

import { Pagination } from "react-custom-pagination";
import { useHistory } from "react-router-dom";

import { ReactComponent as IconCheckOk } from "../../assets/check.svg";
import { SEARCH_JOB } from "../../common/constants";
import Card from "../../components/Card/Index";
import Footer from "../../components/Footer";
import Form from "../../components/Form/Index";
import Input from "../../components/Input/Index";
import { useFetch } from "../../hooks/useFetch";
import { jobReducer } from "../../reducers/jobReducers";
import { Container, TitleStyle } from "./Styles.jsx";

const initialState = {
  cityNameRadio: "london",
  cityNameInput: "",
  jobName: "",
  fullTime: true,
};

export const Home = () => {
  const [form, dispatch] = useReducer(jobReducer, initialState);

  const { data: jobs, isLoading } = useFetch(
    form.jobName,
    form.cityNameInput,
    form.fullTime
  );

  const handleChange = (e) => {
    const action = {
      type: SEARCH_JOB,
      payload: { name: e.target.name, value: e.target.value },
    };

    dispatch(action);
  };

  const history = useHistory();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // get current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = jobs.slice(indexOfFirstPost, indexOfLastPost);

  // when user clicks on number this function will execute
  const paginate = (number) => {
    setCurrentPage(number);
  };

  debugger;
  return (
    <>
      <Container>
        <TitleStyle>
          Github <span>Jobs</span>
        </TitleStyle>
        {JSON.stringify(form)}
        <Form>
          <div>
            <div>
              <div>
                <label htmlFor="">
                  <Input
                    type="text"
                    placeholder="title, company, expertice"
                    handleChange={handleChange}
                    name="jobName"
                  />
                </label>
                <Input type="submit" value="Search" />
              </div>
            </div>
          </div>

          <label onChange={handleChange}>
            <span>{form.fullTime && <IconCheckOk />}</span>
            Full Time
            <Input
              type="checkbox"
              name="fullTime"
              value={form.fullTime}
              dontShowPromptCheckbox
            />
          </label>

          <span>Location</span>
          <label htmlFor="" onChange={handleChange}>
            <Input
              name="cityNameInput"
              type="text"
              placeholder="City, state, zip code or country"
            />
          </label>

          <fieldset>
            <label htmlFor="london" onChange={handleChange}>
              <Input
                type="radio"
                id="london"
                value="london"
                name="cityNameInput"
                checked={form.cityNameRadio === "london"}
              />
              London
            </label>
            <label htmlFor="amsterdam" onChange={handleChange}>
              <Input
                type="radio"
                id="amsterdam"
                value="amsterdam"
                name="cityNameInput"
                checked={form.cityNameRadio === "amsterdam"}
              />
              Amsterdam
            </label>
            <label htmlFor="newyork" onChange={handleChange}>
              <Input
                type="radio"
                id="new york"
                value="new york"
                name="cityNameInput"
                checked={form.cityNameRadio === "newyork"}
              />
              New York
            </label>
            <label htmlFor="berlin" onChange={handleChange}>
              <Input
                type="radio"
                id="berlin"
                value="berlin"
                name="cityNameInput"
                checked={form.cityNameRadio === "berlin"}
              />
              Berlin
            </label>
          </fieldset>
        </Form>

        {/* <Formi
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          form={form}
        /> */}

        {!isLoading && jobs.length === 0 && <h1>Ningun job en tu ubicación</h1>}

        {currentPosts.map((item) => (
          <Card
            key={item.id}
            companyLogo={item.company_logo}
            title={item.title}
            type={item.type}
            location={item.location}
            createdAt={item.created_at}
            company={item.company}
            description={item.description}
            history={history}
          />
        ))}

        {Boolean(jobs.length) && (
          <Pagination
            totalPosts={jobs.length}
            postsPerPage={postsPerPage}
            paginate={paginate}
            view={5}
            showLast={true}
            showFirst={true}
            showIndex={true}
          />
        )}

        <Footer />
      </Container>
    </>
  );
};
