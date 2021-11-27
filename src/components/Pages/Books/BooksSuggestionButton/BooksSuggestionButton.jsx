import React from "react";
import "./BooksSuggestionButton.css";
import ScrollAnimation from "react-animate-on-scroll";
const BooksSuggestionButton = () => {
  return (
    <>
      <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        <div className="suggestion-button-content">
          <div className="item">
            <h5>Extra discount</h5>
          </div>
          <div className="item">
            <h5>Ekushey Book Fair</h5>
          </div>
          <div className="item">
            <h5> Law and Justice</h5>
          </div>
          <div className="item">
            <h5>Engineering </h5>
          </div>
          <div className="item">
            <h5>Story</h5>
          </div>
          <div className="item">
            <h5>Philosophy and Philosopher </h5>
          </div>
          <div className="item">
            <h5>Medical </h5>
          </div>
          <div className="item">
            <h5>Liberation War 1971</h5>
          </div>
          <div className="item">
            <h5>Science Fiction </h5>
          </div>

          <div className="item">
            <h5>Show More</h5>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
};

export default BooksSuggestionButton;
