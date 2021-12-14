import { actionTypes } from "../../actionTypes";

const initialState = {
  userOrderList: null,
};

const UserOrderListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_ORDER_LIST:
      return { userOrderList: action.payload };
    default:
      return state;
  }
};

export default UserOrderListReducer;
