import { combineReducers } from "redux";
import addUserReducer from "./AddUserReducer/addUserReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./AuthReducer/authReducer";
import CurrentUserInfoReducer from "./UserReducer/CurrentUserInfoReducer";
import categoryReducer from "./CategoryReducer/categoryReducer";
import EditCategoryReducer from "./CategoryReducer/EditCategoryReducer";
import productListReducer from "./ProductReducer/ProductListReducer";
import editProductReducer from "./ProductReducer/editProductReducer";
import ProductsDetails from "./../../components/Pages/Products/ProductsDetails/ProductsDetails";
import UserListReducer from "./UserReducer/UserListReducer";
import productDetailsReducer from "./ProductReducer/productDetailsReducer";
import CartReducer from "./CartReducer/CartReducer";
import OrdersReducer from "./OrderReducer/OrdersReducer";
import PersistedCartReducer from "./CartReducer/PersistedCartReducer";
import UserOrderListReducer from "./OrderReducer/UserOrderListReducer";

const persistConfig = {
  key: "pocomari",
  storage: storage,
};
const persistConfig2 = {
  key: "pocomariCart",
  storage: storage,
};

const persistedStorage = persistReducer(persistConfig, authReducer);
const PersistedCartStorage = persistReducer(
  persistConfig2,
  PersistedCartReducer
);

const rootReducer = combineReducers({
  persistedStorage,
  PersistedCartStorage,

  addUserReducer,
  CurrentUserInfoReducer,
  categoryReducer,
  EditCategoryReducer,
  productListReducer,
  editProductReducer,
  ProductsDetails,
  UserListReducer,
  productDetailsReducer,
  CartReducer,
  OrdersReducer,
  UserOrderListReducer,
});
export default rootReducer;
