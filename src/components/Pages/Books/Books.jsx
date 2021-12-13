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
import Novel from "./Novel/Novel";
const Books = () => {
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{
                height: "250px",
                width: "1300px",
                textAlign: "center",
                borderRadius: "20px",
              }}
              src={banner1}
              alt="banner1"
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{
                height: "250px",
                width: "1300px",
                textAlign: "center",
                borderRadius: "20px",
              }}
              src={banner2}
              alt="banner2"
            />
          </div>
        </Carousel>
      </div>
      <RecentlySoldBooks></RecentlySoldBooks>
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

      <BooksSuggestionButton />
      <Novel></Novel>
    </>
  );
};

export default Books;
