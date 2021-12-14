import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { requestOrdersByUser } from "../../../store/action/orderAction";

const MyOrder = () => {
  const [data, setData] = useState();
  console.log(data);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.persistedStorage.currentUser);
  console.log(token);
  const { UserOrderListReducer } = useSelector((state) => state);
  console.log(UserOrderListReducer && UserOrderListReducer);

  useEffect(() => {
    dispatch(requestOrdersByUser(token));
  }, []);
  return (
    <div>
      <h1>My Order</h1>
      <table>
        <tr>
          <th>Product Image</th>
          <th>ProductName</th>
          <th>ProductCategory</th>
          <th>ProductPrice</th>
          <th>ProductQunatity</th>
          <th>Order Date</th>
          <th>Order Status</th>
        </tr>
        {
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td> </td>
            <td></td>
          </tr>
        }
      </table>
    </div>
  );
};

export default MyOrder;
