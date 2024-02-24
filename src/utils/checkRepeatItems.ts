import { IProductsList } from "../types/types";

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
