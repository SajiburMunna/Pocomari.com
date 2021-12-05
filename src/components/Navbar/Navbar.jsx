import React, { useEffect } from "react";
import "./Navbar.css";

import pocologo from "../../Assets/pocologo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { requestUserInfoByUser } from "../../store/action/userAction";
import { setToken } from "../../store/action/authAction";

const Navbar = () => {
  const cUserInfo = useSelector((state) => state);
  const { role, email, token } = useSelector(
    (state) => state.persistedStorage.currentUser
  );
  const dispatch = useDispatch();

  console.log(cUserInfo);
  useEffect(() => {
    if (token !== "") {
      dispatch(requestUserInfoByUser(token));
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
            <ShoppingCartOutlinedIcon fontSize="large" className="cartIcon" />
          </div>
          <div>
            <button className="success">
              {token === "" ? (
                <p onClick={handleClick}>Login</p>
              ) : (
                <p onClick={() => handleSignOut()}>Logout</p>
              )}
            </button>
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
