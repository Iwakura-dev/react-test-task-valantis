import React from "react";

interface ISelectFilterProps {
  handleFilterProductChange: (value: string) => void;
}

export const SelectFilter: React.FC<ISelectFilterProps> = ({
  handleFilterProductChange,
}) => {
  return (
    <div>
      <div className="flex flex-col mx-auto items-center p-12 gap-5">
        <h1 className="font-bold text-3xl">Select Filter Option</h1>
        <div>
          <select
            className="font-bold text-xl border-none p-1 shadow-lg px-7 rounded-full dark:bg-zinc-700"
            onChange={(e) => handleFilterProductChange(e.target.value)}
          >
            <option value="product">Названию</option>
            <option value="price">Цене</option>
            <option value="brand">Бренду</option>
          </select>
        </div>
      </div>
    </div>
  );
};
