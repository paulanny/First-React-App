import React from 'react'
import './Hero.css'
import HeroImage from '../Assets/theanny.png'
import ArcBackground from '../Assets/perspective.png'

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="arc-background-wrapper">
        <img
          src={ArcBackground}
          alt="Arc Background"
          className="arc-background"
        />
        <div className="arc-glow"></div>
      </div>

      <div className="herotextimage">
        <div className="hero-texti">
          <h1>The Creative Designer Your Brand Needs!</h1>
          <p className="description">
            Welcome to <strong>The Psychology Designer</strong> portfolio, where
            design goes beyond creativity and aesthetics to truly understand
            your brand, your brief, and your audience. Explore our beautiful
            archive and be wowed!
          </p>
          <a href="#projects" className="cta-button">
            Explore My Work
          </a>
        </div>

        <div className="hero-image-container">
          <img src={HeroImage} alt="Paul Anny" className="hero-image" />
          {/* <div className="fade-bottom"></div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero
