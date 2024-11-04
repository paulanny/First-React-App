import './Mockup.css'
import '../Components/SecondProj.css'
import NavBar from '../Components/NavBar'
import Mockupimg from '../Assets/mockupdesigns.png'
import Mockone from '../Assets/Mockups/Mockup2.png'
import Mocktwo from '../Assets/Mockups/Mockup3.png'
import Mockthree from '../Assets/Mockups/Mockup4.png'
import Mockfour from '../Assets/Mockups/Mockup5.png'
import Mockfive from '../Assets/Mockups/Mockup6.png'
import Mocksix from '../Assets/Mockups/Mockup1.png'
import Mockseven from '../Assets/Mockups/Mockup7.png'
import Mockeight from '../Assets/Mockups/Mockup8.png'
import Mocknine from '../Assets/Mockups/Mockup9.png'
import Mockten from '../Assets/Mockups/Mockup10.png'
import BackdropPattern from '../Components/BackdropPattern'
const Mockup = () => {
  return (
    <div>
      <NavBar />
      <div class="projndpics3">
        <div class="abtproj3">
          <p class="bigp">Mockup Designs</p>
          <p data-aos="fade-up" class="projstory">
            In mockup design, I bring concepts to life by creating realistic
            previews of branding, product, and packaging designs. Mockups are
            essential for visualizing how designs will look in real-world
            settings, whether on products, print materials, or digital screens.
            This section showcases some of my mockup work, illustrating how I
            use lifelike visuals to present design concepts, helping clients
            envision their brand’s full potential before production.
          </p>
        </div>
        <div class="projectimg3">
          <img src={Mockupimg} alt="project1" />
        </div>
      </div>

      <section class="otherdes">
        <div data-aos="fade-up" class="desslides">
          <div class="desdiv">
            <img class="kaapitdes" src={Mockone} alt="mockup designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={Mockthree} alt="mockup designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={Mockfive} alt="mockup designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={Mockseven} alt="mockup designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={Mocknine} alt="mockup designs" />
          </div>
        </div>

        <div data-aos="fade-up" class="desslides1">
          <div class="desdiv">
            <img class="kaapitdes" src={Mocktwo} alt="mockup designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={Mockfour} alt="mockup designs" />
          </div>
          <div class="desdiv">
            <img class="kaapitdes" src={Mocksix} alt="mockup designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={Mockeight} alt="mockup designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={Mockten} alt="mockup designs" />
          </div>
        </div>
      </section>

      <p data-aos="fade-up" class="selecteddesp">
        End of Selected Mockups Designs
      </p>
      <BackdropPattern />
    </div>
  )
}

export default Mockup
