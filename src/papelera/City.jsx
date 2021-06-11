import React from "react";

import { nanoid as id } from "nanoid";

import { ContentRadio as StyledConteinerRadio } from "./FormStyle";

const City = ({ handleChange, form }) => {
  const arrayCity = ["London", "Amsterdam", "New York", "Berlin"];

  return (
    <StyledConteinerRadio>
      {arrayCity.map((item) => {
        return (
          <label key={id()}>
            <input
              type="radio"
              name="cityNameRadio"
              value={item}
              onChange={handleChange}
              checked={form.cityNameRadio === item}
            ></input>
            {item}
          </label>
        );
      })}
    </StyledConteinerRadio>
  );
};

export default City;
