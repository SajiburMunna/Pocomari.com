import React, { useState } from "react";
import "./ProductsDetails.css";
import p1 from "../../../../Assets/p1.jpg";

const ProductsDetails = () => {
  const [showdetails, setShowdetils] = useState(true);
  const [showdet, setShowdet] = useState(false);

  const show = () => {
    setShowdetils(true);
    setShowdet(false);
  };
  const show1 = () => {
    setShowdetils(false);
    setShowdet(true);
  };
  return (
    <>
      <div className="pd-details-content">
        <div className="pd-details-left-content">
          <div>
            <img src={p1} alt="" />
          </div>
          <div>
            <p>BooksName:Chagol Palon</p>
            <p>By Chagol</p>
            <p> Category: গবাদি পশু</p>
            <p> TK. 245</p>
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
      </div>
      <div>
        <p className="pd-details-active">Product Specification & Summary</p>
      </div>
      <div class="tab">
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
      ) : null}
    </>
  );
};

export default ProductsDetails;
