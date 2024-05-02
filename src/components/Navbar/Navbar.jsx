import React from "react";
import "./Navbar.css";
import Link from "./Link";
import { NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <div className="navbar align_center">
      <div className="align_center">
        <h1 className="navbar_heading ">Cart</h1>
        <form className="align_center navbar_form">
          <input
            type="text"
            name=""
            className="navbar_search"
            id=""
            placeholder="Search items"
          />
          <button type="submit" className="search_button">
            Search
          </button>
        </form>
      </div>
      <div className="align_center navbar_links">
        <Link title="Home" link="/" />
        <Link title="Products" link="/products" />
        {!user && (
          <>
            <Link title="Login" link="/login" />
            <Link title="Signup" link="/signup" />
          </>
        )}
        {user && (
          <>
            <Link title="My Orders" link="/myorders" />
            <Link title="Logout" link="/logout" />
            <NavLink to="/cart" className="align_center">
              Cart <p className="align_center cart_counts">0</p>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
