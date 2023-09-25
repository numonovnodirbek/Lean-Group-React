import React, { useEffect, useState } from "react";
import logo from "../../assets/image/logo.svg";
import hamburger from "../../assets/image/hamburger.svg";
import "./Navbar.scss";
import Navlist from "./Navlist";



const Navbar = () => {
  const changeMode = () => {
    document.body.classList.toggle("darl-light");
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const openBar = () => {
    document.body.classList.toggle("open-bar");
  };
  return (
    <header className={isScrolled ? "header scrolled" : "header"}>
      <div className="container">
        <nav id="navbar">
          <img src={logo} alt="logo" />
          <ul className="nav_list">
            <Navlist />
            <label className="close" onClick={openBar}>
              <i class="fa-solid fa-x"></i>
            </label>
          </ul>
          <div className="nav_right">
            <label className="switch" onClick={changeMode}>
              <input id="switch" type="checkbox" />
              <span className="slider"></span>
            </label>
            <img
              id="hamburger"
              src={hamburger}
              alt="hamburger"
              onClick={openBar}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
