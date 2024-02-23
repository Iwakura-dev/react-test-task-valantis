import React from "react";

interface ICardsProps {
  id: string;
  title: string;
  price: number;
}

export const Cards: React.FC<ICardsProps> = ({ id, title, price }) => {
  return (
    <div className="backdrop-blur-md shadow-md p-4 rounded-3xl dark:bg-zinc-800">
      <div className="flex justify-center">
        <h1 className="font-bold text-md">{title}</h1>
      </div>
      <div className="flex justify-between pt-4">
        <p>
          <b>Id:</b> {id}
        </p>
        <p className="text-md">
          <b>Price:</b> {price}
        </p>
      </div>
    </div>
  );
};
