import { actionTypes } from "../../actionTypes";

const initialState = null;

const editProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SINGLE_PRODUCT_FOR_EDIT:
      return action.payload;
    default:
      return state;
  }
};

export default editProductReducer;
