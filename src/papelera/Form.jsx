/* eslint-disable no-debugger */
import React from "react";

import { ReactComponent as Icon } from "../../assets/check.svg";
import City from "./City";
import { MainForm, FullTime, Location, InputSearchLocation } from "./FormStyle";

const Form = ({ handleSubmit, handleChange, form }) => {
  return (
    <>
      <MainForm action="" method="" onSubmit={handleSubmit}>
        <InputSearch handleChange={handleChange} />
        {/* TODO tener en cuenta que va a ser un solo form, y que cuando esto se envie al servidor se van a tomar los datos que completo, el que va a ser obligatorio es el del input. */}
        <FullTime onChange={handleChange}>
          <span>{form.fullTime && <Icon />}</span>
          Full Time
          {/* TODO los inpus va a ser un componente */}
          <input type="checkbox" name="fullTime" value={form.FullTime} />
        </FullTime>
        <Location>Location</Location>
        <InputSearchLocation>
          <input
            type="text"
            name="cityNameInput"
            placeholder="City, state, zip code or country"
            onChange={handleChange}
          />
        </InputSearchLocation>
        <City handleChange={handleChange} form={form} />
      </MainForm>
    </>
  );
};

export default Form;
