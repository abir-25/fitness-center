import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const length = testimonialsData.length;
  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What They</span>
        <span>Say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <p>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          -<span>{testimonialsData[selected].status}</span>
        </p>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
            src={leftArrow}
            alt=""
            onClick={() => {
              selected === 0
                ? setSelected(length - 1)
                : setSelected((prev) => prev - 1);
            }}
          />
          <img
            src={rightArrow}
            alt=""
            onClick={() => {
              selected === length - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
