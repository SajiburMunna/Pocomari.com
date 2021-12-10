/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./AdminHome.css";
import { useSelector, useDispatch } from "react-redux";
import { requestCategoryList } from "../../store/action/categoryAction";
import { requestProductList } from "./../../store/action/productAction";
import { requestUserList } from "../../store/action/userAction";

const AdminHome = () => {
  const [togle, setTogle] = useState(false);
  const dispatch = useDispatch();
  const { email, role, token } = useSelector(
    (state) => state.persistedStorage.currentUser
  );
  const { categoryList } = useSelector((state) => state.categoryReducer);
  const { productListReducer } = useSelector((state) => state);
  const { userList } = useSelector((state) => state.UserListReducer);

  useEffect(() => {
    dispatch(requestUserList(token));
  }, [token]);

  useEffect(() => {
    dispatch(requestCategoryList());
  }, [togle]);
  useEffect(() => {
    dispatch(requestProductList());
  }, [togle]);
  return (
    <div className="admin-home-div">
      <div className="admin-home-dashboard-div">
        <p>Admin Info</p>
        <p>Email : {email}</p>
        <p>Role : {role}</p>
      </div>
      <div className="admin-home-dashboard-div">
        <p>Total Products</p>
        <span>{productListReducer && productListReducer.length}</span>
      </div>
      <div className="admin-home-dashboard-div">
        <p>Total Orders</p>
        <p>Delivered Orders</p>
        <p>Pending Orders</p>
        <p>Canceled Orders</p>
      </div>
      <div className="admin-home-dashboard-div">
        <p>Total Users</p>
        <span>{userList && userList.length}</span>
      </div>
      <div className="admin-home-dashboard-div">
        <p>Total Categories</p>
        <span>{categoryList.length}</span>
      </div>
      <div className="admin-home-dashboard-div">
        <p>Total View Products</p>
        <span>100</span>
      </div>
    </div>
  );
};

export default AdminHome;
