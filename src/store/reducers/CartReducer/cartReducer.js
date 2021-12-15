import { actionTypes } from "../../actionTypes";

const initialState = {
  cartList: null,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CART_LIST:
      return { cartList: action.payload };
    default:
      return state;
  }
};

export default CartReducer;
