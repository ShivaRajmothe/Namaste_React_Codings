import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import restaurants from "../utils/mockData";
import { useState } from "react";
import Shimmer from "./Shimmer";

import ResturantCard from "./ResturantCard";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterResults, setFilterResults] = useState([]);
  //   const[restaurantsList, setRestaurantsList] = useState ([ {
  //     info: {
  //       id: "123456",
  //       name: "Pizza Paradise",
  //       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
  //       locality: "MG Road",
  //       areaName: "Central District",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Pizza", "Italian", "Fast Food"],
  //       avgRating: 4.3,
  //       avgRatingString: "4.3",
  //       totalRatingsString: "10K+ ratings",
  //       veg: false,
  //       sla: {
  //         deliveryTime: 30,
  //         lastMileTravel: 3.5,
  //         slaString: "30 mins",
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "50% OFF",
  //         subHeader: "UPTO ₹100",
  //       },
  //     },
  //   },

  //   {
  //     info: {
  //       id: "234567",
  //       name: "Burger Hub",
  //       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
  //       locality: "Park Street",
  //       areaName: "Downtown",
  //       costForTwo: "₹300 for two",
  //       cuisines: ["Burgers", "American", "Fast Food"],
  //       avgRating: 4.5,
  //       avgRatingString: "4.5",
  //       totalRatingsString: "15K+ ratings",
  //       veg: false,
  //       sla: {
  //         deliveryTime: 25,
  //         lastMileTravel: 2,
  //         slaString: "25 mins",
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "40% OFF",
  //         subHeader: "UPTO ₹80",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "345678",
  //       name: "Green Bites",
  //       cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
  //       locality: "Residency Road",
  //       areaName: "South Zone",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Healthy Food", "Salads", "Vegan"],
  //       avgRating: 4.7,
  //       avgRatingString: "4.7",
  //       totalRatingsString: "8K+ ratings",
  //       veg: true,
  //       sla: {
  //         deliveryTime: 20,
  //         lastMileTravel: 1.5,
  //         slaString: "20 mins",
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "30% OFF",
  //         subHeader: "UPTO ₹75",
  //       },
  //     },
  //   },
  //    {
  //     info: {
  //       id: "234567",
  //       name: "Burger Hub Station",
  //       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
  //       locality: "Park Street",
  //       areaName: "Downtown",
  //       costForTwo: "₹300 for two",
  //       cuisines: ["Burgers", "American", "Fast Food"],
  //       avgRating: 4.1,
  //       avgRatingString: "4.1",
  //       totalRatingsString: "15K+ ratings",
  //       veg: false,
  //       sla: {
  //         deliveryTime: 25,
  //         lastMileTravel: 2,
  //         slaString: "25 mins",
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "40% OFF",
  //         subHeader: "UPTO ₹80",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "345678",
  //       name: "Paradise",
  //       cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
  //       locality: "Residency Road",
  //       areaName: "South Zone",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Healthy Food", "Salads", "Vegan"],
  //       avgRating: 4.0,
  //       avgRatingString: "4.0",
  //       totalRatingsString: "8K+ ratings",
  //       veg: true,
  //       sla: {
  //         deliveryTime: 20,
  //         lastMileTravel: 1.5,
  //         slaString: "20 mins",
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "30% OFF",
  //         subHeader: "UPTO ₹75",
  //       },
  //     },
  //   },
  //    {
  //     info: {
  //       id: "234567",
  //       name: "Sushi Station",
  //       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
  //       locality: "Indiranagar",
  //       areaName: "Downtown",
  //       costForTwo: "₹300 for two",
  //       cuisines: ["Burgers", "American", "Fast Food"],
  //       avgRating: 3.5,
  //       avgRatingString: "3.5",
  //       totalRatingsString: "15K+ ratings",
  //       veg: false,
  //       sla: {
  //         deliveryTime: 25,
  //         lastMileTravel: 2,
  //         slaString: "25 mins",
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "40% OFF",
  //         subHeader: "UPTO ₹80",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "345678",
  //       name: "Karachi Bakery",
  //       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
  //       locality: "Residency Road",
  //       areaName: "South Zone",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Healthy Food", "Salads", "Vegan"],
  //       avgRating: 4.2,
  //       avgRatingString: "4.2",
  //       totalRatingsString: "8K+ ratings",
  //       veg: true,
  //       sla: {
  //         deliveryTime: 20,
  //         lastMileTravel: 1.5,
  //         slaString: "20 mins",
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "30% OFF",
  //         subHeader: "UPTO ₹75",
  //       },
  //     },
  //   },

  // ]);

  // if(restaurantsList.length > 0)
  // {
  //   return <Shimmer />;
  // }
  const [listOfResturants, setListOfResturants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/recipes");
    const json = await data.json();

    setListOfResturants(json.recipes);
    setFilterResults(json.recipes);
  };

  if (listOfResturants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="container">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="searchBtn"
            onClick={() => {
              // filter the Restaurant and update the UI.

              const filteredRestaurant = listOfResturants.filter((res) => {
                return res.name
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
              });
              setFilterResults(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-button"
          onClick={() => {
            const restaurantsfilterData = listOfResturants.filter(
              (res) => res.rating > 4.8,
            );
            setFilterResults(restaurantsfilterData);
            console.log("filter" + restaurantsfilterData);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="resturant-list">
        {filterResults.map((res) => {
          return <ResturantCard key={res.id} {...res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
