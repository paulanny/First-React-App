import './Mockup.css'
import '../Components/SecondProj.css'
import NavBar from '../Components/NavBar'
import Tiesmartimg from '../Assets/Tiesmart.png'
import tie1 from '../Assets/Tiesmart1.png'
import tie2 from '../Assets/ties1.png'
import tie3 from '../Assets/ties2.jpg'
import tie4 from '../Assets/ties3.jpg'
import tie5 from '../Assets/ties4.jpg'
import BackdropPattern from '../Components/BackdropPattern'

const Tiesmart = () => {
  return (
    <div>
      <NavBar />

      <div class="projndpics3">
        <div class="abtproj3">
          <p data-aos="fade-up" class="bigp">
            TIESMART
          </p>
          <p data-aos="fade-up" class="projstory">
            As part of the branding team for Tiesmart, I contributed to the
            development of key visual elements, including a logo featuring the
            infinity symbol to represent connection and continuity. I also
            worked on various other deliverables, such as social media graphics,
            promotional materials, and ensuring consistency across all branding
            assets and platforms.
          </p>
        </div>
        <div class="projectimg3">
          <img src={Tiesmartimg} alt="project1" />
        </div>
      </div>

      <section class="otherdes">
        <div data-aos="fade-up" class="desslides">
          <div class="desdiv">
            <img class="kaapitdes" src={tie1} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={tie3} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={tie5} alt="psychowiz designs" />
          </div>
        </div>

        <div data-aos="fade-up" class="desslides1">
          <div class="desdiv">
            <img class="kaapitdes" src={tie2} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={tie4} alt="psychowiz designs" />
          </div>
        </div>
      </section>

      <p data-aos="fade-up" class="selecteddesp">
        End of Selected Tiesmart Designs
      </p>
      <BackdropPattern />
    </div>
  )
}

export default Tiesmart
