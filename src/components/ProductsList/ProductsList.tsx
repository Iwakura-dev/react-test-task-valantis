import { useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import type { IProductsList } from "../../types/types";
import { checkRepeatItems } from "../../utils/checkRepeatItems";
import { fetchProducts } from "../../utils/fetchProducts";
import { fetchProductsIds } from "../../utils/fetchProductsIds";
import {
  sortByBrand,
  sortByPrice,
  sortByProduct,
} from "../../utils/sortProducts";
import { SelectFilter } from "../SelectFIlter/SelectFilter";
import { Skeleton } from "../Skeleton/Skeleton";
import { ButtonArrow } from "../UI/ButtonArrow";
import { Cards } from "./Cards/Cards";

export const ProductsList = () => {
  const [productsId, setProductsId] = useState<string[]>([]);
  const [productsList, setProductsList] = useState<IProductsList[] | null>(
    null
  );
  const [filterProductItem, setFilterProductItem] = useState<string | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsIsMounted, setProductsIsMounted] = useState<boolean>(true);
  const maxProductsPage = 50;

  useEffect(() => {
    fetchProductsIds().then((data) => {
      if (data) {
        setProductsId(data);
      }
    });
  }, []);

  useEffect(() => {
    setProductsIsMounted(true);
    if (productsId) {
      fetchProducts(productsId)
        .then((res) => {
          if (res) {
            switch (filterProductItem) {
              case "brand":
                const brand = productsList?.filter(
                  (item) => item.brand !== null
                );
                setProductsList(sortByBrand(brand as IProductsList[]));
                break;
              case "product":
                setProductsList(sortByProduct(res.result));
                break;
              case "price":
                setProductsList(sortByPrice(res.result));
                break;
              default:
                setProductsList(checkRepeatItems(res.result));
            }
          }
        })
        .catch((err) => console.error(err))
        .finally(() => setProductsIsMounted(false));
    }
  }, [productsId, filterProductItem]);

  const indexOfLastProduct = currentPage * maxProductsPage;
  const indexOfFirstProduct = indexOfLastProduct - maxProductsPage;
  const currentProducts = Array.isArray(productsList)
    ? productsList.slice(indexOfFirstProduct, indexOfLastProduct)
    : [];

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const handleFilterProductChange = (value: string): void => {
    setFilterProductItem(value);
  };
  return (
    <div>
      <section>
        <SelectFilter handleFilterProductChange={handleFilterProductChange} />
      </section>
      <div className="flex justify-center p-8 mx-auto">
        {productsIsMounted !== true ? (
          <ButtonArrow
            currentPage={currentPage}
            handlePagination={() => handlePagination(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaArrowLeftLong />
          </ButtonArrow>
        ) : (
          <></>
        )}
        <div className="grid grid-cols-3  gap-10">
          {productsIsMounted
            ? Array.from(Array(30)).map((_, idx) => <Skeleton key={idx} />)
            : currentProducts?.map((item, idx) => {
                const title = item.product;
                const price = item.price;
                const brand = item.brand;
                const id = item.id;
                return (
                  <Cards
                    key={idx}
                    id={id}
                    title={title}
                    price={price}
                    brand={brand}
                  />
                );
              })}
        </div>
        <div>
          {productsIsMounted !== true ? (
            <ButtonArrow
              currentPage={currentPage}
              handlePagination={() => handlePagination(currentPage + 1)}
              disabled={
                currentPage ===
                Math.ceil((productsList?.length ?? 0) / maxProductsPage)
              }
            >
              <FaArrowRightLong />
            </ButtonArrow>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
