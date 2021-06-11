import React from "react";

import { Search, FormStyle, ContainerSearchJob } from "./FormStyle";
import Input from "./Input";
import Label from "./Label";

const InputSearch = ({ handleChange }) => {
  return (
    <ContainerSearchJob>
      <FormStyle>
        <Search>
          <Label handleChange={handleChange} />
          <Input />
        </Search>
      </FormStyle>
    </ContainerSearchJob>
  );
};

export default InputSearch;
