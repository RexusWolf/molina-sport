import React from "react";
import faker from 'faker';

function aProduct() {
  return {
    name: faker.name.title(),
    price: faker.random.number(100),
    description: faker.random.words(12),
    image: faker.random.image(),
  }
}

function generateProducts(numberOfProducts: number) {
  return new Array(numberOfProducts).fill(null).map(aProduct);
}

export const ProductContext = React.createContext(generateProducts(20));