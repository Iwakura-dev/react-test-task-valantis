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
  // Declare state for the request in API for the get in items and forward to productList
  const [productsId, setProductsId] = useState<any[]>([]);
  // Declare state in which save the all array our API
  const [productsList, setProductsList] = useState<IProductsList[] | null>(
    null
  );
  // Declare state for the filter array from API
  const [filterProductItem, setFilterProductItem] = useState<string | null>(
    null
  );
  // Declare state for the pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  // Declare state for the stream in mounted of array our API
  const [productsIsMounted, setProductsIsMounted] = useState<boolean>(true);
  // Declare variable which render the maximum elements on page
  const maxProductsPage = 50;

  // use useEffect hooks to call the 'fecthProducts' function that calls the API request
  useEffect(() => {
    fetchProductsIds().then((data: any) => {
      if (data) {
        setProductsId(data);
      }
    });
  }, []);
  // use useEffect hooks in which change the mounted and call the function in dependences on the switch-case function
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
  // declare variable for the calculate last index on the products
  const indexOfLastProduct = currentPage * maxProductsPage;
  // declare variable for the calculate first index on the products
  const indexOfFirstProduct = indexOfLastProduct - maxProductsPage;
  // declare new variable and the check array, if array is true, then slice this array for the pagination
  const currentProducts = Array.isArray(productsList)
    ? productsList.slice(indexOfFirstProduct, indexOfLastProduct)
    : [];
  // declare function which change the current page
  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  // declare function which change the value in dependencies on value from the select
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
