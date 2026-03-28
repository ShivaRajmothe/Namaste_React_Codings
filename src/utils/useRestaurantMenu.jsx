// import { useEffect, useState } from "react";

// const cache = {};

// const useRestaurantMenu = (resId) => {
//   const [resInfo, setResInfo] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchData();
//   }, [resId]);

//   const fetchData = async () => {
//     try {
//       setIsLoading(true);
//       setError("");

//       // ✅ cache
//       if (cache[resId]) {
//         setResInfo(cache[resId].info);
//         setCategories(cache[resId].categories);
//         setIsLoading(false);
//         return;
//       }

//       // ✅ CALL YOUR BACKEND (IMPORTANT)
//       const res = await fetch(`http://localhost:5000/menu/${resId}`);

//       if (!res.ok) {
//         throw new Error("Backend API failed: " + res.status);
//       }

//       const json = await res.json(); // now safe ✅

//       console.log("Backend data:", json);

//       // ✅ extract restaurant info
//       const info =
//         json?.data?.cards?.find((c) => c?.card?.card?.info)?.card?.card?.info;

//       // ✅ extract categories
//       const categories =
//         json?.data?.cards
//           ?.find((c) => c?.groupedCard)
//           ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//             (c) =>
//               c?.card?.card["@type"] ===
//               "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//           );

//       if (!info) throw new Error("Restaurant not found");

//       // ✅ cache
//       cache[resId] = { info, categories };

//       setResInfo(info);
//       setCategories(categories || []);
//     } catch (err) {
//       console.error("ERROR:", err.message);
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { resInfo, categories, isLoading, error };
// };

// export default useRestaurantMenu;


import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
  console.log("useRestaurantMenu called with resId:", id);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await fetch(MENU_API + id);
      console.log("API response:", response);
      
      if (!response.ok) {
        throw new Error(`API failed with status ${response.status}`);
      }
      
      const json = await response.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Failed to fetch restaurant menu:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;