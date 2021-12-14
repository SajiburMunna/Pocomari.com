import { actionTypes } from "../actionTypes";
export const addRecentViewProducts = (addtocart) => {
  return {
    type: actionTypes.SET_RECENT_VIEW_PRODUCTS,
    payload: addtocart,
  };
};
