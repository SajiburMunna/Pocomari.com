import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { actionTypes } from "../actionTypes";

export const setCurrentProductForDetails = (currentProduct) => {
  return {
    type: actionTypes.PRODUCT_DETAILS_PAGE,
    payload: currentProduct,
  };
};
export const requestSingleProductForDeatils = (id, token) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${BASE_URL}/products/${id}`, {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    dispatch(setCurrentProductForDetails(data));
  };
};
