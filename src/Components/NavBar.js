// import { useState } from 'react';
// import LogoImage from '../Assets/myLogo.png';
// import './Header.css';
// import { CgMenuRight } from 'react-icons/cg';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import './Navbar.css';

const NavBar = () => {
// const [openMenu, setOpenMenu] = useState(false);

// const menuToggleHandler = () => {
// setOpenMenu(!openMenu);
// console.log('You Clicked me!');
// }

return (
    // // <div>
    // // <header>
    //         {/* <nav className="navbar"> */}
    //             {/* <div className="logo" id="logo">
    //                 <img className="logoimg" src={LogoImage} alt="My-Logo"/>
    //             </div> */}
                <div className='NavBar'>
                <Navigation />
                <MobileNavigation />
                </div>
        //             {/* <CgMenuRight className='Hamburger' size='40px' color='white'
        //             onClick={menuToggleHandler}/>
        //             <AiOutlineClose className='Hamburger-close' size='40px' color='white'/>
        //     </nav> */}
        // {/* {openMenu && <MobileMenu />} */}
        // // </header>
        // // </div>
        );
}

export default NavBar;