import ResumePdf from '../Assets/Animashaun Paul Resume.pdf';

const NavLinks = (props) => {
    

    const closeMenu = () => {props.isMobile && props.closeMobileMenu()}
    return (
                    <ul>
                        <li onClick={closeMenu}>
                            <a href="#about">
                                About</a>
                        </li>
                        <li onClick={closeMenu}>
                            <a href="#projects">
                                Projects</a>
                        </li>
                        <li onClick={closeMenu}>
                            <a href="#tools">
                               Design Tools</a>
                        </li>
                        <li onClick={closeMenu}>
                            <a href="#contact">
                                Contact</a>
                        </li>
                        <li onClick={closeMenu}>
                                <a href={ResumePdf} target="_blank"
                    rel="noreferrer">
                                
                            Resume</a>
                        </li>
                    </ul>
    
    )
}

export default NavLinks;