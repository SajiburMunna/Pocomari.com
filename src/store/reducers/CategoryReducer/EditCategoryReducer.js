import { actionTypes } from "../../actionTypes";

const initialState = {
  categoryForEdit: {},
};

const EditCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SINGLE_CATEGORY_FOR_EDIT:
      return { categoryForEdit: action.payload };
    default:
      return state;
  }
};

export default EditCategoryReducer;
