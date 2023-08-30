import Typewriter from './Typewriter';
import MyHeroImg from '../Assets/myimage.png';
import arrowImg from '../Assets/arrow.png';
import './Hero.css';

const Hero = () => {

    return (
        <section class="bannersection" id="about">
            <div class="deetndimg">
                <div class="selfdetails">
                    <p class="bigintro">
                    <span className="paull"> Hi, I am  
                    </span> 
                        <Typewriter text="Paul" delay={100} infinite/>    
                    </p>
                    <p class="detailsp"> A passionate and creative <strong>GRAPHIC DESIGNER</strong> with
                         over 2 years of experience in the industry. With a strong background in 
                         branding, logo creation, digital design, or illustration, I have a proven 
                         track record of creating impactful designs that engage and captivate audiences.
                         I strive to understand the client's goals and needs and tailor my designs accordingly.</p>

                    <div class="learnimg">
                        <p class="learningp">Learn more
                            <a class="abouta"> about me </a>
                             or jump straight to
                            <a class="abouta"> my work</a>
                        </p>
                        <img src={arrowImg} alt="jumparrow"/>
                    </div>
                </div>
                <div class="headimg">
                    <img src={MyHeroImg} alt="bannersection"/>
                </div>
            </div>
        </section>
    )
};

export default Hero;