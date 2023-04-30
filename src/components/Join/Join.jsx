import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i43dndl",
        "template_eaq2xdg",
        form.current,
        "ukEuKfXuaxXzl5Yvc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready To</span>
          <span>Leave Up</span>
        </div>
        <div>
          <span>Your Body</span>
          <span className="stroke-text">With us</span>
        </div>
      </div>
      <div className="right-j">
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          className="email-container"
        >
          <input
            type="email"
            name="user_email"
            id=""
            placeholder="Enter Your Email"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
