import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
const root = ReactDOM.createRoot(document.getElementById("root"));

const stylecard = {
    backgroundColor : "#f0f0f0",
}
const Header = () =>
{
    return(
<div className="header">
    <div className="logo-container">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBG_WN1_RiImDIxGwBEyXnjHwLD6vI7otP3Q&s" alt="logo"/>
    </div>
    <div>
        <ul className="nav-items">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
    </div>
    </div>
    )
}

//Config Driven UI


var ResturantCard =(resData) =>{
    console.log(resData);
    const { name, cuisines, avgRating, costForTwoString, deliveryTime, cloudinaryImageId } = resData;
    return(

        <div className="resturant-card" style={stylecard}>
           
            <img  className="resturant-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId}/>
  <h3>{name}</h3>
  <h4>{cuisines}</h4>
  <h4>Rating: {avgRating} stars</h4>
  <h4>{costForTwoString}</h4>
  <h4>Delivery Time: {deliveryTime} mins</h4>
        </div>
    )
}



const Footer =() =>
{
    return(
        <div className="footer">
            <h1>Footer</h1>
        </div>
    )
}


const AppLayout =() =>{
    return(
        <div className="app">
<Header />
<Body />
{/* <Footer /> */}
        </div>
    )
}



root.render(<AppLayout />);