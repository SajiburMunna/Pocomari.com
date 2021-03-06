import axios from "axios";

import { actionTypes } from "../actionTypes";
import { BASE_URL } from "../../utils/constants";

export const addNewUser = (newUser) => {
  return {
    type: actionTypes.ADD_NEW_USER,
    payload: newUser,
  };
};

export const requestAddNewUser = (newUser) => {
  const {
    email,
    username,
    password,
    firstname,
    lastname,
    phone,
    city,
    street,
    number,
    zipcode,
    lat,
    long,
  } = newUser;

  return async (dispatch) => {
    const { data } = await axios.post("http://localhost:8080/signup", {
      email: email,
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      address: {
        city: city,
        street: street,
        number: number,
        zipcode: zipcode,
        geolocation: {
          lat: lat,
          long: long,
        },
      },
      phone: phone,
    });

    dispatch(addNewUser(data));
  };
};
export const setUserProfileInfo = (userInfo) => {
  return {
    type: actionTypes.CURRENT_USER_INFO,
    payload: userInfo,
  };
};

export const requestUserInfoByUser = (token) => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:8080/my-detail", {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    dispatch(setUserProfileInfo(data));
  };
};

export const setUserList = (userList) => {
  return {
    type: actionTypes.SET_USER_LIST,
    payload: userList,
  };
};

export const requestUserList = (token) => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:8080/user/", {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    dispatch(setUserList(data));
  };
};
