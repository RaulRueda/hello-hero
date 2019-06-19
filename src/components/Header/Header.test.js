//Libraries
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

//Components for Enzyme
import Header from "./Header";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

configure({ adapter: new Adapter() });

describe("<Header />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("Should render a Navbar", () => {
    expect(wrapper.find(Navbar));
  });

  it("Should render a Navbar with (4) Nav.Item", () => {
    expect(wrapper.find(Nav.Item)).toHaveLength(4);
  });

  it("Should render a Navbar with (1) FontAwesome icon for Dark Mode switch", () => {
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
  });
});
