import './Mockup.css'
import '../Components/SecondProj.css'
import NavBar from '../Components/NavBar'
import Ads from '../Assets/Ads.png'
import ad1 from '../Assets/ADS/ad1.png'
import ad2 from '../Assets/ADS/ad2.png'
import ad3 from '../Assets/ADS/ad3.png'
import ad4 from '../Assets/ADS/ad4.png'
import ad5 from '../Assets/ADS/ad5.png'
import ad6 from '../Assets/ADS/ad6.png'
import ad7 from '../Assets/ADS/ad7.png'
import ad8 from '../Assets/ADS/ad8.png'
import ad9 from '../Assets/ADS/ad9.png'
import ad10 from '../Assets/ADS/ad10.png'
import BackdropPattern from '../Components/BackdropPattern'

const AdsDesignPage = () => {
  return (
    <div>
      <NavBar />

      <div class="projndpics3">
        <div class="abtproj3">
          <p data-aos="fade-up" class="bigp">
            ADS Designs
          </p>
          <p data-aos="fade-up" class="projstory">
            Ads Design In my work as an ads designer, I aim to create impactful
            visuals that leave a memorable impression. My design experience
            spans various advertising formats, such as brochures, posters,
            business cards, and packaging, each crafted to clearly communicate a
            brand’s message with style. This portfolio section showcases my
            ability to blend eye-catching design with strategic messaging. I
            focus on detail, typography, and layout, ensuring each ad design is
            not only visually appealing but also functional, effectively
            reaching audiences through physical media.
          </p>
        </div>
        <div class="projectimg3">
          <img src={Ads} alt="project1" />
        </div>
      </div>

      <section class="otherdes">
        <div data-aos="fade-up" class="desslides">
          <div class="desdiv">
            <img class="kaapitdes" src={ad1} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={ad3} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={ad5} alt="psychowiz designs" />
          </div>
          <div class="desdiv">
            <img class="kaapitdes" src={ad7} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={ad9} alt="psychowiz designs" />
          </div>
        </div>

        <div data-aos="fade-up" class="desslides1">
          <div class="desdiv">
            <img class="kaapitdes" src={ad2} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={ad4} alt="psychowiz designs" />
          </div>
          <div class="desdiv">
            <img class="kaapitdes" src={ad6} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={ad8} alt="psychowiz designs" />
          </div>
          <div class="desdiv">
            <img class="kaapitdes" src={ad10} alt="psychowiz designs" />
          </div>
        </div>
      </section>

      <p data-aos="fade-up" class="selecteddesp">
        End of Selected Ads Design
      </p>
      <BackdropPattern />
    </div>
  )
}

export default AdsDesignPage
