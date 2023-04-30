import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nike from "../../assets/nike.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";

import tick from "../../assets/tick.png";
const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>Some Reasons</span>

        <div>
          <span className="stroke-text">Why</span>
          <span> Choose us</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>Over 140+ Exert Coaches</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Train Smarter and Faster than before</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 Free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Reliable partners</span>
          </div>
        </div>

        <span className="partners-text">OUR Partners</span>

        <div className="partners">
          <img src={nike} alt="" />
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
