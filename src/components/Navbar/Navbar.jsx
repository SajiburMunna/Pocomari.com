/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./Navbar.css";

import pocologo from "../../Assets/pocologo.png";

import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { requestUserInfoByUser } from "../../store/action/userAction";
import { setToken } from "../../store/action/authAction";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { requestCartList } from "../../store/action/cartAction";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Navbar = () => {
  const { token } = useSelector((state) => state.persistedStorage.currentUser);
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.CartReducer);
  useEffect(() => {
    if (token !== "") {
      dispatch(requestUserInfoByUser(token));
      dispatch(requestCartList(token));
    }
  }, [token]);

  let navigate = useNavigate();
  function handleClick() {
    navigate({
      pathname: "/login",
    });
  }

  const handleSignOut = () => {
    dispatch(
      setToken({
        userInfo: { user: "", role: "", token: "" },
      })
    );
  };
  const goToCart = () => {
    navigate("/cart");
  };
  return (
    <div>
      <div className="navcontent">
        <div className="navcon">
          <img
            style={{
              height: "110px",
              width: "110px",
              marginRight: "100px",
              marginTop: "20px",
            }}
            src={pocologo}
            alt="pocomarilogo"
          />
        </div>
        <div className=" head ">
          <div>
            <form className="example">
              <input type="text" placeholder="Search.." />
              <button type="submit">
                <SearchIcon fontSize="large" />
              </button>
            </form>
          </div>
          <div>
            <IconButton onClick={() => goToCart()} aria-label="cart">
              <StyledBadge
                badgeContent={
                  cartList?.status === 0
                    ? cartList?.products.reduce(
                        (total, item) => total + item.quantity,
                        0
                      )
                    : 0
                }
                color="secondary"
              >
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>
          <div>
            {token === "" ? (
              <button className="success" onClick={handleClick}>
                Login
              </button>
            ) : (
              <button className="success" onClick={() => handleSignOut()}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="navroutecontent ">
        <Link to="/">BOOKS</Link>
        <Link to="electronics">ELECTRONICS</Link>
        <Link to="stationery">STATIONERY AND OTHERS</Link>
        <Link to="giftfinder">GIFT FINDER</Link>
        <Link to="institutionalorder">INSTITUTIONAL ORDER</Link>
        <Link to="offers">OFFERS</Link>
        <Link to="blog">BLOG</Link>
      </div>
    </div>
  );
};

export default Navbar;
