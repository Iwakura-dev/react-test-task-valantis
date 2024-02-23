export type TGetProductsId = {
  result: string[];
};
interface IProductsList {
  id: string;
  brand?: null | string;
  price: number;
  product: string;
}
export type TProductsList = {
  result: IProductsList[];
};
