import React from "react";

import { useFetch } from "../../hooks/useFetch.js";
import { Home } from "../../pages/Home/index.jsx";

const { shallow } = require("enzyme");

jest.mock("../../hooks/useFetch");

describe("<Home/>", () => {
  test("Debe renderizar el componente", () => {
    useFetch.mockReturnValue({
      data: [],
    });
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe renderizar lo que devuelva el fetch", () => {
    useFetch.mockReturnValue({
      data: [
        {
          id: "0691096c-1b44-47e7-9767-15fe5e1dec5a",
          type: "Full Time",
          url: "https://jobs.github.com/positions/0691096c-1b44-47e7-9767-15fe5e1dec5a",
          created_at: "Fri May 07 17:56:37 UTC 2021",
          company: "ISE",
          company_url: "http://ISE.io",
          location: "Baltimore, MD",
          title: "Mid-Senior Full Stack Developer",
          description: " @ISEsecurity and @IoTvillage",
          how_to_apply:
            '<p>Apply at <a href="https://www.ise.io/careers/">https://www.ise.io/careers/</a></p>\n',
          company_logo:
            "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcmlpIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--51899c4af7f26c0b14708f451979b9a803096b39/ISE_Logo_rgb.jpg",
        },
      ],
    });

    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe cambiar fulltime a false", () => {
    const wrapper = shallow(<Home />);

    console.log(wrapper.text().include("Full Time").simulate("clic"));
  });

  test("Debe retornar la propiedad fulltime true", () => {});
});
