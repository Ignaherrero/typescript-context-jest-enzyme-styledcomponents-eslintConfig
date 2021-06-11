import { SEARCH_JOB } from "../../common/constants";
import { jobReducer } from "../../reducers/jobReducers";

describe("Reducers.js", () => {
  test("Debe retornar los valores por defecto", () => {
    const action = {
      action: "",
      payload: "",
    };
    const result = jobReducer({}, action);

    console.log(result);
    expect(result).toStrictEqual({});
  });

  test("Debe retornar un string", () => {
    const action = {
      action: SEARCH_JOB,
      payload: "hola soy nacho",
    };
    const result = jobReducer({}, action);

    expect;
  });
});
