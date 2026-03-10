import React, { use } from "react";
import { useEffect, useState} from "react";
import Shimmer from "./Shimmer";


const ResturantMenu =() =>
{

    const[resInfo, setResInfo] = useState(null);

useEffect(() =>{
    fetchRestaurantMenu();
}, [])


const fetchRestaurantMenu = async () =>
{
    const data = await fetch("https://dummyjson.com/recipes");
    const json = await data.json();
    setResInfo(json.recipes);
    console.log(json.recipes);
};

const[ name, cuisine, rating, cookTimeMinutes, image] = resInfo.recipes;
return resInfo === null ? <Shimmer /> : (
    <div>
    <h1>{resInfo?.name}</h1>
    <h2>Menu</h2>
    <ul>
        <li>Biryani</li>
        <li>Pizza</li>
        <li>Fried Rice</li>
        <li>Spring Rolls</li>
    </ul>
        </div>
    )
}


export default ResturantMenu;