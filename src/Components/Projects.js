import { Link } from 'react-router-dom'
import './Projects.css'
import btnArrow from '../Assets/shotarrow.png'
import SocialMedia from '../Assets/SocialMedia.png'
import Brand from '../Assets/brand.png'
import Printdesign from '../Assets/Print Design.png'
import Mockup from '../Assets/mockupdesigns.png'
import Ads from '../Assets/Ads.png'

const Projects = () => {
  return (
    <section class="allprojects">
      <div class="projndpics">
        <div class="abtproj">
          <p data-aos="fade-up" class="bigp">
            Social Media Designs
          </p>
          <p data-aos="fade-up" class="projstory">
            As a social media designer, I create visually engaging content that
            helps brands connect with their audience across digital platforms.
            My work includes designing graphics for posts, stories, and
            promotional campaigns, each crafted...
            {/* to
            align with brand aesthetics and resonate with target audiences. This
            section features some of my social media design projects,
            highlighting my ability to balance eye-catching visuals with
            consistent brand messaging to drive engagement and build a strong
            online presence. */}
          </p>

          <div data-aos="fade-up" class="viewbtn">
            <Link to="/socialmediapage" class="viewshota">
              <button class="viewshotabtn">
                <p class="viewshotp">View Designs</p>
                <div class="shotarrow">
                  <img src={btnArrow} alt="arrow" />
                  <img src={btnArrow} alt="arrow" />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div class="projectimg">
          <img src={SocialMedia} alt="project1" />
        </div>
      </div>

      <div class="projndpics">
        <div class="abtproj">
          <p data-aos="fade-up" class="bigp">
            Print Media Designs
          </p>
          <p data-aos="fade-up" class="projstory">
            As a print designer, I focus on crafting tangible visuals that make
            a lasting impact. My print design work spans projects like
            brochures, posters, business cards, and packaging—each tailored to
            convey a brand’s message with clarity and style...
            {/* showcases a variety of print designs, highlighting my attention to
            detail, use of typography, and skill in creating layouts that are
            both visually appealing and functional in physical formats. */}
          </p>
          <div data-aos="fade-up" class="viewbtn">
            <Link to="/printdesigns" class="viewshota">
              <button class="viewshotabtn">
                <p class="viewshotp">View Designs</p>
                <div class="shotarrow">
                  <img src={btnArrow} alt="arrow" />
                  <img src={btnArrow} alt="arrow" />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div class="projectimg">
          <img src={Printdesign} alt="project1" />
        </div>
      </div>

      <div class="projndpics">
        <div class="abtproj">
          <p data-aos="fade-up" class="bigp">
            Brand Designs
          </p>
          <p data-aos="fade-up" class="projstory">
            As a brand designer, I specialize in creating visual identities that
            communicate a brand’s story and values. With experience working on
            diverse branding projects, I design essential elements such as
            logos, social media assets, promotional...
            {/* cohesive
            style guides to bring brands to life across platforms. This section
            showcases some of my brand design work, where each project
            demonstrates a commitment to unique, impactful, and visually
            consistent branding. */}
          </p>

          <div data-aos="fade-up" class="viewbtn">
            <Link to="/branddesignspage" class="viewshota">
              <button class="viewshotabtn">
                <p class="viewshotp">View Designs</p>
                <div class="shotarrow">
                  <img src={btnArrow} alt="arrow" />
                  <img src={btnArrow} alt="arrow" />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div class="projectimg">
          <img src={Brand} alt="project1" />
        </div>
      </div>

      <div class="projndpics">
        <div class="abtproj">
          <p data-aos="fade-up" class="bigp">
            Mockup Designs
          </p>
          <p data-aos="fade-up" class="projstory">
            In mockup design, I bring concepts to life by creating realistic
            previews of branding, product, and packaging designs. Mockups are
            essential for visualizing how designs will look in real-world
            settings, whether on products, print materials, or digital...
            {/* screens.
            This section showcases some of my mockup work, illustrating how I
            use lifelike visuals to present design concepts, helping clients
            envision their brand’s full potential before production. */}
          </p>

          <div data-aos="fade-up" class="viewbtn">
            <Link to="/mockupdesigns" class="viewshota">
              <button class="viewshotabtn">
                <p class="viewshotp">View Designs</p>
                <div class="shotarrow">
                  <img src={btnArrow} alt="arrow" />
                  <img src={btnArrow} alt="arrow" />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div class="projectimg">
          <img src={Mockup} alt="project1" />
        </div>
      </div>

      <div class="projndpics">
        <div class="abtproj">
          <p data-aos="fade-up" class="bigp">
            Ads Design
          </p>
          <p data-aos="fade-up" class="projstory">
            In my work as an ads designer, I aim to create impactful visuals
            that leave a memorable impression. My design experience spans
            various advertising formats, such as brochures, posters, business
            cards, and packaging, each crafted to clearly ...
            {/* communicate a
            brand’s message with style. This portfolio section showcases my
            ability to blend eye-catching design with strategic messaging. I
            focus on detail, typography, and layout, ensuring each ad design is
            not only visually appealing but also functional, effectively
            reaching audiences through physical media. */}
          </p>

          <div data-aos="fade-up" class="viewbtn">
            <Link to="/adsdesigns" class="viewshota">
              <button class="viewshotabtn">
                <p class="viewshotp">View Designs</p>
                <div class="shotarrow">
                  <img src={btnArrow} alt="arrow" />
                  <img src={btnArrow} alt="arrow" />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div class="projectimg">
          <img src={Ads} alt="project1" />
        </div>
      </div>
    </section>
  )
}

export default Projects
