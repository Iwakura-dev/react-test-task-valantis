import { useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { TProductsList } from "../../types/types";
import { fetchProducts } from "../../utils/fetchProducts";
import { fetchProductsIds } from "../../utils/fetchProductsIds";
import { Skeleton } from "../Skeleton/Skeleton";
import { ButtonArrow } from "../UI/ButtonArrow";
import { Cards } from "./Cards/Cards";

export const ProductsList = () => {
  const [productsId, setProductsId] = useState<string[]>([]);
  const [productsList, setProductsList] = useState<TProductsList | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsIsMounted, setProductsIsMounted] = useState<boolean>(true);
  const maxProductsPage = 10;

  useEffect(() => {
    fetchProductsIds().then((data) => {
      if (data !== undefined) {
        setProductsId(data);
      }
    });
  }, []);

  useEffect(() => {
    setProductsIsMounted(true);
    if (productsId) {
      fetchProducts(productsId)
        .then(setProductsList)
        .catch((err) => console.error(err))
        .finally(() => setProductsIsMounted(false));
    }
  }, [productsId]);

  const indexOfLastProduct = currentPage * maxProductsPage;
  const indexOfFirstProduct = indexOfLastProduct - maxProductsPage;
  const currentProducts = productsList?.result.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
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
      <div className="grid grid-cols-3 gap-10">
        {productsIsMounted
          ? Array.from(Array(10)).map((id) => <Skeleton key={id} />)
          : currentProducts?.map((item) => {
              const title = item.product;
              const price = item.price;
              const id = item.id;
              return <Cards key={id} id={id} title={title} price={price} />;
            })}
      </div>
      <div>
        {productsIsMounted !== true ? (
          <ButtonArrow
            currentPage={currentPage}
            handlePagination={() => handlePagination(currentPage + 1)}
            disabled={
              currentPage ===
              Math.ceil((productsList?.result.length ?? 0) / maxProductsPage)
            }
          >
            <FaArrowRightLong />
          </ButtonArrow>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
