// Thebrand.jsx
import '../Components/The.css'
import { Link } from 'react-router-dom'
import shotArrow from '../Assets/shotarrow.png'
import NavBar from '../Components/NavBar'
import BrandMedia from '../Assets/Brands/Adedola/adedola header.png'
import bd3 from '../Assets/Brands/Adedola/adedolaabt.png'
import bd5 from '../Assets/Brands/Adedola/adedolagoal.png'
import bd0 from '../Assets/Brands/Adedola/adedolamock1.png'
import bd00 from '../Assets/Brands/Adedola/adedolamock2.png'
import bd000 from '../Assets/Brands/Adedola/adedolamock3.png'
import bd12 from '../Assets/Brands/Adedola/adedolamock4.png'
import bd13 from '../Assets/Brands/Adedola/adedolamock5.png'
import bd14 from '../Assets/Brands/Adedola/adedolamock6.png'
import bd15 from '../Assets/Brands/Adedola/adedolamock7.png'
import bd17 from '../Assets/Brands/Adedola/adedolamock8.png'
import bd16 from '../Assets/Brands/Adedola/adedolamock9.png'
import bd20 from '../Assets/Brands/Adedola/adedolamocks.png'
import bd18 from '../Assets/Brands/Adedola/adedolarat.png'
import BackdropPattern from '../Components/BackdropPattern'
import CarouselAuto from '../Components/CarouselAuto'
import { adedolaCarouselData } from '../Components/AdedolaCarousel'
import SelectedProjsTexts from '../Components/SelectedProjsTexts'
import ProjectCard from '../Components/projectcard'
import paduaThumb from '../Assets/Brands/thumbnails/paduathumb.png'
import tiesmartThumb from '../Assets/Brands/thumbnails/tiesmartthumb.png'
import weoutsideThumb from '../Assets/Brands/thumbnails/weoutsidethumb.png'

const Adedola = () => {
  return (
    <div className="brandcase">
      <NavBar />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-img">
          <img src={BrandMedia} alt="Hero Mockup" />
        </div>
        <div className="hero-text">
          <h1>Adedola Consulting</h1>
          <p>Consultancy Firm • Branding Identity</p>
        </div>
      </section>
      {/* About Section */}
      <section className="brand-about" data-aos="fade-up">
        <div>
          <h2>About the Brand</h2>
          <p>
            Adedola Consulting is a dynamic strategy and design consultancy that
            empowers businesses to scale through intentional branding and
            optimized social presence. With a focus on creative direction,
            social media impact, and business identity systems, the firm
            supports startups and growing ventures in crafting a professional,
            cohesive, and competitive brand image. As part of the design team, I
            contributed to building a visual direction that reflects Adedola
            Consulting’s core strengths—clarity, creativity, and
            conversion-focused strategy.
          </p>
        </div>
        <img src={bd000} alt="About Brand Visual" />
      </section>

      <section className="brand-about" data-aos="fade-up">
        <div>
          <h2>Project Goal</h2>
          <p>
            To develop a modern, professional, and strategy-aligned brand
            identity that communicates expertise, builds trust, and positions
            Adedola Consulting as a go-to partner for business growth, social
            media optimization, and brand clarity across digital platforms.
          </p>
        </div>
        <img src={bd0} alt="About Brand Visual" />
      </section>

      <section className="brand-about" data-aos="fade-up">
        <div>
          <h2>Logo Rationale</h2>
          <p>
            The Adedola Consulting logo features a chess pawn icon paired with
            modern, minimalist typography. The use of the pawn, often overlooked
            in the game of chess yet vital for strategic advancement, reflects
            the brand’s core philosophy: guiding businesses from foundational
            moves to winning strategies. It symbolizes strategic growth,
            intentional progression, and the importance of foresight in
            business. The choice of a clean, geometric typeface complements the
            icon with a tone of professionalism and clarity, reinforcing the
            brand’s focus on structure, media precision, and brand elevation.
            The minimal layout ensures versatility across digital and print
            platforms, while the black-on-neutral palette underscores authority,
            dependability, and elegance. Together, the elements establish
            Adedola Consulting as a brand strategy partner that equips
            businesses to move smart, win big, and stay visible in competitive
            markets
          </p>
        </div>
        <img src={bd00} alt="About Brand Visual" />
      </section>

      {/* Visual Showcase */}
      <section className="design-gallery">
        {[bd12, bd13, bd14, bd3, bd18, bd15, bd20, bd17, bd16].map((img, i) => (
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
      <CarouselAuto cardDetails={adedolaCarouselData} />

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

export default Adedola
