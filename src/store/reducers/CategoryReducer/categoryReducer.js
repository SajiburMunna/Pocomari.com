import { actionTypes } from "./../../actionTypes";

const initialState = {
  categoryList: [],
};
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CATEGORY_LIST:
      return { ...state, categoryList: action.payload };
    default:
      return state;
  }
};

export default categoryReducer;
