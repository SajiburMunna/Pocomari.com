import React from "react";
import "./Books.css";
import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import banner1 from "../../../Assets/banner1.png";
import banner2 from "../../../Assets/banner2.png";
import child from "../../../Assets/child.png";
import freelancing from "../../../Assets/freelancing.png";
import west from "../../../Assets/west.png";
import BooksSuggestionButton from "./BooksSuggestionButton/BooksSuggestionButton";
import RecentlySoldBooks from "./RecentlySoldBooks/RecentlySoldBooks";
const Books = () => {
  return (
    <>
      <div class="navbar">
        <div class="dropdown">
          <button class="dropbtn">
            Authors🔽
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="##">Link 1</a>
            <a href="##">Link 2</a>
            <a href="##">Link 3</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            Subjects🔽
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="##">Link 1</a>
            <a href="##">Link 2</a>
            <a href="##">Link 3</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            Publications🔽
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="##">Link 1</a>
            <a href="##">Link 2</a>
            <a href="##">Link 3</a>
          </div>
        </div>

        <a href="#home">Islamic Books</a>
        <a href="#news">Book fair-2021</a>
        <a href="#news">Bestseller books</a>
        <a href="#news">Novel</a>
        <a href="#news">Science box</a>
        <a href="#news">Stock products</a>
      </div>
      <div>
        <Carousel
          plugins={[
            "infinite",
            {
              resolve: autoplayPlugin,
              options: {
                interval: 10000,
              },
            },
          ]}
          animationSpeed={0}
        >
          <img
            style={{ height: "200px", width: "1200px" }}
            src={banner1}
            alt="banner1"
          />
          <img
            style={{ height: "200px", width: "1200px" }}
            src={banner2}
            alt="banner2"
          />
        </Carousel>
      </div>

      <div>
        <div className="instock-banner">
          <div>
            <img src={west} alt="west" />
          </div>
          <div>
            <img src={child} alt="child" />
          </div>
          <div>
            <img src={freelancing} alt="freelancing" />
          </div>
        </div>
      </div>
      <RecentlySoldBooks></RecentlySoldBooks>
      <BooksSuggestionButton />
    </>
  );
};

export default Books;
