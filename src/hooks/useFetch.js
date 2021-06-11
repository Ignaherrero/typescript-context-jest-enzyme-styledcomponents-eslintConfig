/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import { geoFindMe } from "../utils/getLocation";

const useFetch = (jobName, cityNameInput, fullTime) => {
  const [state, setState] = useState({
    data: [],
    isLoading: true,
  });

  const latitude = 0;
  const longitude = 0;

  useEffect(() => {
    fetch(
      `https://jobs.github.com/positions.json?description=${jobName}&page=0&full_time=${fullTime}&${
        longitude > 0
          ? `long=${longitude}&lat=${latitude}`
          : `&location=${cityNameInput}`
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setState({ data, isLoading: false });
      })
      .catch((e) => console.log(e));
  }, [cityNameInput, jobName, fullTime]);

  return state;
};

export { useFetch };
