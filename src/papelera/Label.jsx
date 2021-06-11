import React from "react";

const Label = ({ handleChange }) => {
  return (
    <>
      <label>
        <input
          type="text"
          name="jobName"
          placeholder="Title company expertice"
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default Label;
