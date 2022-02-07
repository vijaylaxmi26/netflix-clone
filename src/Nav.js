import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src={require("./netflix.png")}
        alt="Netflix Logo"
      />

      <img className="nav__avatar" src={require("./profile.png")} alt="smile" />
    </div>
  );
}

export default Nav;
