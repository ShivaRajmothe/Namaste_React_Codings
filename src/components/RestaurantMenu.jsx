// */

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";

// const RestaurantMenu = () => {
//   const { id } = useParams();
//   const [resInfo, setResInfo] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [id]);

//   const fetchData = async () => {
//     try {
//       if (!id) {
//         setError("No recipe id provided in the route.");
//         return;
//       }

//       setError("");
//       setResInfo(null);

//       const resp = await fetch(`https://dummyjson.com/recipes/${id}`);
//       if (!resp.ok) {
//         throw new Error(`Request failed: ${resp.status}`);
//       }

//       const json = await resp.json();
//       setResInfo(json);
//     } catch (e) {
//       setError(e?.message || "Failed to load recipe.");
//     }
//   };

//   // Loading
//   if (!error && resInfo === null) return <Shimmer />;

//   // Error
//   if (error) {
//     return (
//       <div className="p-4 text-red-600">
//         <h3 className="text-lg font-semibold">Couldn’t load the recipe</h3>
//         <p>{error}</p>
//       </div>
//     );
//   }

//   const {
//     name,
//     cuisine,
//     rating,
//     cookTimeMinutes,
//     ingredients,
//     image,
//   } = resInfo;

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       {/* MAIN LAYOUT */}
//         <Link to="/" className="text-blue-600 underline">&larr; Back to Home</Link>
//       <div className="flex gap-6 items-start border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
        
//         {/* LEFT: IMAGE */}
//         {image && (
//           <img
//             src={image}
//             alt={name}
//             className="w-[300px] h-[300px] object-cover rounded-lg"
//           />
//         )}

//         {/* RIGHT: CONTENT */}
//         <div className="flex-1">
//           <h2 className="text-2xl font-semibold mb-1">{name}</h2>

//           {cuisine && (
//             <p className="text-sm text-gray-600 mb-2">{cuisine}</p>
//           )}

//           {ingredients?.length > 0 && (
//             <p className="text-sm text-gray-800 mb-2">
//               <strong>Ingredients:</strong> {ingredients.join(", ")}
//             </p>
//           )}

//           <p className="text-sm text-gray-700">
//             ⭐ Rating: {rating ?? "N/A"} <br />
//             ⏱️ Cook Time: {cookTimeMinutes ?? "—"} min
//           </p>
//           <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//             Add to cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";

const API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      setError("");
      setResInfo(null);

      const resp = await fetch(API);

      if (!resp.ok) {
        throw new Error("Failed to fetch Swiggy data");
      }

      const json = await resp.json();

      // 🔥 Extract all restaurants
      const restaurants =
        json?.data?.cards
          ?.map((card) => card?.card?.card)
          ?.filter((c) => c?.gridElements)
          ?.flatMap(
            (c) => c?.gridElements?.infoWithStyle?.restaurants || []
          );

      // ✅ Find restaurant by ID
      const restaurant = restaurants.find(
        (res) => res.info.id === id
      );

      if (!restaurant) {
        throw new Error("Restaurant not found");
      }

      setResInfo(restaurant.info);
    } catch (e) {
      setError(e?.message || "Failed to load restaurant");
    }
  };

  // Loading
  if (!error && resInfo === null) return <Shimmer />;

  // Error
  if (error) {
    return (
      <div className="p-4 text-red-600">
        <h3 className="text-lg font-semibold">Couldn’t load restaurant</h3>
        <p>{error}</p>
      </div>
    );
  }

  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    areaName,
  } = resInfo;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link to="/" className="text-blue-600 underline">
        &larr; Back to Home
      </Link>

      <div className="flex gap-6 items-start border rounded-lg p-4 bg-white shadow-sm">
        
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

          {cuisines?.length > 0 && (
            <p className="text-gray-600 mb-2">
              {cuisines.join(", ")}
            </p>
          )}

          {areaName && (
            <p className="text-gray-600 mb-2">📍 {areaName}</p>
          )}

          <p className="text-gray-700">
            ⭐ Rating: {avgRating ?? "N/A"} <br />
            {costForTwo}
          </p>

          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;