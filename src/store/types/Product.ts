export interface Product {
  productName: string;
  productImg: string;
  productDescription: string;
  productPrice: number;
}

export interface ProductsState {
  products: Array<Product>;
}
