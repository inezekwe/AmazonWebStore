import React from "react";
import "../../Components/Nav/Nav.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


function Nav() {

  return (
    <nav>
      {/* logo */}
      <Link to="/">
        <img
          className="nav-logo"
          src="https://img.icons8.com/cotton/2x/small-axe.png"
          alt="nav-logo"
        />
      </Link>
      {/* search bar */}
      <div className="nav-search">
        <input type="text" className="nav-search-input" />
        <SearchIcon className="nav-search-icon" />
      </div>
      {/* 3 links */}

      <div className="nav-nav">
        {/* 1st link */}
        <Link to="/login" className="nav-link">
          <div className="nav-option">
            <span className="nav-option-line-one">Hello Bryan</span>
            <span className="nav-option-line-two">Sign In</span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to="/" className="nav-link">
          <div className="nav-option">
            <span className="nav-option-line-one">Returns</span>
            <span className="nav-option-line-two">& Orders</span>
          </div>
        </Link>
       
        {/* 4th link */}
        <Link to="/checkout" className="nav-link">
          <div className="nav-option-cart">
            {/* shopping basket icon */}
            <ShoppingCartIcon />
            {/* number of items in the basket */}

            <span className="nav-option-line-two nav-cart-count">
             0
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;