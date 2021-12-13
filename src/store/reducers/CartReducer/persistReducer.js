import { actionTypes } from "../../actionTypes";

const initialState = {
  productId: null,
};

const PersistedCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PERSISTED_CART:
      return { productId: action.payload };
    default:
      return state;
  }
};

export default PersistedCartReducer;
