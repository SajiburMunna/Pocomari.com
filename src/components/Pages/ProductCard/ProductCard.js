import React from "react";
import { BASE_URL } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPersistedCart } from "./../../../store/action/cartAction";

import { requestAddCartItem } from "../../../store/action/cartAction";
import recentViewProductReducer from "./../../../store/reducers/RecentViewProductsReducer/RecentViewProductsReducer";

const ProductCard = ({ pd }) => {
  console.log(pd);
  const navigate = useNavigate();
  const goForEdit = (id) => {
    // dispatch(recentViewProductReducer(pd));
    navigate(`/product/${id}`);
  };
  const dispatch = useDispatch();
  const { role, token } = useSelector(
    (state) => state.persistedStorage.currentUser
  );
  const handleAddToCart = (productId) => {
    if (token === "") {
      navigate("/login");

      dispatch(setPersistedCart(productId));
    } else if (role === "user") {
      dispatch(requestAddCartItem(productId, token));
    }
  };
  return (
    <div>
      <div class="card">
        <div>
          <img
            onClick={() => goForEdit(pd._id)}
            src={BASE_URL + pd.image}
            alt="Avatar"
          />
          <div class=" rct-books-container">
            <small> {pd.title}</small>
            <p>Price: {pd.price}</p>
            <button onClick={() => handleAddToCart(pd._id)}>Add Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
