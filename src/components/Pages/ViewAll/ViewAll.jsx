/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-redeclare */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./ViewAll.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { requestProductList } from "./../../../store/action/productAction";
import { useLocation } from "react-router-dom";

import ProductCard from "./../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import Pagination from "./../../Pagination/Pagination";
import ReactPaginate from "react-paginate";
import Pagination1 from "./../../Pagination/Pagination";
const ViewAll = () => {
  const navigate = useNavigate();
  const go = (cat) => {
    navigate("/viewall", { state: cat });
  };
  const location = useLocation();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.persistedStorage.currentUser);
  const { productListReducer } = useSelector((state) => state);

  useEffect(() => {
    dispatch(requestProductList(token));
  }, [token]);
  if (productListReducer) {
    var total = productListReducer.length;

    var cat = productListReducer.filter(
      (pd) => pd.category.name === location.state
    );
  }
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productListReducer
    ? cat.slice(indexOfFirstPost, indexOfLastPost)
    : null;

  const pageCount = Math.ceil(cat && cat.length / postsPerPage);

  return (
    <div>
      <div class="sidenav">
        <a onClick={() => go("Book")}>Book</a>
        <a onClick={() => go("Novel")}>Novel</a>
        <a onClick={() => go("Electronics")}>Elecronics</a>
        <a onClick={() => go("Stationary")}>Stationary</a>
      </div>

      <div class="main">
        <h1>Your {location.state}</h1>
        <div className="viewall-card">
          {productListReducer &&
            currentPosts.map((pd) => (
              <ProductCard key={pd._id} pd={pd}></ProductCard>
            ))}
        </div>
        {location && (
          <Pagination1
            pageCount={pageCount}
            postsPerPage={postsPerPage}
            totalPosts={cat?.length}
            paginate={paginate}
          />
        )}
      </div>
    </div>
  );
};

export default ViewAll;
