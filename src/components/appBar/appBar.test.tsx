import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from './appBar'

import "@testing-library/jest-dom/extend-expect"

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AppBar></AppBar>, div);
  ReactDOM.unmountComponentAtNode(div);
});