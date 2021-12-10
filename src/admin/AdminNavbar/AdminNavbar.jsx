/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { requestUserInfoByUser } from "../../store/action/userAction";
import { setToken } from "./../../store/action/authAction";
import { useNavigate } from "react-router-dom";
requestUserInfoByUser;

const AdminNavbar = () => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.persistedStorage.currentUser);

  useEffect(() => {
    if (token !== "") {
      dispatch(requestUserInfoByUser(token));
    }
  }, [token]);

  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate({
      pathname: "/login",
    });
    dispatch(
      setToken({
        userInfo: { user: "", role: "", token: "" },
      })
    );
  };
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
          <div className="admin-nav-icon">
            <span style={{ marginRight: "5px" }}>
              <HomeIcon fontSize="large" />
            </span>

            <span> Home</span>
          </div>
        </Link>
        <Link to="allproducts">
          <div className="admin-nav-icon">
            <span style={{ marginRight: "5px" }}>
              <BorderAllIcon fontSize="large" />
            </span>

            <span> All Products</span>
          </div>
        </Link>
        <Link to="addproducts">
          <div className="admin-nav-icon">
            <span style={{ marginRight: "5px" }}>
              <AddBoxIcon fontSize="large" />
            </span>

            <span>Add Products</span>
          </div>
        </Link>
        <Link to="orders">
          <div className="admin-nav-icon">
            <span style={{ marginRight: "5px" }}>
              <ShoppingCartIcon fontSize="large" />
            </span>

            <span> Orders</span>
          </div>
        </Link>
        <Link to="addusers">
          <div className="admin-nav-icon">
            <span style={{ marginRight: "5px" }}>
              <PersonAddAltIcon fontSize="large" />
            </span>

            <span> Add Users</span>
          </div>
        </Link>
        <Link to="allusers">
          <div className="admin-nav-icon">
            <span style={{ marginRight: "5px" }}>
              <PeopleAltIcon fontSize="large" />
            </span>

            <span> Users</span>
          </div>
        </Link>
        <Link to="categories">
          <div className="admin-nav-icon">
            <span style={{ marginRight: "5px" }}>
              <CategoryIcon fontSize="large" />
            </span>

            <span>Categories</span>
          </div>
        </Link>
        <a style={{ cursor: "pointer" }} onClick={() => handleSignOut()}>
          <div className="admin-nav-icon">
            <span style={{ marginRight: "5px" }}>
              <LogoutIcon fontSize="large" />
            </span>

            <span> Signout</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AdminNavbar;
