/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { requestSingleProductForDeatils } from "../../../store/action/productdetailsAction";
import { BASE_URL } from "./../../../utils/constants";
import { requestProductList } from "../../../store/action/productAction";
import "./Productdet.css";
import { useNavigate } from "react-router-dom";
import { setPersistedCart } from "./../../../store/action/cartAction";
import { requestAddCartItem } from "../../../store/action/cartAction";

const Prodcutdet = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { token, role } = useSelector(
    (state) => state.persistedStorage.currentUser
  );
  const currentProductDetails = useSelector(
    (state) => state.productDetailsReducer
  );
  const { productListReducer } = useSelector((state) => state);

  useEffect(() => {
    dispatch(requestSingleProductForDeatils(id, token));
    dispatch(requestProductList(token));
  }, [token]);

  if (productListReducer) {
    var samcat = productListReducer.filter(
      (pd) => pd.category.name === currentProductDetails?.category.name
    );
  }
  const navigate = useNavigate();
  const handleAddToCart = (productId) => {
    if (token === "") {
      navigate("/login");
      dispatch(setPersistedCart(productId));
    } else if (role === "user") {
      dispatch(requestAddCartItem(productId, token));
    }
  };

  return (
    <div>
      <div className="pd-details-content">
        <div className="pd-details-left-content">
          <div>
            <img
              src={`${BASE_URL}${currentProductDetails?.image}`}
              height="400px"
              width="300px"
              alt=""
            />
          </div>
          <div>
            <p>BooksName:{currentProductDetails?.title} </p>
            <p> Category:{currentProductDetails?.category.name} </p>
            <p> TK.{currentProductDetails?.price} </p>
            <button
              className="pd-details-addcat-btn-border  pd-details-addcat-btn"
              onClick={() => handleAddToCart(currentProductDetails?._id)}
            >
              ADD CART
            </button>
          </div>
        </div>
        <div>
          <p>Cash On Delivery</p>
          <p> 7 Days Happy Return</p>
          <p> Delivery Charge Tk.50(Online Order)</p>
          <p> Purchase & Earn</p>
          <hr />
        </div>
        <div className="related-boos-content">
          <p>Related Books</p>
          {samcat &&
            samcat.slice(0, 2).map((pd) => (
              <div key={pd._id} class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src={`${BASE_URL}${pd?.image}`}
                      alt="Avatar"
                      style={{ width: "150px", height: "150px" }}
                    />
                  </div>
                  <div class="flip-card-back">
                    <small>Name:{pd?.title}</small>
                    <br />
                    <small>Category:{pd?.category.name}</small>
                    <p>Price:{pd?.price}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Prodcutdet;
