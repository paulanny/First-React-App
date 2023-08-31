import { useState } from "react";
import { motion } from 'framer-motion'
import NavLinks from "./Navlinks";
import "./Navbar.css";
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
const MobileNavigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuToggleHandler = () => {
    setOpenMenu(!openMenu);
  };
  const hamburgerCloseIcon = (
    <AiOutlineClose className="Hamburger" size="40px" color="white" 
    onClick={menuToggleHandler}/>
  );
  const hamburgerIcon = (
    <CgMenuRight
      className="Hamburger"
      size="40px"
      color="white"
      onClick={menuToggleHandler}
    />
  );

  const closeMobileMenu = () => setOpenMenu(false);
  

  return <nav className="MobileNavigation">
    {openMenu ? hamburgerCloseIcon : hamburgerIcon}
    {openMenu && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}</nav>;
};

export default MobileNavigation;
