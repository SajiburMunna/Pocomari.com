import React from "react";
import "./RecentlySoldBooks.css";
import Carousel, {
  slidesToShowPlugin,
  slidesToScrollPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import p1 from "../../../../Assets/p1.jpg";
import p2 from "../../../../Assets/p2.jpg";
import p3 from "../../../../Assets/p3.jpg";
import p4 from "../../../../Assets/p4.jpg";
import p5 from "../../../../Assets/p5.jpg";
import { useNavigate } from "react-router-dom";

const RecentlySoldBooks = () => {
  const navigate = useNavigate();
  const go = () => {
    navigate("/viewall");
  };
  return (
    <>
      <div className="recentlysoldbooks-content ">
        <div>
          <div>
            <h2 className="rectsoldbooks-title">Recently Sold Books</h2>
            <h4 className="recentsoldbooks-viewall" onClick={() => go()}>
              View All
            </h4>
          </div>

          <Carousel
            className="car-content"
            plugins={[
              "arrows",
              {
                resolve: slidesToShowPlugin,

                options: {
                  numberOfSlides: 5,
                },
              },
              {
                resolve: slidesToScrollPlugin,
                options: {
                  numberOfSlides: 5,
                },
              },
            ]}
          >
            <div>
              <div class="card">
                <img src={p1} alt="Avatar" />
                <div class=" rct-books-container">
                  <h4>
                    <p>Book Name</p>
                  </h4>
                  <p>Price :120TK</p>
                  <button>Add Cart</button>
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <img src={p5} alt="Avatar" />
                <div class="rct-books-container">
                  <h4>
                    <p>Book Name</p>
                  </h4>
                  <p>Price :120TK</p>
                  <button>Add Cart</button>
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <img src={p2} alt="Avatar" />
                <div class=" rct-books-container">
                  <h4>
                    <p>Book Name</p>
                  </h4>
                  <p>Price :120TK</p>
                  <button>Add Cart</button>
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <img src={p3} alt="Avatar" />
                <div class=" rct-books-container">
                  <h4>
                    <p>Book Name</p>
                  </h4>
                  <p>Price :120TK</p>
                  <button>Add Cart</button>
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <img src={p4} alt="Avatar" />
                <div class=" rct-books-container">
                  <h4>
                    <p>Book Name</p>
                  </h4>
                  <p>Price :120TK</p>
                  <button>Add Cart</button>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default RecentlySoldBooks;
