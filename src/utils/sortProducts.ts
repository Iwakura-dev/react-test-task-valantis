import { IProductsList } from "../types/types";

export const sortByBrand = (products: IProductsList[]) => {
  return [...products].sort((a, b) => a.brand.localeCompare(b.brand));
};

export const sortByProduct = (products: IProductsList[]) => {
  return [...products].sort((a, b) => a.product.localeCompare(b.product));
};

export const sortByPrice = (products: IProductsList[]) => {
  return [...products].sort((a, b) => a.price - b.price);
};
