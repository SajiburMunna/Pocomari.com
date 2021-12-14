import { actionTypes } from "../../actionTypes";
const initialState = {
  RecentViewList: [],
};
const recentViewProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_RECENT_VIEW_PRODUCTS:
      const inCart = state.RecentViewList.find(
        (item) => item._id === action.payload._id
      );
      return {
        ...state,
        RecentViewList: inCart
          ? state.RecentViewList.map((item) =>
              item._id === action.payload._id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.RecentViewList, action.payload],
      };
    default:
      return state;
  }
};

export default recentViewProductReducer;
