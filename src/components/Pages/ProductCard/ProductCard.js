import React from "react";
import { BASE_URL } from "../../../utils/constants";

const ProductCard = ({ pd }) => {
  return (
    <div>
      <div class="card">
        <div>
          <img src={BASE_URL + pd.image} alt="Avatar" />
          <div class=" rct-books-container">
            <small> {pd.title}</small>
            <p>Price: {pd.price}</p>
            <button>Add Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
