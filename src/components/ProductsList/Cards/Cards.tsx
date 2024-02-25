import React from "react";

interface ICardsProps {
  id: string;
  title: string;
  price: number;
  brand: string;
}
// This components render the cards with the value from the API
export const Cards: React.FC<ICardsProps> = ({ id, title, price, brand }) => {
  return (
    <div className="backdrop-blur-md shadow-md p-4 rounded-3xl dark:bg-zinc-800">
      <div className="flex flex-col items-center gap-3">
        <div>
          <h1>
            <b>Brand:</b> {brand ? brand : ""}
          </h1>
        </div>
        <div>
          <h1>
            <b>Title:</b> {title ? title : ""}
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-center pt-4">
        <p>
          <b>Id:</b> {id ? id : ""}
        </p>
        <p className="text-md">
          <b>Price:</b> {price ? price : ""}
        </p>
      </div>
    </div>
  );
};
