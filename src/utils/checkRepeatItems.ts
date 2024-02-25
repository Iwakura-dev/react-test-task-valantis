import { IProductsList } from "../types/types";
// declare function which the check repeat items and delete the repeat items with the help reduce func
export const checkRepeatItems = (
  productsItems: IProductsList[]
): IProductsList[] => {
  const productsSet = productsItems.reduce(
    (res: IProductsList[], product: IProductsList) => {
      if (!res.find((el) => el.id === product.id)) {
        res.push(product);
      }
      return res;
    },
    []
  );
  return productsSet;
};
