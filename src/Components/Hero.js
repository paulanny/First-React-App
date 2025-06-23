// import { useEffect } from 'react'
import 'aos/dist/aos.css'
// import Typewriter from './Typewriter'
import MyHeroImg from '../Assets/HeroImage.png'
import arrowImg from '../Assets/arrow.png'
import ResumePdf from '../Assets/CreativeDesigner.pdf'
import './Hero.css'

const Hero = () => {
  return (
    <section class="bannersection" id="about">
      <div class="deetndimg">
        <div class="selfdetails">
          <div className="headerp"></div>
          <p data-aos="fade-up" class="bigintro">
            Animashaun <br /> Paul
          </p>
          <p data-aos="fade-up" class="detailsp">
            {' '}
            Hey there! Welcome to Paul Anny’s Design Portfolio, your gateway to
            exploring my creative journey and design expertise. From branding to
            bold visuals, this space showcases the passion and precision behind
            every project. I am confident I am the right fit for your next
            creative endeavor. Scroll through and see why.
          </p>
          <div class="learnimg">
            <p data-aos="fade-up" class="learningp">
              Learn more
              <a
                href={ResumePdf}
                target="_blank"
                rel="noreferrer"
                class="abouta"
              >
                {' '}
                about me{' '}
              </a>
              or jump straight to
              <a href="#projects" class="abouta">
                {' '}
                my work
              </a>
            </p>
            <div>
              <img src={arrowImg} alt="jumparrow" />
            </div>
          </div>
        </div>
        <div data-aos="fade-up" class="headimg">
          <img src={MyHeroImg} alt="bannersection" />
        </div>
      </div>
    </section>
  )
}

export default Hero
