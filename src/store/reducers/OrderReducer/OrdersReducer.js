import { actionTypes } from "../../actionTypes";

const initialState = {
  orderList: null,
};

const OrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ORDER_LIST:
      return { orderList: action.payload };
    default:
      return state;
  }
};

export default OrdersReducer;
