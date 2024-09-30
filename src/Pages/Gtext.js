import './Mockup.css'
import '../Components/SecondProj.css'
import NavBar from '../Components/NavBar'
import Gtextimg from '../Assets/gtext.png'
import g1 from '../Assets/gtext1.jpeg'
import g2 from '../Assets/gtext2.png'
import g3 from '../Assets/gtext3.png'
import g4 from '../Assets/gtext4.png'
import g5 from '../Assets/gtext5.png'
import BackdropPattern from '../Components/BackdropPattern'

const Gtext = () => {
  return (
    <div>
      <NavBar />

      <div class="projndpics3">
        <div class="abtproj3">
          <p data-aos="fade-up" class="bigp">
            GTEXT
          </p>
          <p data-aos="fade-up" class="projstory">
            I worked as part of the graphic design team at GText, a real estate
            brand, where I created social media flyers, thumbnails, promo
            designs, and ensured consistency of branding elements across all
            promotional materials.
          </p>
        </div>
        <div class="projectimg3">
          <img src={Gtextimg} alt="project1" />
        </div>
      </div>

      <section class="otherdes">
        <div data-aos="fade-up" class="desslides">
          <div class="desdiv">
            <img class="kaapitdes" src={g1} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={g3} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={g4} alt="psychowiz designs" />
          </div>
        </div>

        <div data-aos="fade-up" class="desslides1">
          <div class="desdiv">
            <img class="kaapitdes" src={g2} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={g5} alt="psychowiz designs" />
          </div>
        </div>
      </section>

      <p data-aos="fade-up" class="selecteddesp">
        End of Selected Gtext Designs
      </p>
      <BackdropPattern />
    </div>
  )
}

export default Gtext
