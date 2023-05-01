import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import heroImage from "../../assets/hero_image.png";
import heroImageBack from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 1.5 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span> <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape your ideal body like champions.
              you will love the journey.
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+970</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+120</span>
            <span>Fitness Programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <div className="btn">Get Started</div>
          <div className="btn">Learn More</div>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={heroImage} alt="" className="hero-image" />

        <motion.img
          src={heroImageBack}
          alt=""
          className="hero-image-back"
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
        />

        <motion.div
          className="calories"
          initial={{ right: "37rem" }}
          whileInView={{ right: "27rem" }}
          transition={transition}
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
