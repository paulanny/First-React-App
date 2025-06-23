import './Mockup.css'
import './SocialMedia.css'
import '../Components/SecondProj.css'
import NavBar from '../Components/NavBar'
import SocialMedia from '../Assets/SocialMedia.png'
import BackdropPattern from '../Components/BackdropPattern'
import Galleryview from '../Components/Galleryview'
import { photosLanding } from '../Components/SocialmediaImages'

const SocialMediaPage = () => {
  return (
    <div>
      <NavBar />

      {/* Hero Section */}
      <div className="projndpics3">
        <div className="abtproj3">
          <p data-aos="fade-up" className="bigp">
            Social Media Designs
          </p>
          <p data-aos="fade-up" className="projstory">
            As a social media designer, I create visually engaging content that
            helps brands connect with their audience across digital platforms. I
            design graphics for posts, stories, and any other social media use
            cases with brand aesthetics that resonate with target audiences.
            This section features some of my social media design projects,
            highlighting my ability to balance eye-catching visuals with
            consistent brand messaging to drive engagement and build a strong
            online presence.
          </p>
        </div>
        <div className="projectimg3">
          <img src={SocialMedia} alt="project hero" />
        </div>
      </div>

      <Galleryview photos={photosLanding} />

      <p data-aos="fade-up" className="selecteddesp">
        End of Selected Social Media Designs
      </p>

      <BackdropPattern />
    </div>
  )
}

export default SocialMediaPage
