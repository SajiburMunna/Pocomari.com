/* eslint-disable no-unused-vars */
import axios from "axios";
import { actionTypes } from "../actionTypes";
import { BASE_URL } from "./../../utils/constants";

export const requestAddNewProduct = (newProduct, token) => {
  return async (dispatch) => {
    const products = await axios.post(
      `${BASE_URL}/products`,
      {
        title: newProduct.title,
        price: parseInt(newProduct.price),
        description: newProduct.description,
        image: newProduct.image,
        stock: parseInt(newProduct.stock),
        category: {
          _id: newProduct.categoryId,
        },
      },
      {
        headers: {
          authorization: `bearer ${token}`,
        },
      }
    );
    dispatch(requestProductList(token));
    console.log(products);
  };
};

export const setProductList = (productList) => {
  return {
    type: actionTypes.SET_PRODUCT_LIST,
    payload: productList,
  };
};

//Get ALL Products
export const requestProductList = (token, store) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${BASE_URL}/products`, {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    dispatch(setProductList(data));
  };
};

//deleteproduct
export const requestDeleteProduct = (id, token) => {
  return async (dispatch) => {
    await axios.delete(`${BASE_URL}/products/${id}`, {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    dispatch(requestProductList(token));
  };
};

export const setCurrentProduct = (currentProduct) => {
  return {
    type: actionTypes.SET_SINGLE_PRODUCT_FOR_EDIT,
    payload: currentProduct,
  };
};
export const requestSingleProduct = (id, token) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${BASE_URL}/products/${id}`, {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    dispatch(setCurrentProduct(data));
  };
};

//Product Update
export const requestUpdateProduct = (
  id,
  currentProduct,
  isImageChanged,
  token
) => {
  return async (dispatch) => {
    if (isImageChanged) {
      const { data } = await axios.patch(
        `${BASE_URL}/products/${id}`,
        {
          title: currentProduct.title,
          price: parseInt(currentProduct.price),
          description: currentProduct.description,
          image: currentProduct.image,
          stock: parseInt(currentProduct.stock),
          category_id: currentProduct.categoryId,
        },
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      dispatch(requestProductList(token));
    } else {
      const { data } = await axios.patch(
        `${BASE_URL}/products/${id}`,
        {
          title: currentProduct.title,
          price: parseInt(currentProduct.price),
          description: currentProduct.description,

          stock: parseInt(currentProduct.stock),
          category_id: currentProduct.categoryId,
        },
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      dispatch(requestProductList(token));
    }
  };
};
