// Thebrand.jsx
import '../Components/The.css'
import { Link } from 'react-router-dom'
import BrandLightbox from '../Components/BrandLightbox'
import shotArrow from '../Assets/shotarrow.png'
import NavBar from '../Components/NavBar'
import BrandMedia from '../Assets/Brands/Tiesmart/tiesmartheader.png'
import bd1 from '../Assets/Brands/Tiesmart/tiesmartmocks.png'
import bd2 from '../Assets/Brands/Tiesmart/tiesmartmock1.png'
import bd3 from '../Assets/Brands/Tiesmart/tiesmartmock10.png'
import bd4 from '../Assets/Brands/Tiesmart/tiesmartmock2.png'
import bd5 from '../Assets/Brands/Tiesmart/tiesmartgoal.png'
import bd6 from '../Assets/Brands/Tiesmart/tiesmartabt.png'
import bd7 from '../Assets/Brands/Tiesmart/tiesmartmock3.png'
import bd8 from '../Assets/Brands/Tiesmart/tiesmartmock4.png'
import bd9 from '../Assets/Brands/Tiesmart/tiesmartmock5.png'
import bd10 from '../Assets/Brands/Tiesmart/tiesmartmock6.png'
import bd11 from '../Assets/Brands/Tiesmart/tiesmartmock7.png'
import bd12 from '../Assets/Brands/Tiesmart/tiesmartmock8.png'
import bd13 from '../Assets/Brands/Tiesmart/tiesmartmock9.png'
import bd14 from '../Assets/Brands/Tiesmart/tiesmartrat.png'
import BackdropPattern from '../Components/BackdropPattern'
import CarouselAuto from '../Components/CarouselAuto'
import { tiesmartCarouselData } from '../Components/TiesmartCarousel'
import SelectedProjsTexts from '../Components/SelectedProjsTexts'
import ProjectCard from '../Components/projectcard'
import paduaThumb from '../Assets/Brands/thumbnails/paduathumb.png'
import abekeThumb from '../Assets/Brands/Abeke/cravingsthumb.png'
import weoutsideThumb from '../Assets/Brands/thumbnails/weoutsidethumb.png'

const Tiesmart = () => {
  return (
    <div className="brandcase">
      <NavBar />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-img">
          <img src={BrandMedia} alt="Hero Mockup" />
        </div>
        <div className="hero-text">
          <h1>Tiesmart</h1>
          <p>E-Commerce • Branding Identity</p>
        </div>
      </section>
      {/* About Section */}
      <section className="brand-about" data-aos="fade-up">
        <div>
          <h2>About the Brand</h2>
          <p>
            Tiesmart is a dynamic student-centered e-commerce brand designed to
            simplify access to everyday essentials for students. Developed
            during my internship with ACME, the brand aims to offer convenience,
            affordability, and smart shopping experiences tailored specifically
            for academic environments. As a creative contributor on the project,
            I supported the development of a bold and modern visual identity
            that resonates with young audiences and reflects Tiesmart’s
            commitment to practical solutions, digital innovation, and student
            empowerment.
          </p>
        </div>
        <img src={bd6} alt="About Brand Visual" />
      </section>

      <section className="brand-about" data-aos="fade-up">
        <div>
          <h2>Project Goal</h2>
          <p>
            To develop a bold, student-centric visual identity that enhances
            Tiesmart’s appeal, improves brand visibility among campus
            communities, and reinforces its mission of making everyday shopping
            smarter, faster, and more accessible for students.
          </p>
        </div>
        <img src={bd5} alt="About Brand Visual" />
      </section>

      <section className="brand-about" data-aos="fade-up">
        <div>
          <h2>Logo Rationale</h2>
          <p>
            The Tiesmart logo is a modern interpretation of the infinity symbol,
            representing sustainability, seamless experience, and long-term
            value. Its continuous flow signifies the brand’s commitment to
            reliability and convenience in student commerce. The smooth curves
            emphasize simplicity, adaptability, and innovation—key traits of a
            digital-first brand. This emblem was crafted to be instantly
            recognizable, versatile across platforms, and aligned with the
            smart, youthful energy of its core audience.
          </p>
        </div>
        <img src={bd14} alt="About Brand Visual" />
      </section>

      {/* Visual Showcase */}
      {/* <section className="design-gallery">
        {[bd1, bd2, bd4, bd3, bd7, bd8, bd9, bd10, bd11, bd12, bd13].map(
          (img, i) => (
            <div className="design-image" key={i}>
              <img src={img} alt={`Design ${i + 1}`} />
            </div>
          )
        )}
      </section> */}

      <section className="design-gallery-section">
        <h2 className="gallery-title">Brand Visuals</h2>
        <BrandLightbox
          images={[bd1, bd2, bd4, bd3, bd7, bd8, bd9, bd10, bd11, bd12, bd13]}
        />
      </section>

      <SelectedProjsTexts
        id="projects"
        title="Some More Designs"
        description="Tiesmart"
      />
      <CarouselAuto cardDetails={tiesmartCarouselData} />

      {/* Other Projects Preview */}
      <section className="other-projects">
        <h3>Explore More Projects</h3>
        <div className="project-grid">
          <ProjectCard
            to="/paduapage"
            image={paduaThumb}
            title="Padua"
            description="Mental Health • Brand Identity"
          />
          <ProjectCard
            to="/abekepage"
            image={abekeThumb}
            title="Abeke's Cravings"
            description="Pastries • Full Branding"
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

export default Tiesmart
