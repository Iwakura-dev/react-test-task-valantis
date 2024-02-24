export type TGetProductsId = {
  [key: string]: string[];
};
export interface IProductsList {
  id: string;
  brand?: null | string;
  price: number;
  product: string;
}
