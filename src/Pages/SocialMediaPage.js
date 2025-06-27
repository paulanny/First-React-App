import './SocialMedia.css'
import NavBar from '../Components/NavBar'
import SocialMedia from '../Assets/SocialMedia.png'
import BackdropPattern from '../Components/BackdropPattern'
import Galleryview from '../Components/Galleryview'
import { photosLanding } from '../Components/SocialmediaImages'

const SocialMediaPage = () => {
  return (
    <div>
      <NavBar />

      <div className="page-container">
        {/* Hero Section */}
        <div className="projndpics3" data-aos="fade-up">
          <div className="abtproj3">
            <p className="bigp">Social Media Designs</p>
            <p className="projstory">
              As a social media designer, I create visually engaging content
              that helps brands connect with their audience across digital
              platforms. These designs balance eye-catching visuals with
              consistent brand messaging to drive engagement and build a strong
              online presence.
            </p>
          </div>
          <div className="projectimg3">
            <img src={SocialMedia} alt="project hero" />
          </div>
        </div>

        {/* Gallery Section */}
        <div className="gallery-wrapper" data-aos="fade-up">
          <Galleryview photos={photosLanding} />
        </div>

        <p className="selecteddesp">End of Selected Social Media Designs</p>
      </div>

      <BackdropPattern />
    </div>
  )
}

export default SocialMediaPage
