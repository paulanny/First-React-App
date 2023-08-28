import LogoImage from '../Assets/myLogo.png';
import './Header.css';

const Header = () => {
return (
    <div>
    <header>
            <nav className="navbar">
                <div className="logo" id="logo">
                    <img className="logoimg" src={LogoImage} alt="My-Logo"/>
                </div>
                <div>
                    <ul className="navbarul">
                        <li className="navbara">
                            <a href="#about">
                                About</a>
                            <a href="#projects">
                                Projects</a>
                            <a href="#tools">
                               Design Tools</a>
                            <a href="#contact">
                                Contact</a>

                                <a>
                                    Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        </div>
        );
}

export default Header;