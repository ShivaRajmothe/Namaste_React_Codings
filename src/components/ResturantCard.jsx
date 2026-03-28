import React from "react";
import ReactDOM from "react-dom/client";
import {CDN_URL} from "../utils/constants"; 
import { FiStar } from "react-icons/fi";

// const stylecard = {
//     backgroundColor : "#f0f0f0",
// }

const ResturantCard =({name, cuisines = [], avgRating, cloudinaryImageId, areaName, sla = {}}) =>{
    return(
        <div className="m-4 p-4 w-60 h-95 rounded-sm bg-gray-50 hover:bg-gray-200 cursor-pointer transition-all duration-200">
           
            <img className="rounded-sm h-40 w-full object-cover" src={CDN_URL + cloudinaryImageId}/>
            <h3 className="font-bold py-4 px-2 text-lg text-gray-800">{name}</h3>
<h4 className="flex items-center gap-2 text-sm px-2 py-1 text-gray-700">
  <span className="flex items-center gap-1 bg-green-500 text-white px-2 py-[2px] rounded-md text-xs">
    <FiStar className="text-white" />
    {avgRating}
  </span>
  <span>- {sla?.slaString}</span>
</h4>            <h4 className="font-sans text-sm text-gray-600 px-2">{cuisines.join(", ")}</h4>
            <h4 className="text-gray-500 text-sm px-2 py-2">{areaName}</h4>
        </div>
    )
};

export const withPromotedLabel = (ResturantCard) => {
    return (props) => {
        return (        
            <div>
                <div className="pl-[20px] ">                
        <label className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded absolute m-2">{props.header}</label>
                    </div>
                <ResturantCard {...props} />        
            </div>
        )
    }       

};
export default ResturantCard;