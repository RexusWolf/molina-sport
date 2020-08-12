import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App'

import "../../navBar/__test__/node_modules/@testing-library/jest-dom/extend-expect"

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App></App>, div);
  ReactDOM.unmountComponentAtNode(div);
});