import React from "react";

interface IButtonArrowProps {
  currentPage: number;
  handlePagination: (currentPage: number) => void;
  disabled: boolean;
  children: React.ReactNode;
}

export const ButtonArrow: React.FC<IButtonArrowProps> = ({
  currentPage,
  handlePagination,
  disabled,
  children,
}) => {
  return (
    <div>
      <button
        type="button"
        className="mx-3"
        onClick={() => handlePagination(currentPage - 1)}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};
