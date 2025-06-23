// Thebrand.jsx
import '../Components/The.css'
import { Link } from 'react-router-dom'
import shotArrow from '../Assets/shotarrow.png'
import NavBar from '../Components/NavBar'
import BrandMedia from '../Assets/Brands/Ramblings/ramblingsheader.png'
import bd3 from '../Assets/Brands/Ramblings/ram abt.png'
import bd1 from '../Assets/Brands/Ramblings/ram mock1.png'
import bd2 from '../Assets/Brands/Ramblings/ram mock2.png'
import bd4 from '../Assets/Brands/Ramblings/ram mock3.png'
import bd5 from '../Assets/Brands/Ramblings/ram mock4.png'
import bd6 from '../Assets/Brands/Ramblings/ram mock5.png'
import bd7 from '../Assets/Brands/Ramblings/ram mock6.png'
import bd8 from '../Assets/Brands/Ramblings/ram mock7.png'
import bd9 from '../Assets/Brands/Ramblings/ram mock8.png'
import BackdropPattern from '../Components/BackdropPattern'
import CarouselAuto from '../Components/CarouselAuto'
import { ramblingsCarouselData } from '../Components/RamblingsCarousel'
import SelectedProjsTexts from '../Components/SelectedProjsTexts'
import ProjectCard from '../Components/projectcard'
import paduaThumb from '../Assets/Brands/thumbnails/paduathumb.png'
import theThumb from '../Assets/Brands/thumbnails/hillemissariesthumb.png'
import adedolaThumb from '../Assets/Brands/thumbnails/adedolathumb.png'

const Ramblings = () => {
  return (
    <div className="brandcase">
      <NavBar />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-img">
          <img src={BrandMedia} alt="Hero Mockup" />
        </div>
        <div className="hero-text">
          <h1>Ramblings</h1>
          <p>A Podcast • Branding Identity</p>
        </div>
      </section>
      {/* About Section */}
      <section className="brand-about" data-aos="fade-up">
        <div>
          <h2>About the Brand</h2>
          <p>
            Ramblings is a podcast platform built around honest conversations,
            storytelling, and meaningful reflections on everyday life. As a
            creative audio space, it required a visual identity that feels
            personal, expressive, and inviting. My design approach focused on
            crafting a brand look that captures the essence of voice, rhythm,
            and thought—blending fluid visuals with a grounded tone to reflect
            the podcast’s authentic and engaging nature across all listening
            platforms.
          </p>
        </div>
        <img src={bd3} alt="About Brand Visual" />
      </section>

      <section className="brand-about" data-aos="fade-up">
        <div>
          <h2>Project Goal</h2>
          <p>
            To develop a visually compelling and emotionally resonant brand
            identity that amplifies the podcast’s voice, builds listener
            connection, and enhances recognition across audio platforms and
            social channels. The goal was to translate the tone of candid
            dialogue into a visual system that feels both relatable and
            memorable.
          </p>
        </div>
        <img src={bd6} alt="About Brand Visual" />
      </section>

      <section className="brand-about" data-aos="fade-up">
        <div>
          <h2>Logo Rationale</h2>
          <p>
            The Ramblings logo combines a microphone silhouette with the letter
            "R" cleverly integrated into the shape of a dialogue bubble. This
            fusion visually reinforces the essence of podcasting — spoken
            conversation, casual expression, and connection. The microphone
            signifies broadcasting and voice, while the bubble represents
            storytelling and informal talk. The choice of a rounded, playful
            font reflects the relaxed and relatable nature of the content, while
            the bold purple and yellow color scheme adds vibrancy and
            memorability. Overall, the logo captures the spirit of candid
            discussions in a modern, approachable form that resonates with a
            youthful, curious audience.
          </p>
        </div>
        <img src={bd5} alt="About Brand Visual" />
      </section>

      {/* Visual Showcase */}
      <section className="design-gallery">
        {[bd1, bd2, bd4, bd7, bd8, bd5, bd6, bd9].map((img, i) => (
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
      <CarouselAuto cardDetails={ramblingsCarouselData} />
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
            to="/paduapage"
            image={paduaThumb}
            title="Padua"
            description="Mental Health • Brand Identity"
          />
          <ProjectCard
            to="/adedolapage"
            image={adedolaThumb}
            title="Tiesmart"
            description="E-commerce • Full Branding"
          />
          <ProjectCard
            to="/thebrandpage"
            image={theThumb}
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

export default Ramblings
