/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./RecentlySoldBooks.css";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { requestProductList } from "./../../../../store/action/productAction";
import { BASE_URL } from "./../../../../utils/constants";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ProductCard from "../../ProductCard/ProductCard";

const RecentlySoldBooks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.persistedStorage.currentUser);
  const { productListReducer } = useSelector((state) => state);

  useEffect(() => {
    dispatch(requestProductList(token));
  }, [token]);
  const go = () => {
    navigate("/viewall", { state: "Book" });
  };
  if (productListReducer) {
    var total = productListReducer.length;
    var cat = productListReducer.filter(
      (pd) => pd.category.name === "Book" || pd.category.name2 === "Novel"
    );
    var cattotal = cat.length;
    console.log(cat);
  }

  const [showPerPage, setShowPerPage] = useState(5);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);
  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(cattotal / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <>
      <div className="recentlysoldbooks-content ">
        <div>
          <div>
            <h2 className="rectsoldbooks-title">Books</h2>
            <h4 className="recentsoldbooks-viewall" onClick={() => go()}>
              View All
            </h4>
          </div>
          <div className="clear-div"></div>

          <div className="product-list ">
            <p
              style={{ cursor: "pointer" }}
              onClick={() => onButtonClick("prev")}
            >
              <ArrowCircleLeftIcon fontSize="large"></ArrowCircleLeftIcon>
            </p>
            {cat &&
              cat
                .slice(pagination.start, pagination.end)

                .map((pd) => <ProductCard key={pd._id} pd={pd}></ProductCard>)}
            <p
              style={{ cursor: "pointer" }}
              onClick={() => onButtonClick("next")}
            >
              <ArrowCircleRightIcon fontSize="large"></ArrowCircleRightIcon>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentlySoldBooks;
