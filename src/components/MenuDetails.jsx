import React from "react";
import { FiStar } from "react-icons/fi";
import AddToCartButton from "./AddToCartButton";
import { CDN_URL } from "../utils/constants";

const MenuDetails = ({
  name,
  cuisines = [],
  avgRating,
  cloudinaryImageId,
  sla,
  areaName,
  cartItem,
}) => {
  return (
    <div className="flex gap-6 items-start border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
      
      {/* IMAGE */}
      {cloudinaryImageId && (
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-[300px] h-[300px] object-cover rounded-lg"
        />
      )}

      {/* CONTENT */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>

        {/* CUISINES */}
        {cuisines?.length > 0 && (
          <p className="text-gray-600 mb-2">
            {cuisines.join(", ")}
          </p>
        )}

        {/* AREA */}
        {areaName && (
          <p className="text-gray-600 mb-2">📍 {areaName}</p>
        )}

        {/* RATING + SLA */}
        <h4 className="flex items-center gap-2 text-sm px-2 py-1 text-gray-700">
          <span className="flex items-center gap-1 bg-green-500 text-white px-2 py-[2px] rounded-md text-xs">
            <FiStar className="text-white" />
            {avgRating}
          </span>
          <span>- {sla?.slaString}</span>
        </h4>

        {/* ADD TO CART */}
        <AddToCartButton item={cartItem} className="mt-6" />
      </div>
    </div>
  );
};

export default MenuDetails;