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

const RecentlySoldBooks = () => {
  return (
    <>
      <div className="recentlysoldbooks-content ">
        <div>
          <h2>Recently Sold Books</h2>
          <Carousel
            className="car-content"
            plugins={[
              "centered",

              "arrows",
              {
                resolve: slidesToShowPlugin,

                options: {
                  numberOfSlides: 3,
                },
              },
              {
                resolve: slidesToScrollPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
          >
            <div>
              <div class="card">
                <img src={p1} alt="Avatar" />
                <div class="container">
                  <h4>
                    <b>John Doe</b>
                  </h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <img src={p5} alt="Avatar" />
                <div class="container">
                  <h4>
                    <b>John Doe</b>
                  </h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <img src={p2} alt="Avatar" />
                <div class="container">
                  <h4>
                    <b>John Doe</b>
                  </h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <img src={p3} alt="Avatar" />
                <div class="container">
                  <h4>
                    <b>John Doe</b>
                  </h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <img src={p4} alt="Avatar" />
                <div class="container">
                  <h4>
                    <b>John Doe</b>
                  </h4>
                  <p>Architect & Engineer</p>
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
