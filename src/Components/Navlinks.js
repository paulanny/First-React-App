import { motion } from 'framer-motion'
import ResumePdf from '../Assets/Animashaun Paul Resume.pdf';

const NavLinks = (props) => {
    const animationFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}

    const closeMenu = () => {props.isMobile && props.closeMobileMenu()}
    return (
                    <ul>
                        <motion.li
                        initial={animationFrom} 
                        animate={animateTo}
                        transition={{delay:0.05}}
                        onClick={closeMenu}>
                            <a href="#about">
                                About
                                <span></span></a>
                        </motion.li>
                        <motion.li 
                        initial={animationFrom} 
                        animate={animateTo}
                        transition={{delay:0.15}}
                        onClick={closeMenu}>
                            <a href="#projects">
                                Projects
                                <span></span></a>
                        </motion.li>
                        <motion.li 
                        initial={animationFrom} 
                        animate={animateTo}
                        onClick={closeMenu}>
                            <a href="#tools">
                               Design Tools
                               <span></span></a>
                        </motion.li>
                        <motion.li 
                        initial={animationFrom} 
                        animate={animateTo}
                        transition={{delay:0.25}}
                        onClick={closeMenu}>
                            <a href="#contact">
                                Contact
                                <span></span></a>
                        </motion.li>
                        
                        <motion.li 
                        initial={animationFrom} 
                        animate={animateTo}
                        transition={{delay:0.35}}
                        onClick={closeMenu}>
                        
                                <a href={ResumePdf} target="_blank"
                                
                    rel="noreferrer">
                                
                            Resume
                            <span></span></a>
                          
                        </motion.li>
                    </ul>
    
    )
}

export default NavLinks;