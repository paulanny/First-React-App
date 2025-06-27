// Thebrand.jsx
import '../Components/The.css'
import { Link } from 'react-router-dom'
import BrandLightbox from '../Components/BrandLightbox'
import shotArrow from '../Assets/shotarrow.png'
import NavBar from '../Components/NavBar'
import BrandMedia from '../Assets/Brands/Weoutside/wehead.png'
import bd3 from '../Assets/Brands/Weoutside/wemock1.png'
import bd5 from '../Assets/Brands/Weoutside/wemock10.png'
import bd0 from '../Assets/Brands/Weoutside/10.jpg'
import bd00 from '../Assets/Brands/Weoutside/4.jpg'
import bd000 from '../Assets/Brands/Weoutside/8.jpg'
import bd12 from '../Assets/Brands/Weoutside/wemock11.png'
import bd13 from '../Assets/Brands/Weoutside/wemock12.png'
import bd14 from '../Assets/Brands/Weoutside/wemock13.png'
import bd15 from '../Assets/Brands/Weoutside/wemock14.png'
import bd17 from '../Assets/Brands/Weoutside/wemock2.png'
import bd16 from '../Assets/Brands/Weoutside/wemock3.png'
import bd20 from '../Assets/Brands/Weoutside/wemock4.png'
import bd18 from '../Assets/Brands/Weoutside/wemock5.png'
import bd19 from '../Assets/Brands/Weoutside/wemock6.png'
import bd21 from '../Assets/Brands/Weoutside/wemock7.png'
import bd22 from '../Assets/Brands/Weoutside/wemock8.png'
import bd23 from '../Assets/Brands/Weoutside/wemock9.png'
import BackdropPattern from '../Components/BackdropPattern'
import CarouselAuto from '../Components/CarouselAuto'
import { weoutsideCarouselData } from '../Components/WeoutsideCarousel'
import SelectedProjsTexts from '../Components/SelectedProjsTexts'
import ProjectCard from '../Components/projectcard'
import theThumb from '../Assets/Brands/thumbnails/hillemissariesthumb.png'
import abekeThumb from '../Assets/Brands/Abeke/cravingsthumb.png'
import ramblingsThumb from '../Assets/Brands/thumbnails/ramblingsthumb.png'

const Weoutside = () => {
  return (
    <div className="brandcase">
      <NavBar />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-img">
          <img src={BrandMedia} alt="Hero Mockup" />
        </div>
        <div className="hero-text">
          <h1>WeOutside</h1>
          <p>Entertainment Adventure • Branding Identity</p>
        </div>
      </section>
      {/* About Section */}
      <section className="brand-about" data-aos="fade-up">
        <div>
          <h2>About the Brand</h2>
          <p>
            WeOutside is an adventure and lifestyle brand that inspires
            individuals to explore the world around them. From curated outing
            ideas to nature-based experiences, the brand encourages spontaneous
            getaways and intentional adventures. As the brand designer, I
            crafted a visual identity that captures the spirit of freedom,
            exploration, and connection with the outdoors—embodying both the
            energy of discovery and the calm of nature. The direction was
            developed to appeal to a young, dynamic audience seeking memorable
            moments beyond the ordinary.
          </p>
        </div>
        <img src={bd000} alt="About Brand Visual" />
      </section>

      <section className="brand-about" data-aos="fade-up">
        <div>
          <h2>Project Goal</h2>
          <p>
            o create a bold and nature-inspired brand identity that evokes
            adventure, curiosity, and spontaneity. The goal is to strengthen
            WeOutside’s presence as the go-to platform for outing ideas and
            outdoor inspiration while resonating with explorers and experience
            seekers.
          </p>
        </div>
        <img src={bd0} alt="About Brand Visual" />
      </section>

      <section className="brand-about" data-aos="fade-up">
        <div>
          <h2>Logo Rationale</h2>
          <p>
            The WeOutside logo combines clean typography with an abstract
            outdoor-inspired emblem that captures the spirit of exploration and
            connection with nature. The icon’s upward flow and organic curves
            symbolize freedom, movement, and limitless adventure. Its circular
            motif subtly evokes a compass or rising sun, representing direction,
            spontaneity, and new experiences. The simplicity of the design
            ensures versatility across platforms, while the modern styling
            reinforces WeOutside’s role as a contemporary guide for outdoor
            enthusiasts.
          </p>
        </div>
        <img src={bd00} alt="About Brand Visual" />
      </section>

      {/* Visual Showcase */}
      {/* <section className="design-gallery">
        {[
          bd18,
          bd12,
          bd13,
          bd14,
          bd3,

          bd15,
          bd19,
          bd20,
          bd21,
          bd22,
          bd23,
          bd17,
          bd16,
          bd5,
        ].map((img, i) => (
          <div className="design-image" key={i}>
            <img src={img} alt={`Design ${i + 1}`} />
          </div>
        ))}
      </section> */}

      <section className="design-gallery-section">
        <h2 className="gallery-title">Brand Visuals</h2>
        <BrandLightbox
          images={[
            bd18,
            bd12,
            bd13,
            bd14,
            bd3,

            bd15,
            bd19,
            bd20,
            bd21,
            bd22,
            bd23,
            bd17,
            bd16,
            bd5,
          ]}
        />
      </section>

      <SelectedProjsTexts
        id="projects"
        title="Some More Designs"
        description="Weoutside"
      />
      <CarouselAuto cardDetails={weoutsideCarouselData} />

      {/* Other Projects Preview */}
      <section className="other-projects">
        <h3>Explore More Projects</h3>
        <div className="project-grid">
          <ProjectCard
            to="/thebrandpage"
            image={theThumb}
            title="The Hill Emissaries"
            description="Educational • Brand Identity"
          />
          <ProjectCard
            to="/abekepage"
            image={abekeThumb}
            title="Abeke's Cravings"
            description="Pastries • Full Branding"
          />
          <ProjectCard
            to="/ramblingspage"
            image={ramblingsThumb}
            title="Ramblings"
            description="Podcast • Logo & Visuals"
          />
        </div>
        {/* <Link to="/projects" className="view-all-btn">
          View All Projects
        </Link> */}
        <div class="view-all-btn">
          <Link to="/" class="viewall">
            <button class="viewallbtnc">
              <p class="viewallp">View all Projects</p>
              <div class="shotarrow">
                <img src={shotArrow} alt="arrow" />
                <img src={shotArrow} alt="arrow" />
              </div>
            </button>
          </Link>
        </div>{' '}
      </section>
      <BackdropPattern />
    </div>
  )
}

export default Weoutside
