import React from "react";
import ReactDOM from "react-dom/client";
import {CDN_URL} from "../utils/constants"; 

const stylecard = {
    backgroundColor : "#f0f0f0",
}

const ResturantCard =(resData) =>{
    const { name, cuisines, avgRating, costForTwoString, deliveryTime, cloudinaryImageId } = resData;
    return(

        <div className="resturant-card" style={stylecard}>
           
            <img  className="resturant-img" src={CDN_URL + cloudinaryImageId}/>
  <h3>{name}</h3>
  <h4>{cuisines}</h4>
  <h4>Rating: {avgRating} stars</h4>
  <h4>{costForTwoString}</h4>
  <h4>Delivery Time: {deliveryTime} mins</h4>
        </div>
    )
}

export default ResturantCard;