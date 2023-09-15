import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Typewriter from './Typewriter';
import MyHeroImg from '../Assets/myimagesmall.png';
import arrowImg from '../Assets/arrow.png';
import ResumePdf from '../Assets/Animashaun Paul Resume.pdf';
import './Hero.css';

const Hero = () => {
  return (
    <section class="bannersection" id="about">
      <div class="deetndimg">
        <div class="selfdetails">
          <p data-aos="fade-up" class="bigintro">
            <span className="paull">Hi, I am</span>
            <Typewriter text=" Paul" delay={300} infinite />
          </p>
          <p data-aos="fade-up" class="detailsp">
            {' '}
            A passionate and creative <strong>GRAPHIC DESIGNER</strong> with
            over 2 years of experience in the industry. With a strong background
            in branding, logo creation, digital design, or illustration, I have
            a proven track record of creating impactful designs that engage and
            captivate audiences. I strive to understand the client's goals and
            needs and tailor my designs accordingly.
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
    </section>
  );
};

export default Hero;
