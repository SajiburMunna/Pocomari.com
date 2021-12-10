import { actionTypes } from "../../actionTypes";
const initialState = null;

const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SINGLE_PRODUCT_FOR_PRODUCT_DETAILS_PAGE:
      return action.payload;
    default:
      return state;
  }
};

export default productDetailsReducer;
