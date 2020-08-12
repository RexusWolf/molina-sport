import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from '../navBar'

import "@testing-library/jest-dom/extend-expect"

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavBar></NavBar>, div);
  ReactDOM.unmountComponentAtNode(div);
});