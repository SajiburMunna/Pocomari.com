/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { requestProductList } from "../../../store/action/productAction";
import Pagination1 from "../../Pagination/Pagination";
import ProductCard from "./../ProductCard/ProductCard";

const Electronics = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.persistedStorage.currentUser);
  const { productListReducer } = useSelector((state) => state);

  useEffect(() => {
    dispatch(requestProductList(token));
  }, [token]);
  if (productListReducer) {
    var total = productListReducer.length;

    var cat = productListReducer.filter(
      (pd) => pd.category.name === "Electronics"
    );
  }
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productListReducer
    ? cat.slice(indexOfFirstPost, indexOfLastPost)
    : null;

  const pageCount = Math.ceil(cat && cat.length / postsPerPage);
  return (
    <>
      <h1>Electronics Products</h1>
      <div className="viewall-card">
        {productListReducer &&
          currentPosts.map((pd) => (
            <ProductCard key={pd._id} pd={pd}></ProductCard>
          ))}
      </div>
      <Pagination1
        pageCount={pageCount}
        postsPerPage={postsPerPage}
        totalPosts={cat?.length}
        paginate={paginate}
      ></Pagination1>
    </>
  );
};

export default Electronics;
