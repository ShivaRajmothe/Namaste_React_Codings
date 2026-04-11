// ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, image }) => {
  return (
    <Link to={`/products/${id}`} aria-label={`Open ${title} details`}>
      <div className="w-[200px] m-4 p-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-[150px] h-[150px] object-cover rounded-lg mb-2 shadow-sm"
        />
        <span className="mt-2 text-sm font-medium text-gray-800 truncate">{title}</span>
      </div>
    </Link>
  );
};

export default ProductCard;