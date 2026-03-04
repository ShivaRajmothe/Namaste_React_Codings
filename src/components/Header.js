import React from "react";
import ReactDOM from "react-dom/client";
import {LOGO_URL} from "../utils/constants";
const root = ReactDOM.createRoot(document.getElementById("root"));


const Header = () =>
{
    return(
<div className="header">
    <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo"/>
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

export default Header;