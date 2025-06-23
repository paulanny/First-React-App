// Thebrand.jsx
import '../Components/The.css'
import { Link } from 'react-router-dom'
import shotArrow from '../Assets/shotarrow.png'
import NavBar from '../Components/NavBar'
import BrandMedia from '../Assets/Brands/Padua/paduaheader.png'
import bd3 from '../Assets/Brands/Padua/padmocks.png'
import bd5 from '../Assets/Brands/Padua/pad1.png'
import bd6 from '../Assets/Brands/Padua/pad2.png'
import bd12 from '../Assets/Brands/Padua/pad3.png'
import bd13 from '../Assets/Brands/Padua/pad4.png'
import bd14 from '../Assets/Brands/Padua/pad5.png'
import bd15 from '../Assets/Brands/Padua/pad6.png'
import bd17 from '../Assets/Brands/Padua/pad7.png'
import padgoal from '../Assets/Brands/Padua/paddes1.png'
import abtpadua from '../Assets/Brands/Padua/aboutpad.png'
import bd16 from '../Assets/Brands/Padua/paddes2.png'
import BackdropPattern from '../Components/BackdropPattern'
import CarouselAuto from '../Components/CarouselAuto'
import { paduaCarouselData } from '../Components/PaduaCarousel'
import SelectedProjsTexts from '../Components/SelectedProjsTexts'
import ProjectCard from '../Components/projectcard'
import Thethumb from '../Assets/Brands/thumbnails/hillemissariesthumb.png'
import tiesmartThumb from '../Assets/Brands/thumbnails/tiesmartthumb.png'
import weoutsideThumb from '../Assets/Brands/thumbnails/weoutsidethumb.png'
// import Tiesmart from './Tiesmart'

const Padua = () => {
  return (
    <div className="brandcase">
      <NavBar />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-img">
          <img src={BrandMedia} alt="Hero Mockup" />
        </div>
        <div className="hero-text">
          <h1>Padua Clinical Services</h1>
          <p>Mental Health • Branding Identity</p>
        </div>
      </section>
      {/* About Section */}
      <section className="brand-about" data-aos="fade-up">
        <div>
          <h2>About the Brand</h2>
          <p>
            Padua Clinical Services is a mental wellness organization dedicated
            to promoting emotional health through professional therapy,
            counseling, and psychological services. Focused on increasing
            awareness and accessibility to mental health care, the brand needed
            a visual identity that communicates empathy, trust, and
            professionalism. As a psychology student at the time, I approached
            the project with a strong understanding of the sensitivity and depth
            required in this field. I designed a calm, approachable, and
            credible visual direction that reinforces the brand’s commitment to
            healing, support, and holistic psychological growth.
          </p>
        </div>
        <img src={abtpadua} alt="About Brand Visual" />
      </section>

      <section className="brand-about" data-aos="fade-up">
        <div>
          <h2>Project Goal</h2>
          <p>
            To develop a calm, trustworthy, and empathetic brand identity that
            effectively communicates Padua’s commitment to mental wellness,
            therapeutic support, and psychological healing—enhancing their
            professional image and creating a more welcoming presence for
            individuals seeking emotional and mental health services.
          </p>
        </div>
        <img src={padgoal} alt="About Brand Visual" />
      </section>

      <section className="brand-about" data-aos="fade-up">
        <div>
          <h2>Logo Rationale</h2>
          <p>
            The Padua Clinical Services logo features a stylized brain design
            rendered in flowing, organic lines. This visual metaphor highlights
            the organization’s focus on mental wellness, psychological support,
            and therapeutic clarity. The continuous pathways within the brain
            symbolize the complexity of the human mind while also suggesting the
            possibility of healing, growth, and structured support. The overall
            form balances simplicity with sophistication—reinforcing the brand's
            professionalism, accessibility, and dedication to guiding clients
            through their mental health journey. The earthy brown tone further
            grounds the identity, evoking warmth, safety, and trust.
          </p>
        </div>
        <img src={bd16} alt="About Brand Visual" />
      </section>

      {/* Visual Showcase */}
      <section className="design-gallery">
        {[bd3, bd13, bd14, bd12, bd15, bd6, bd17].map((img, i) => (
          <div className="design-image" key={i}>
            <img src={img} alt={`Design ${i + 1}`} />
          </div>
        ))}
      </section>

      <SelectedProjsTexts
        id="projects"
        title="Other Hill Emissaries Designs"
        description="SM Designs"
      />
      <CarouselAuto cardDetails={paduaCarouselData} />

      {/* Other Projects Preview */}
      <section className="other-projects">
        <h3>Explore More Projects</h3>
        <div className="project-grid">
          <ProjectCard
            to="/thebrandpage"
            image={Thethumb}
            title="The Hill Emissaries"
            description="Education • Brand Identity"
          />
          <ProjectCard
            to="/tiesmartpage"
            image={tiesmartThumb}
            title="Tiesmart"
            description="E-commerce • Full Branding"
          />
          <ProjectCard
            to="/weoutsidepage"
            image={weoutsideThumb}
            title="WeOutside"
            description="Entertainment • Logo & Visuals"
          />
        </div>

        {/* <Link to="/projects" className="view-all-btn">
          View All Projects
        </Link> */}
        <div class="view-all-btn">
          <a href="mailto:paulanimashaun20@gmail.com" class="viewall">
            <button class="viewallbtnc">
              <p class="viewallp">View all Projects</p>
              <div class="shotarrow">
                <img src={shotArrow} alt="arrow" />
                <img src={shotArrow} alt="arrow" />
              </div>
            </button>
          </a>
        </div>
      </section>
      <BackdropPattern />
    </div>
  )
}

export default Padua
