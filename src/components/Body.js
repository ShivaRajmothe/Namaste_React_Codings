import React from "react";
import ReactDOM from "react-dom/client";
import restaurants from "../utils/mockData";
import { useState } from "react";

import ResturantCard from "./ResturantCard";
 
const Body =() =>
{
  const[restaurantsList, setRestaurantsList] = useState (restaurants);
    return(
        <div className="body">
            <div className="container">
            <button className="filter-button" 
            onClick={() => {
              const  restaurantsfilterData = restaurantsList.filter((res) => res.info.avgRating > 4.7); 
            setRestaurantsList(restaurantsfilterData)
            console.log("filter" + restaurantsfilterData) }}>Top Rated Resturant</button>
            </div>
            <div className="resturant-list">
                {
                    restaurantsList.map((res) => {
                        return <ResturantCard key={res.info.id} {...res.info} />
                    })
                }
        
            </div>
        </div>
    )   
}

export default Body;