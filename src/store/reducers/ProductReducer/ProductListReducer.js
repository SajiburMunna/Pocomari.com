import { actionTypes } from "../../actionTypes";

const initialState = null;

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCT_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default productListReducer;
