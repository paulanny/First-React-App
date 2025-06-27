// Thebrand.jsx
import '../Components/The.css'
import { Link } from 'react-router-dom'
import shotArrow from '../Assets/shotarrow.png'
import NavBar from '../Components/NavBar'
import BrandMedia from '../Assets/Brands/Abeke/abekehero.png'
import bd3 from '../Assets/Brands/Abeke/Amocks1.png'
import bd5 from '../Assets/Brands/Abeke/Amocks.png'
import bd0 from '../Assets/Brands/Abeke/Amocks2.png'
import bd00 from '../Assets/Brands/Abeke/Amocks3.png'
import bd000 from '../Assets/Brands/Abeke/Amocks4.png'
import bd12 from '../Assets/Brands/Abeke/Amocks5.png'
import bd13 from '../Assets/Brands/Abeke/Amocks6.png'
import bd14 from '../Assets/Brands/Abeke/Amocks7.png'
import bd15 from '../Assets/Brands/Abeke/Amocks8.png'
import bd17 from '../Assets/Brands/Abeke/Amocks9.png'
import bd16 from '../Assets/Brands/Abeke/Amocks10.png'
import bd20 from '../Assets/Brands/Abeke/abekeabt.png'
import bd18 from '../Assets/Brands/Abeke/abekelograt.png'
import bd19 from '../Assets/Brands/Abeke/abekelopat.png'
import BackdropPattern from '../Components/BackdropPattern'
import CarouselAuto from '../Components/CarouselAuto'
import { abekeCarouselData } from '../Components/AbekeCarousel'
import SelectedProjsTexts from '../Components/SelectedProjsTexts'
import ProjectCard from '../Components/projectcard'
import adedolaThumb from '../Assets/Brands/thumbnails/adedolathumb.png'
import paduaThumb from '../Assets/Brands/thumbnails/paduathumb.png'
import thebrandThumb from '../Assets/Brands/thumbnails/hillemissariesthumb.png'

const Abeke = () => {
  return (
    <div className="brandcase">
      <NavBar />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-img">
          <img src={BrandMedia} alt="Hero Mockup" />
        </div>
        <div className="hero-text">
          <h1>Abeke's Cravings</h1>
          <p>Food & Pastries • Branding Identity</p>
        </div>
      </section>
      {/* About Section */}
      <section className="brand-about" data-aos="fade-up">
        <div>
          <h2>About the Brand</h2>
          <p>
            Abeke’s Cravings is a premium pastry brand serving up handcrafted
            treats with a touch of elegance and warmth. As the designer, I
            created a soft, inviting brand identity that reflects its sweet
            essence — from the charming logo to the warm color palette —
            capturing the heart of indulgence in every detail
          </p>
        </div>
        <img src={bd20} alt="About Brand Visual" />
      </section>

      <section className="brand-about" data-aos="fade-up">
        <div>
          <h2>Project Goal</h2>
          <p>
            To craft a visually warm and appealing brand identity that captures
            the essence of Abeke’s Cravings as a passionate pastry brand. The
            goal was to reflect the homemade quality, creativity, and indulgent
            nature of its offerings while building a memorable presence across
            packaging and digital platforms.
          </p>
        </div>
        <img src={bd19} alt="About Brand Visual" />
      </section>

      <section className="brand-about" data-aos="fade-up">
        <div>
          <h2>Logo Rationale</h2>
          <p>
            The Abeke’s Cravings logo was crafted using a custom typeface
            designed to mimic an icy drip effect, capturing the indulgent and
            tempting nature of sweet cravings. The playful typography visually
            evokes the freshness and delight of pastries, while the cherry
            accent adds a final touch of flavor and personality. This
            distinctive style not only reflects the brand’s fun and inviting
            essence but also ensures strong recognition and emotional connection
            with dessert lovers.
          </p>
        </div>
        <img src={bd18} alt="About Brand Visual" />
      </section>

      {/* Visual Showcase */}
      <section className="design-gallery">
        {[bd5, bd3, bd0, bd00, bd000, bd12, bd13, bd14, bd15, bd17, bd16].map(
          (img, i) => (
            <div className="design-image" key={i}>
              <img src={img} alt={`Design ${i + 1}`} />
            </div>
          )
        )}
      </section>

      <SelectedProjsTexts
        id="projects"
        title="Some More Designs"
        description="Cravings"
      />
      <CarouselAuto cardDetails={abekeCarouselData} />

      {/* Other Projects Preview */}
      <section className="other-projects">
        <h3>Explore More Projects</h3>
        <div className="project-grid">
          <ProjectCard
            to="/adedolapage"
            image={adedolaThumb}
            title="Adedola Consulting"
            description="Consultancy • Brand Design"
          />
          <ProjectCard
            to="/thebrandpage"
            image={thebrandThumb}
            title="The Hill Emissaries"
            description="Education • Full Branding"
          />
          <ProjectCard
            to="/paduapage"
            image={paduaThumb}
            title="Padua"
            description="Mental Health • Brand Identity"
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

export default Abeke
