import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
  const { id } = useParams(); // route param (not used here)
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/recipes?id=" + id);
    const json = await data.json();
    setResInfo(json);
    console.log(json);
  };

  // Show shimmer until data is loaded
  if (resInfo === null) return <Shimmer />;

  const { name, cuisine, rating, cookTimeMinutes, ingredients } =
    resInfo.recipes?.[0] || {};

  console.log({ name });

  return (resInfo === null) ? (<Shimmer />) : (
    <div>
      <h1>{name}</h1>
      <h3>{cuisine}</h3>
      <h4>{ingredients?.join(", ")}</h4>
      <p>⭐ Rating: {rating}</p>
      <p>⏱️ Cook Time: {cookTimeMinutes} minutes</p>
    </div>
  );
};

export default ResturantMenu;