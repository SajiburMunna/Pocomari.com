/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  requestCartList,
  setCartProductQuantity,
  deleteProductFromCart,
} from "../../../store/action/cartAction";
import "./Cart.css";
import { BASE_URL } from "../../../utils/constants";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.CartReducer);

  const { token } = useSelector((state) => state.persistedStorage.currentUser);
  useEffect(() => {
    dispatch(requestCartList(token));
  }, [token]);
  const handleQuantity = (type, productId, quantity) => {
    dispatch(setCartProductQuantity(type, productId, quantity, token));
  };
  const handleDeleteCartItem = (id) => {
    dispatch(deleteProductFromCart(id, token));
  };
  return (
    <div>
      {cartList?.status === 0 ? (
        <h1 style={{ color: "green" }}>Your Carts</h1>
      ) : (
        <h1 style={{ textAlign: "center", color: "red" }}>
          Your Cart is Empty!
        </h1>
      )}

      {cartList?.status === 0 ? (
        <div className="cart-div">
          <div className="cart-div-left">
            <table>
              <tr>
                <th>Product Image</th>
                <th>ProductName</th>
                <th>ProductCategory</th>
                <th>ProductPrice</th>
                <th>ProductQunatity</th>
                <th>Product Delete</th>
              </tr>
              {cartList?.status === 0
                ? cartList?.products.map((pd) => (
                    <tr key={pd._id}>
                      <td>
                        <img
                          src={BASE_URL + pd.productId.image}
                          width="100px"
                          height="100px"
                          alt=""
                        />
                      </td>
                      <td>{pd.productId.title}</td>
                      <td>{pd.productId.category.name}</td>
                      <td>{pd.productId.price}</td>
                      <td>
                        <button
                          onClick={() =>
                            handleQuantity(
                              "increment",

                              pd.productId._id,
                              pd.quantity
                            )
                          }
                        >
                          ➕
                        </button>{" "}
                        {pd.quantity}{" "}
                        <button
                          onClick={() =>
                            handleQuantity(
                              "decrement",

                              pd.productId._id,
                              pd.quantity
                            )
                          }
                        >
                          ➖
                        </button>{" "}
                      </td>
                      <td>
                        <DeleteIcon
                          onClick={() => handleDeleteCartItem(pd._id)}
                          fontSize="large"
                          style={{
                            backgroundColor: "   rgb(238, 30, 30)",
                            color: "white",
                            padding: "5px",
                            cursor: "pointer",
                            borderRadius: "5px",
                          }}
                        />
                      </td>
                    </tr>
                  ))
                : null}
            </table>
          </div>
          <div className="cart-div-right">
            <h2>Your Cart Details</h2>
            <p>
              {" "}
              Total Quantity :
              {cartList && cartList?.status === 0
                ? cartList?.products.reduce(
                    (total, item) => total + item.quantity,
                    0
                  )
                : 0}
            </p>
            <p>
              Total Price :
              {cartList && cartList?.status === 0
                ? cartList?.products.reduce(
                    (total, item) =>
                      total + item.productId.price * item.quantity,
                    0
                  )
                : 0}{" "}
              TK
            </p>
            <button className="button">
              {" "}
              <span>CheckOut </span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
