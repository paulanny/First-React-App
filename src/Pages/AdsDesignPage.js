import './Mockup.css'
import '../Components/SecondProj.css'
import NavBar from '../Components/NavBar'
import Ads from '../Assets/Ads.png'
import Galleryview from '../Components/Galleryview'
import { adPhotos } from '../Components/adsimages'
import BackdropPattern from '../Components/BackdropPattern'

const AdsDesignPage = () => {
  return (
    <div>
      <NavBar />

      <div class="projndpics3">
        <div class="abtproj3">
          <p data-aos="fade-up" class="bigp">
            Ads Designs
          </p>
          <p data-aos="fade-up" class="projstory">
            In my work as an ads designer, I aim to create impactful visuals
            that leave a memorable impression. My design experience spans
            various advertising formats, such as brochures, posters, business
            cards, and packaging, each crafted to clearly communicate a brand’s
            message with style. This portfolio section showcases my ability to
            blend eye-catching design with strategic messaging. I focus on
            detail, typography, and layout, ensuring each ad design is not only
            visually appealing but also functional, effectively reaching
            audiences through physical media.
          </p>
        </div>
        <div class="projectimg3">
          <img src={Ads} alt="project1" />
        </div>
      </div>
      <Galleryview photos={adPhotos} />
      <p data-aos="fade-up" class="selecteddesp">
        End of Selected Ads Design
      </p>
      <BackdropPattern />
    </div>
  )
}

export default AdsDesignPage
