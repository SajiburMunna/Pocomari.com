import React from "react";
import "./AdminHome.css";

const AdminHome = () => {
  return (
    <div className="admin-home-div">
      <div className="admin-home-dashboard-div">
        <p>Admin Info</p>
        <p>UserName</p>
        <p>Email</p>
      </div>
      <div className="admin-home-dashboard-div">
        <p>Total Products</p>
        <span>100</span>
      </div>
      <div className="admin-home-dashboard-div">
        <p>Total Orders</p>
        <p>Delivered Orders</p>
        <p>Pending Orders</p>
        <p>Canceled Orders</p>
      </div>
      <div className="admin-home-dashboard-div">
        <p>Total Users</p>
        <span>100</span>
      </div>
      <div className="admin-home-dashboard-div">
        <p>Total Categories</p>
        <span>100</span>
      </div>
      <div className="admin-home-dashboard-div">
        <p>Total View Products</p>
        <span>100</span>
      </div>
    </div>
  );
};

export default AdminHome;
