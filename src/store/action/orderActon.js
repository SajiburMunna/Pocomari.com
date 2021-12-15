/* eslint-disable no-unused-vars */
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { actionTypes } from "../actionTypes";

export const setOrderList = (orderList) => {
  return {
    type: actionTypes.SET_ORDER_LIST,
    payload: orderList,
  };
};

export const requestOrderList = (token) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${BASE_URL}/order`, {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    dispatch(setOrderList(data));
  };
};

export const requestChangeOrderStatus = (orderId, status, token) => {
  return async (dispatch) => {
    const { data } = await axios.patch(
      `${BASE_URL}/order/${orderId}`,
      {
        status: status,
      },
      {
        headers: {
          authorization: `bearer ${token}`,
        },
      }
    );
    dispatch(requestOrderList(token));
  };
};

//set my (user) orders

export const setUserOrders = (userOrderList) => {
  return {
    type: actionTypes.SET_USER_ORDER_LIST,
    payload: userOrderList,
  };
};

//Get my (user) orders
export const requestOrdersByUser = (token) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${BASE_URL}/order/my-order`, {
      headers: {
        authorization: `bearer ${token}`,
      },
    });

    dispatch(setUserOrders(data));
  };
};
