import './Mockup.css'
import '../Components/SecondProj.css'
import NavBar from '../Components/NavBar'
import PrintMedia from '../Assets/Print Design.png'
import pd1 from '../Assets/PrintDesigns/print1.png'
import pd2 from '../Assets/PrintDesigns/print2.png'
import pd3 from '../Assets/PrintDesigns/print3.png'
import pd4 from '../Assets/PrintDesigns/print4.png'
import pd5 from '../Assets/PrintDesigns/print5.png'
import pd6 from '../Assets/PrintDesigns/print6.png'
import pd7 from '../Assets/PrintDesigns/print7.png'
import pd8 from '../Assets/PrintDesigns/print8.png'
import pd9 from '../Assets/PrintDesigns/print9.png'
import pd10 from '../Assets/PrintDesigns/print10.png'
import BackdropPattern from '../Components/BackdropPattern'

const PrintDesigns = () => {
  return (
    <div>
      <NavBar />

      <div class="projndpics3">
        <div class="abtproj3">
          <p data-aos="fade-up" class="bigp">
            Print Media Designs
          </p>
          <p data-aos="fade-up" class="projstory">
            As a print designer, I focus on crafting tangible visuals that make
            a lasting impact. My print design work spans projects like
            brochures, posters, business cards, and packaging—each tailored to
            convey a brand’s message with clarity and style. This section
            showcases a variety of print designs, highlighting my attention to
            detail, use of typography, and skill in creating layouts that are
            both visually appealing and functional in physical formats.
          </p>
        </div>
        <div class="projectimg3">
          <img src={PrintMedia} alt="project1" />
        </div>
      </div>

      <section class="otherdes">
        <div data-aos="fade-up" class="desslides">
          <div class="desdiv">
            <img class="kaapitdes" src={pd1} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={pd3} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={pd5} alt="psychowiz designs" />
          </div>
          <div class="desdiv">
            <img class="kaapitdes" src={pd7} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={pd9} alt="psychowiz designs" />
          </div>
        </div>

        <div data-aos="fade-up" class="desslides1">
          <div class="desdiv">
            <img class="kaapitdes" src={pd2} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={pd4} alt="psychowiz designs" />
          </div>
          <div class="desdiv">
            <img class="kaapitdes" src={pd6} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={pd8} alt="psychowiz designs" />
          </div>
          <div class="desdiv">
            <img class="kaapitdes" src={pd10} alt="psychowiz designs" />
          </div>
        </div>
      </section>

      <p data-aos="fade-up" class="selecteddesp">
        End of Selected Print Media Designs
      </p>
      <BackdropPattern />
    </div>
  )
}

export default PrintDesigns
