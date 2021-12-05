/* eslint-disable no-unused-expressions */
import React from "react";
import "./AdminNavbar.css";
import adminlogo from "../../Assets/adminlogo.png";
import HomeIcon from "@mui/icons-material/Home";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CategoryIcon from "@mui/icons-material/Category";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div>
      <div class="admin-navbar">
        <div>
          <img
            className="admin-navbar-img"
            src={adminlogo}
            width="70px"
            height="70px"
            alt=""
          />
        </div>
        <Link to="/">
          <HomeIcon />
          Home
        </Link>
        <Link to="allproducts">
          <BorderAllIcon /> All Products
        </Link>
        <Link to="addproducts">
          <AddBoxIcon /> Add Products
        </Link>
        <Link to="orders">
          <ShoppingCartIcon /> Orders
        </Link>
        <Link to="addusers">
          <PersonAddAltIcon /> Add Users
        </Link>
        <Link to="allusers">
          <PeopleAltIcon /> Users
        </Link>
        <Link to="categories">
          <CategoryIcon /> Categories
        </Link>
        <a href="#contact">
          <LogoutIcon />
          Signout
        </a>
      </div>
    </div>
  );
};

export default AdminNavbar;
