import { useEffect } from 'react'
import 'aos/dist/aos.css'
import Typewriter from './Typewriter'
import MyHeroImg from '../Assets/myimagesmall.jpg'
import arrowImg from '../Assets/arrow.png'
import ResumePdf from '../Assets/Animashaun Paul Resume.pdf'
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
            Hey, Welcome to Paul Anny's Design Portfolio where you get to know
            more about me and my design journey. I am definitely the best fit
            for your next project, scroll through to strengthen your conviction!
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
            <img src={arrowImg} alt="jumparrow" />
          </div>
        </div>
        <div data-aos="fade-up" class="headimg">
          <img src={MyHeroImg} alt="bannersection" />
        </div>
      </div>
      {/* <p data-aos="fade-up" class="detailsp">
        {' '}
        A passionate and creative <strong>GRAPHIC DESIGNER</strong> with over 4
        years of experience in the industry. With a strong background in
        branding, logo creation, digital design, or illustration, I have a
        proven track record of creating impactful designs that engage and
        captivate audiences. I strive to understand the client's goals and needs
        and tailor my designs accordingly.
      </p> */}
    </section>
  )
}

export default Hero
