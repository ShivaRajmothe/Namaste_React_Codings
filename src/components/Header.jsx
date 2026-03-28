import React, { useState, useContext} from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";4

const Logo = () => (
  <a href="/">
          <img
            className="h-16 object-contain hover:scale-105 transition duration-300"
            src={LOGO_URL}
            alt="logo"
          />
        </a>
)
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">

        {/* LOGO */}
        <Logo />

        {/* NAV ITEMS */}
        <ul className="flex items-center gap-6 text-gray-700 font-medium">
          <li>
            <Link className="hover:text-blue-600 transition" to="/about">
              Offers
            </Link>
          </li>

          <li>
            <Link className="hover:text-blue-600 transition" to="/contact">
              Help
            </Link>
          </li>

          <li>
            <Link className="hover:text-blue-600 cursor-pointer transition" to="/cart">
              Cart 🛒
            </Link>
          </li>

          <li>
            <Link className="hover:text-blue-600 transition" to="/Instamart">
              Instamart
            </Link>
          </li>
        </ul>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">

          {/* ONLINE STATUS */}
          <div className="flex items-center gap-1 text-sm font-medium">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isOnline ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            <span className={isOnline ? "text-green-600" : "text-red-600"}>
              {isOnline ? "Online" : "Offline"}
            </span>
          </div>

          {/* LOGIN BUTTON */}
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className={`w-[100px] px-4 py-2 rounded-lg text-white transition duration-300 ${
              isLoggedIn
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isLoggedIn ? "Sign Out" : "Sign In"}
          </button>
          <div>
            <p className="text-gray-700 font-medium">{loggedInUser}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;