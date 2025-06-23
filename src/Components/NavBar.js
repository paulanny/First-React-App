import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LogoImage from '../Assets/pdlogosvg.svg'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'
import './Navbar.css'
import shotArrow from '../Assets/shotarrow.png'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`NavBar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/">
        <img className="logoimg" src={LogoImage} alt="My-Logo" />
      </Link>
      <Navigation />
      <div data-aos="fade-up">
        <div class="viewbtnlgnav">
          <a href="mailto:paulanimashaun20@gmail.com" class="viewshotalg">
            <button class="viewshotabtnnavlg">
              <p class="viewshotplg">Hire Me!</p>
              <div class="shotarrow">
                <img src={shotArrow} alt="arrow" />
                <img src={shotArrow} alt="arrow" />
              </div>
            </button>
          </a>
        </div>
      </div>
      <MobileNavigation />
    </div>
  )
}

export default NavBar
