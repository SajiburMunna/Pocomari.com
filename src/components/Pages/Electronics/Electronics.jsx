/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { requestProductList } from "../../../store/action/productAction";
import ProductCard from "./../ProductCard/ProductCard";

const Electronics = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.persistedStorage.currentUser);
  const { productListReducer } = useSelector((state) => state);

  useEffect(() => {
    dispatch(requestProductList(token));
  }, [token]);
  if (productListReducer) {
    var total = productListReducer.length;

    var cat = productListReducer.filter(
      (pd) => pd.category.name === "Electronics"
    );
  }
  return (
    <>
      <h1>Electronics Products</h1>
      <div className="viewall-card">
        {productListReducer &&
          cat.map((pd) => <ProductCard key={pd._id} pd={pd}></ProductCard>)}
      </div>
    </>
  );
};

export default Electronics;
