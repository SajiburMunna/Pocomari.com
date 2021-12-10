import { actionTypes } from "../../actionTypes";

const initialState = {
  userList: null,
};

const UserListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_LIST:
      return { userList: action.payload };
    default:
      return state;
  }
};

export default UserListReducer;
