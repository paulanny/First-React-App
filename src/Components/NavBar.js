import { useState, useEffect } from "react";
import LogoImage from "../Assets/myLogo.png";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import "./Navbar.css";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`NavBar ${scrolled ? "scrolled" : ""}`}>
          <img className="logoimg" src={LogoImage} alt="My-Logo" />
        <Navigation />
        <MobileNavigation />
    </div>
  );
};

export default NavBar;
