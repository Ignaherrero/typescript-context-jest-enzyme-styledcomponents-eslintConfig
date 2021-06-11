import { shallow } from "enzyme/build";
import { useHistory } from "react-router";

import { Description } from "../../pages/Description";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
    location: {
      state: {
        companyLogo: "sasa",
        title: "algo",
        type: "full",
        company: "algo",
        description: "algo",
      },
    },
  }),
}));

describe("<Description/>", () => {
  test("debe retornar el componente description", () => {
    const wrapper = shallow(<Description />);

    expect(wrapper).toMatchSnapshot();
  });
});
