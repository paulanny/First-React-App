import './Mockup.css'
import '../Components/SecondProj.css'
import NavBar from '../Components/NavBar'
import PrintMedia from '../Assets/Print Design.png'
import BackdropPattern from '../Components/BackdropPattern'
import Galleryview from '../Components/Galleryview'
import { printPhotos } from '../Components/Printimages'

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

      <Galleryview photos={printPhotos} />

      <p data-aos="fade-up" class="selecteddesp">
        End of Selected Print Media Designs
      </p>
      <BackdropPattern />
    </div>
  )
}

export default PrintDesigns
