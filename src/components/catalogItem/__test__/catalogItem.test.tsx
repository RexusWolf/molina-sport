import React from 'react';
import ReactDOM from 'react-dom'
import { CatalogItem } from '../catalogItem'
import { extend, expect } from "@testing-library/extend-expect"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"

describe('CatalogItem component', () => {
  const defaultProps = {
    productName: "name",
    productImg: "description",
    productDescription: "imgurl",
    productPrice: 33
  }

  it("renders without crashing", () => {
    const props = {
      ...defaultProps,
    }

    const div = document.createElement("div");
    ReactDOM.render(<CatalogItem {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it("renders item correctly", () => {
    const { getByTestId } = render(<CatalogItem productName="name" productDescription="description" productImg="imgurl" productPrice={22} ></CatalogItem >);
    expect(getByTestId('item-name')).toHaveTextContent("name")
    expect(getByTestId('item-description')).toHaveTextContent("description")
    expect(getByTestId('item-price')).toHaveTextContent("22€")
    const { getByText } = render(<CategoryMenu {...props} />);

  })

  it("matches snapshot", () => {
    const snap = renderer.create(<CatalogItem productName="name" productDescription="description" productImg="imgurl" productPrice={22} ></CatalogItem >).toJSON();
    expect(snap).toMatchSnapshot();
  })
})