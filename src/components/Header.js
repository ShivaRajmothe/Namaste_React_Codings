import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {LOGO_URL} from "../utils/constants";
const root = ReactDOM.createRoot(document.getElementById("root"));
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () =>
{

    const[btnName,setBtnName] = useState("Login")
    console.log("Header rendered")

    useEffect (()=>
    {
        console.log("useEffect called")
    },[btnName])
    return(
<div className="header">
    <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo"/>
    </div>
    <div>
        <ul className="nav-items">
            <li> <Link to="/" > Home </Link></li>
            <li> <Link to="/about"> AboutUs</Link></li>
            <li><Link to="/Contact"> Contact</Link></li>
            <li>Cart</li>
            <button onClick={() => btnName === "Login" ? setBtnName("Logout"): setBtnName("Login") }>{btnName}</button>
        </ul>
    </div>
    </div>
    )
}

export default Header;