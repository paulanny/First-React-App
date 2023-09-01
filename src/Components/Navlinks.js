import { motion } from "framer-motion";
import ResumePdf from "../Assets/Animashaun Paul Resume.pdf";

const NavLinks = (props) => {
  const animationFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  const closeMenu = () => {
    props.isMobile && props.closeMobileMenu();
  };
  return (
    <div>
      {/* <div className="linkbg">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
      <div className='Navlinksa'>
      <motion.a
        href="#about"
        initial={animationFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={closeMenu}
      >
        About
        <span></span>
      </motion.a>

      <motion.a
        href="#projects"
        initial={animationFrom}
        animate={animateTo}
        transition={{ delay: 0.15 }}
        onClick={closeMenu}
      >
        Projects
        <span></span>
      </motion.a>

      <motion.a
        href="#tools"
        initial={animationFrom}
        animate={animateTo}
        onClick={closeMenu}
      >
        Design Tools
        <span></span>
      </motion.a>

      <motion.a
        href="#contact"
        initial={animationFrom}
        animate={animateTo}
        transition={{ delay: 0.25 }}
        onClick={closeMenu}
      >
        Contact
        <span></span>
      </motion.a>
      


      <motion.a
        href={ResumePdf}
        target="_blank"
        initial={animationFrom}
        animate={animateTo}
        transition={{ delay: 0.35 }}
        onClick={closeMenu}
        rel="noreferrer"
      >
       
        Resume
        <span></span>
      </motion.a>
      </div>
     </div>
  );
};

export default NavLinks;
