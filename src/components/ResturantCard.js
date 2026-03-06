import React from "react";
import ReactDOM from "react-dom/client";
import {CDN_URL} from "../utils/constants"; 

const stylecard = {
    backgroundColor : "#f0f0f0",
}

const ResturantCard =(resData) =>{
    const { name, cuisine, rating, servings, image } = resData;
    return(

        <div className="resturant-card" style={stylecard}>
           
            <img  className="resturant-img" src={image}/>
  <h3>{name}</h3>
  <h4>{cuisine}</h4>
  <h4>Rating: {rating} stars</h4>
  <h4>{servings}</h4>
        </div>
    )
}

export default ResturantCard;