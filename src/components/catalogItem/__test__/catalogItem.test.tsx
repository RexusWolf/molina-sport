import React from 'react';
import ReactDOM from 'react-dom'
import { CatalogItem } from '../catalogItem'

import { render, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import renderer from "react-test-renderer"

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CatalogItem productName="name" productDescription="description" productImg="imgurl" productPrice={22} ></CatalogItem >, div);
  ReactDOM.unmountComponentAtNode(div);
})

it("renders item correctly", () => {
  const { getByTestId } = render(<CatalogItem productName="name" productDescription="description" productImg="imgurl" productPrice={22} ></CatalogItem >);
  expect(getByTestId('item-name')).toHaveTextContent("name")
  expect(getByTestId('item-description')).toHaveTextContent("description")
  expect(getByTestId('item-price')).toHaveTextContent("22€")
})

it("matches snapshot", () => {
  const snap = renderer.create(<CatalogItem productName="name" productDescription="description" productImg="imgurl" productPrice={22} ></CatalogItem >).toJSON();
  expect(snap).toMatchSnapshot();
})