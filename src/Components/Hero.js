import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Typewriter from './Typewriter';
import MyHeroImg from '../Assets/myimage.png';
import arrowImg from '../Assets/arrow.png';
import './Hero.css';



const Hero = () => {
    useEffect(()=> {
        Aos.init({duration:1000,
            easing: 'ease',
            delay:0, });
}, [])
    return (
        <section class="bannersection" id="about">
            <div class="deetndimg">
                <div class="selfdetails">
                    <p data-aos="fade-up" class="bigintro">
                    <span className="paull">Hi, I am     
                    </span> 
                         <Typewriter text= " Paul" delay={300} infinite/>    
                    </p>
                    <p data-aos="fade-up" class="detailsp"> A passionate and creative <strong>GRAPHIC DESIGNER</strong> with
                         over 2 years of experience in the industry. With a strong background in 
                         branding, logo creation, digital design, or illustration, I have a proven 
                         track record of creating impactful designs that engage and captivate audiences.
                         I strive to understand the client's goals and needs and tailor my designs accordingly.</p>

                    <div class="learnimg">
                        <p data-aos="fade-up" class="learningp">Learn more
                            <a class="abouta"> about me </a>
                             or jump straight to
                            <a class="abouta"> my work</a>
                        </p>
                        <img src={arrowImg} alt="jumparrow"/>
                    </div>
                </div>
                <div data-aos="fade-up" class="headimg">
                    <img src={MyHeroImg} alt="bannersection"/>
                </div>
            </div>
        </section>
    )
};

export default Hero;