import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import './Navbar.css';
import { CgMenuRight } from 'react-icons/cg';
import Navlinks from './Navlinks'; // Update with the actual path

// const MobileNavigation = () => {
//   const [openMenu, setOpenMenu] = useState(false);

//   const menuToggleHandler = () => {
//     setOpenMenu(!openMenu);
//   };

//   const hamburgerCloseIcon = (
//     <AiOutlineClose
//       className="Hamburger"
//       size="40px"
//       color="white"
//       onClick={menuToggleHandler}
//     />
//   );
//   const hamburgerIcon = (
//     <CgMenuRight
//       className="Hamburger"
//       size="40px"
//       color="white"
//       onClick={menuToggleHandler}
//     />
//   );

//   const closeMobileMenu = () => {
//     setOpenMenu(false);
//   };

const MobileNavigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [animateOnce, setAnimateOnce] = useState(false);
  const animationFrom = { opacity: 0, y: -100 };
  const animateTo = { opacity: 1, y: 0 };

  const menuToggleHandler = () => {
    setOpenMenu(prevOpenMenu => !prevOpenMenu);
    setAnimateOnce(false); // Reset animation state on menu toggle
  };

  const animateClickHandler = () => {
    setAnimateOnce(true);
  };

  const hamburgerCloseIcon = (
    <AiOutlineClose
      className="HamburgerC"
      size="40px"
      color="white"
      onClick={menuToggleHandler}
    />
  );

  const hamburgerIcon = (
    <CgMenuRight
      className="Hamburger"
      size="40px"
      color="white"
      onClick={menuToggleHandler}
    />
  );

  const closeMobileMenu = () => {
    setOpenMenu(false);
  };

  return (
    <nav className="MobileNavigation">
      {openMenu && (
        <div className='bglinksp'>
        <div
          className={`linkbg ${openMenu ? 'menu-open' : ''} ${
            animateOnce ? 'animate-once' : ''
          }`}
        >
          <motion.span
          initial={animationFrom}
          animate={animateTo}
          transition={{ delay: 0.5 }}></motion.span>
          <motion.span
          initial={animationFrom}
          animate={animateTo}
          transition={{ delay: 0.15 }}></motion.span>
          <motion.span
          initial={animationFrom}
          animate={animateTo}
          transition={{ delay: 0.25 }}></motion.span>
          <motion.span
          initial={animationFrom}
          animate={animateTo}
          transition={{ delay: 0.35 }}></motion.span>
        </div>
        </div>
      )}
      {openMenu ? hamburgerCloseIcon : hamburgerIcon}
      {openMenu && (
        <Navlinks
          isMobile={true}
          closeMobileMenu={closeMobileMenu}
          animateClickHandler={animateClickHandler}
        />
      )}
    </nav>
  );
};

export default MobileNavigation;










// import { useState } from "react";
// import NavLinks from "./Navlinks";
// import "./Navbar.css";
// import { CgMenuRight } from "react-icons/cg";
// import { AiOutlineClose } from "react-icons/ai";
// const MobileNavigation = () => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const menuToggleHandler = () => {
//     setOpenMenu(!openMenu);
//   };
//   const hamburgerCloseIcon = (
//     <AiOutlineClose className="Hamburger" size="40px" color="white" 
//     onClick={menuToggleHandler}/>
//   );
//   const hamburgerIcon = (
//     <CgMenuRight
//       className="Hamburger"
//       size="40px"
//       color="white"
//       onClick={menuToggleHandler}
//     />
//   );

//   const closeMobileMenu = () => setOpenMenu(false);
  

//   return <nav className="MobileNavigation">
//   {openMenu && <div className="linkbg">
//   <span></span>
//   <span></span>
//   <span></span>
//   <span></span>
//   </div>}
//     {openMenu ? hamburgerCloseIcon : hamburgerIcon}
//     {openMenu && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
      
//         </nav>;
// };

// export default MobileNavigation;
