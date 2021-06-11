import { SEARCH_JOB } from "../common/constants";

export const jobReducer = (state, { type, payload }) => {
  switch (type) {
    case SEARCH_JOB:
      state = { ...state, [payload.name]: payload.value };
      return state;
    default:
      return state;
  }
};
