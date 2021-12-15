/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { requestProductList } from "../../store/action/productAction";
import { useEffect } from "react";
import ProductCard from "../Pages/ProductCard/ProductCard";

const Search = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.persistedStorage.currentUser);

  const { productListReducer } = useSelector((state) => state);
  useEffect(() => {
    dispatch(requestProductList(token));
  }, [token]);
  return (
    <div>
      <h1>Your Search Product {location.state}</h1>
      <div className="viewall-card">
        {" "}
        {productListReducer &&
          productListReducer
            .filter((pd) => {
              if (location.state === "") return pd;
              else if (
                pd.title.toLowerCase().includes(location.state.toLowerCase())
              )
                return pd;
            })
            .map((pd) => <ProductCard key={pd._id} pd={pd}></ProductCard>)}
      </div>
    </div>
  );
};

export default Search;
