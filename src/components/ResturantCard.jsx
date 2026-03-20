import React from "react";
import ReactDOM from "react-dom/client";
import {CDN_URL} from "../utils/constants"; 

// const stylecard = {
//     backgroundColor : "#f0f0f0",
// }

const ResturantCard =({name, cuisines = [], avgRating, cloudinaryImageId, costForTwo, sla = {}}) =>{
    return(

        <div className="m-4 p-4 w-60 h-95 rounded-sm bg-gray-50 hover:bg-gray-200">
           
            <img  className="rounded-sm h-40 w-full object-cover" src={CDN_URL + cloudinaryImageId}/>
  <h3 className="font-bold py-4 px-2">{name}</h3>
  <h4 className="font-sans text-sm">{cuisines.join(", ")}</h4>
  <h4>Rating: {avgRating} ⭐</h4>
  <h4 className="font-bold">{costForTwo}</h4>
  <h4 className="text-gray-600 text-sm">{sla?.slaString}</h4>
        </div>
    )
}

export default ResturantCard;