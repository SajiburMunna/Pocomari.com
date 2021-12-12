/* eslint-disable no-redeclare */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./ViewAll.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { requestProductList } from "./../../../store/action/productAction";
import { useLocation } from "react-router-dom";

import ProductCard from "./../ProductCard/ProductCard";
const ViewAll = () => {
  const location = useLocation();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.persistedStorage.currentUser);
  const { productListReducer } = useSelector((state) => state);

  useEffect(() => {
    dispatch(requestProductList(token));
  }, [token]);
  if (productListReducer) {
    var total = productListReducer.length;

    var cat = productListReducer.filter(
      (pd) => pd.category.name === location.state
    );
  }

  return (
    <div>
      <div class="sidenav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>

      <div class="main">
        <h1>Your Seraching {location.state}</h1>
        <div className="viewall-card">
          {productListReducer &&
            cat.map((pd) => <ProductCard key={pd._id} pd={pd}></ProductCard>)}
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
