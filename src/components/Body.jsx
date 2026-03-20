
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import restaurants from "../utils/mockData";
import { useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnline from '../utils/useOnline';

import ResturantCard,{withPromotedLabel} from "./ResturantCard";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterResults, setFilterResults] = useState([]);
  const [listOfResturants, setListOfResturants] = useState([]);
  const PromotedResturantCard = withPromotedLabel(ResturantCard);

  console.log("render" + PromotedResturantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    // Extract restaurants from Swiggy API response
    const restaurants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setListOfResturants(restaurants);
    setFilterResults(restaurants);
    console.log(restaurants);
  };


const onlineStatus = useOnline();

if(onlineStatus === false)
return(

    <h1>Looks like you are offline, Please check your internet Connection and try again </h1>

)

  return (listOfResturants.length === 0) ? <Shimmer/> : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="bg-green-100 m-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-green-300"
            onClick={() => {
              // filter the Restaurant and update the UI.

              const filteredRestaurant = listOfResturants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
              });
              setFilterResults(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center gap-4" >
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-300"
          onClick={() => {
            const restaurantsfilterData = listOfResturants.filter(
              (res) => parseFloat(res.info.avgRating) > 4.5,
            );
            setFilterResults(restaurantsfilterData);
            console.log("filter" + restaurantsfilterData);
          }}
        >
          Top Rated Resturant
        </button>
        </div>
       
      </div>
      <div className="flex flex-wrap">
       {filterResults.map((res) => {
  return (
    <Link className="recipes_links" to={"/restaurants/" + res.info.id} key={res.info.id}>
      {res.info?.aggregatedDiscountInfoV3?.header ? (
        <PromotedResturantCard 
          {...res.info} 
          header={res.info.aggregatedDiscountInfoV3.header}
        />
      ) : (
        <ResturantCard {...res.info} />
      )}
    </Link>
  );
})}
      </div>
    </div>
  );
};

export default Body;

