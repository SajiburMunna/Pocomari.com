/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { requestOrdersByUser } from "../../../store/action/orderActon";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const MyOrder = () => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.persistedStorage.currentUser);
  const userOrderList = useSelector(
    (state) => state.UserOrderListReducer.userOrderList
  );
  console.log(userOrderList);

  useEffect(() => {
    dispatch(requestOrdersByUser(token));
  }, []);
  return (
    <div>
      <h1>My Order</h1>

      <table>
        <tr>
          <th>ProductID</th>
          <th>ProductStatus</th>
          <th>ProductDate</th>
        </tr>

        {userOrderList &&
          userOrderList.map((pd) => (
            <tr key={pd._id}>
              <td>{pd._id} </td>
              <td>
                {pd.status === 0
                  ? "panding"
                  : pd.status === 1
                  ? "Deliverd"
                  : "cencel"}{" "}
              </td>
              <td>{new Date(pd.date).toUTCString()}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default MyOrder;
