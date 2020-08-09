import React from 'react';
import ReactDOM from 'react-dom';
import { SearchBar } from '../searchBar'

import "@testing-library/jest-dom/extend-expect"

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchBar onChange={""}></SearchBar>, div);

  ReactDOM.unmountComponentAtNode(div);
});