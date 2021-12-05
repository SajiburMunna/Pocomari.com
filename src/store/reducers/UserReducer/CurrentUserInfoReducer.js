import { actionTypes } from "../../actionTypes";

const initialState = null;

const CurrentUserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CURRENT_USER_INFO:
      return action.payload;

    default:
      return state;
  }
};

export default CurrentUserInfoReducer;
