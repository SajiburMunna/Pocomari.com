import React from "react";
import "./ProductsReviewRating.css";
import pf from "../../../../Assets/pf.jpg";

const ProductsReviewRating = () => {
  return (
    <div>
      <h3>Reviews and Ratings</h3>
      <div className="left-rating-content">
        <div>
          <h3>4.9</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <p>307 Ratings and 287 Reviews</p>
        </div>
        <div className="right-rating-content">
          <p>Please login to write review </p>

          <button>Login</button>
        </div>
      </div>
      <hr />

      <div class="chip">
        <img src={pf} alt="Person" width="96" height="96" />
        By Sajibur Munna
      </div>
      <p>
        Best Book ,Ata porle aponio chagol hoia jaben and chagol palon shikben
      </p>
    </div>
  );
};

export default ProductsReviewRating;
