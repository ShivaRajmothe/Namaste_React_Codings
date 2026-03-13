import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import restaurants from "../utils/mockData";
import { useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

import ResturantCard from "./ResturantCard";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterResults, setFilterResults] = useState([]);
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

  // if (listOfResturants.length === 0) {
  //   return <Shimmer />;
  // }
  return (listOfResturants.length === 0) ? <Shimmer/> : (
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
          return <Link  className="recipes_links"to={"/recipes/" + res.id} 
          key={res.id}>
          <ResturantCard  {...res} /></Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
