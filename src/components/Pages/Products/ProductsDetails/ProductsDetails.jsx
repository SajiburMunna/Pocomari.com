/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./ProductsDetails.css";
import p1 from "../../../../Assets/p1.jpg";
import ProductsReviewRating from "../ProductsReviewRating/ProductsReviewRating";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { requestSingleProduct } from "../../../../store/action/productAction";

const ProductsDetails = () => {
  return (
    <>
      <div className="pd-details-content">
        <div className="pd-details-left-content">
          <div>
            <img src={p1} alt="" />
          </div>
          <div>
            <p>BooksName: </p>
            <p> Category: </p>
            <p> TK. </p>
            <button className="pd-details-addcat-btn-border  pd-details-addcat-btn">
              ADD CART
            </button>
          </div>
        </div>
        <div>
          <p>Cash On Delivery</p>
          <p> 7 Days Happy Return</p>
          <p> Delivery Charge Tk.50(Online Order)</p>
          <p> Purchase & Earn</p>
          <hr />
        </div>
        <div className="related-boos-content">
          <p>Related Books</p>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="img_avatar.png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
                sojib
              </div>
              <div class="flip-card-back">
                <p>John Doe</p>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="img_avatar.png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
                sojib
              </div>
              <div class="flip-card-back">
                <p>John Doe</p>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="pd-details-active">Product Specification & Summary</p>
      </div>
      {/* <div class="tab">
        <button class="tablinks" onClick={() => show()}>
          <span className={`${showdetails ? "pd-details-active" : null}`}>
            Summary
          </span>
        </button>
        <button class="tablinks" onClick={() => show1()}>
          <span className={`${showdet ? "pd-details-active" : null}`}>
            Specification
          </span>
        </button>
      </div>

      {showdetails ? (
        <div className="tabcontent">
          <h3>Summary</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            delectus provident totam laborum debitis maiores et, eveniet rem?
            Molestiae fuga odio iste distinctio dicta consequatur incidunt
            maxime, nisi perspiciatis iusto!
          </p>
        </div>
      ) : null}

      {showdet ? (
        <div id="Paris" className="tabcontent">
          <h3> Specification</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            delectus provident totam laborum debitis maiores et, eveniet rem?
            Molestiae fuga odio iste distinctio dicta consequatur incidunt
            maxime, nisi perspiciatis iusto!
          </p>
        </div>
      ) : null} */}
    </>
  );
};

export default ProductsDetails;
