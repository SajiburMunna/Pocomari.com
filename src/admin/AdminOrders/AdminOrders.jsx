import React from "react";
import "./AdminOrders.css";
import { useLocation } from "react-router-dom";

const AdminOrders = () => {
  const location = useLocation();
  console.log(location);
  return <div>{/* <h1>Orders! {location.state.name}</h1> */} orders</div>;
};

export default AdminOrders;
