import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  const [scrollVal, setScrollVal] = useState(0);

  window.addEventListener("scroll", () => setScrollVal(window.scrollY));
  console.log(menuOpened, mobile, scrollVal);

  return (
    <div className="header" id="hero">
      <img src={logo} alt="" className="logo" />

      {mobile || scrollVal > 50 ? (
        <div
          className="mobile-menu"
          style={
            scrollVal > 50 && !mobile
              ? { position: "fixed", zIndex: "99", left: "35px" }
              : {}
          }
          onClick={() => {
            setMenuOpened(!menuOpened);
          }}
        >
          <img
            src={bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        ""
      )}

      {menuOpened ? (
        <ul
          className={`headers-menu ${
            mobile || scrollVal > 50 ? "mobile-menu-list" : ""
          } ${mobile && "menu-small-device"}`}
          onClick={() => {
            setMenuOpened(false);
          }}
        >
          <li>
            <AnchorLink href="#hero" offset={50}>
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#programs" offset={60}>
              Programs
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#reasons" offset={80}>
              Why us
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#plans" offset={50}>
              Plans
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#testimonials" offset={80}>
              Testimonials
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#join-us" offset={90}>
              Join Us
            </AnchorLink>
          </li>
        </ul>
      ) : !mobile ? (
        <ul
          className={`headers-menu  ${
            menuOpened && scrollVal > 50 ? "mobile-menu-list" : ""
          }`}
          onClick={() => {
            setMenuOpened(false);
          }}
        >
          <li>
            <AnchorLink href="#hero" offset={50}>
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#programs" offset={60}>
              Programs
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#reasons" offset={80}>
              Why us
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#plans" offset={50}>
              Plans
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#testimonials" offset={80}>
              Testimonials
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#join-us" offset={90}>
              Join Us
            </AnchorLink>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
