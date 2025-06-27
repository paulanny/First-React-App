// Thebrand.jsx
import '../Components/The.css'
import { Link } from 'react-router-dom'
import shotArrow from '../Assets/shotarrow.png'
import BrandLightbox from '../Components/BrandLightbox'
import NavBar from '../Components/NavBar'
import header from '../Assets/Brands/HillEmissaries/hill header.png'
import BrandMedia from '../Assets/Brands/HillEmissaries/material1.png'
import bd3 from '../Assets/Brands/HillEmissaries/hillmocks2.png'
import bd5 from '../Assets/Brands/HillEmissaries/logorat.jpg'
import bd6 from '../Assets/Brands/HillEmissaries/hill6.png'
import bd12 from '../Assets/Brands/HillEmissaries/hillmocks.png'
import bd13 from '../Assets/Brands/HillEmissaries/hillmocks1.png'
import bd14 from '../Assets/Brands/HillEmissaries/hillmocks3.png'
import bd15 from '../Assets/Brands/HillEmissaries/hillmocks4.png'
import bd17 from '../Assets/Brands/HillEmissaries/material 5.png'
import bd16 from '../Assets/Brands/HillEmissaries/hillpattern.png'
import BackdropPattern from '../Components/BackdropPattern'
import CarouselAuto from '../Components/CarouselAuto'
import { hillEmissariesCarouselData } from '../Components/HillemissariesCarousel'
import SelectedProjsTexts from '../Components/SelectedProjsTexts'
import ProjectCard from '../Components/projectcard'
import adedolaThumb from '../Assets/Brands/thumbnails/adedolathumb.png'
import tiesmartThumb from '../Assets/Brands/thumbnails/tiesmartthumb.png'
import ramblingsThumb from '../Assets/Brands/thumbnails/ramblingsthumb.png'

const Thebrand = () => {
  return (
    <div className="brandcase">
      <NavBar />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-img">
          <img src={header} alt="Hero Mockup" />
        </div>
        <div className="hero-text">
          <h1>The Hill Emissaries</h1>
          <p>Education Industry • Branding Identity</p>
        </div>
      </section>
      {/* About Section */}
      <section className="brand-about" data-aos="fade-up">
        <div>
          <h2>About the Brand</h2>
          <p>
            The Hill Emissaries is a faith-driven NGO with a passion for shaping
            the future through education, scholarships, and empowerment
            initiatives. Committed to nurturing the potential of young minds,
            the organization stands as a pillar of hope and opportunity in
            underserved communities. In developing their brand identity, I
            focused on visually articulating their mission of growth, integrity,
            and faith-based impact. From logo to brand touchpoints, every
            element was designed to reflect trust, vision, and the
            transformative power of education and spiritual purpose.
          </p>
        </div>
        <img src={bd16} alt="About Brand Visual" />
      </section>

      <section className="brand-about" data-aos="fade-up">
        <div>
          <h2>Project Goal</h2>
          <p>
            To create a unique, modern, and education-aligned brand identity
            that strengthens the organization’s image and improves recognition
            among students and stakeholders.
          </p>
        </div>
        <img src={bd6} alt="About Brand Visual" />
      </section>

      <section className="brand-about" data-aos="fade-up">
        <div>
          <h2>Logo Rationale</h2>
          <p>
            The logo design integrates symbolic elements that align with the
            organization's mission of education, empowerment, and spiritual
            growth. At its core is a hill representing aspiration and elevation,
            featuring a carved path that signifies the journey of learning,
            mentorship, and purpose. A star positioned at the top serves as the
            guiding light and destination, symbolizing excellence, hope, and
            divine direction. The use of negative space to form the pathway
            reinforces the idea of clarity and intentionality, while the overall
            form remains clean, timeless, and adaptable for various
            applications.
          </p>
        </div>
        <img src={bd5} alt="About Brand Visual" />
      </section>

      {/* Visual Showcase */}
      {/* <section className="design-gallery">
        {[bd12, bd13, bd14, bd3, bd15, BrandMedia, bd17].map((img, i) => (
          <div className="design-image" key={i}>
            <img src={img} alt={`Design ${i + 1}`} />
          </div>
        ))}
      </section> */}

      <section className="design-gallery-section">
        <h2 className="gallery-title">Brand Visuals</h2>
        <BrandLightbox
          images={[bd12, bd13, bd14, bd3, bd15, BrandMedia, bd17]}
        />
      </section>

      <SelectedProjsTexts
        id="projects"
        title="Some More Hill Emissaries Designs"
        description="Emissaries"
      />
      <CarouselAuto cardDetails={hillEmissariesCarouselData} />
      {/* <section className="client-feedback" data-aos="fade-up">
        <h3>Client Feedback</h3>
        <img src={bd5} alt="Client Headshot" />
        <p>
          "Working with Paul was a seamless process. The visuals truly captured
          our essence and mission. We’re proud of our new brand presence!"
        </p>
      </section> */}
      {/* Other Projects Preview */}
      <section className="other-projects">
        <h3>Explore More Projects</h3>
        <div className="project-grid">
          <ProjectCard
            to="/adedolapage"
            image={adedolaThumb}
            title="Adedola Consulting"
            description="Consultancy • Brand Identity"
          />
          <ProjectCard
            to="/tiesmartpage"
            image={tiesmartThumb}
            title="Tiesmart"
            description="E-commerce • Full Branding"
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

export default Thebrand
