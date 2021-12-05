import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { Routes, Route } from "react-router-dom";
import "./Admin.css";
import AdminHome from "./../AdminHome/AdminHome";
import AdminAllProducts from "./../AdminAllProducts/AdminAllProducts";
import AdminAddProducts from "./../AdminAddProducts/AdminAddProducts";
import AdminOrders from "./../AdminOrders/AdminOrders";
import AdminAddUsers from "./../AdminAddUsers/AdminAddUsers";
import AdminAllUsers from "./../AdminAllUsers/AdminAllUsers";
import AdminCategories from "./../AdminCategories/AdminCategories";

const Admin = () => {
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <div className="admin-div">
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/allproducts" element={<AdminAllProducts />} />
          <Route path="/addproducts" element={<AdminAddProducts />} />
          <Route path="/orders" element={<AdminOrders />} />
          <Route path="/addusers" element={<AdminAddUsers />} />
          <Route path="/allusers" element={<AdminAllUsers />} />
          <Route path="/categories" element={<AdminCategories />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
