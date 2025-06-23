import { Link } from 'react-router-dom'
import './Projects.css'
import btnArrow from '../Assets/shotarrow.png'
import SocialMedia from '../Assets/SocialMedia.png'
// import Brand from '../Assets/brand.png'
import Printdesign from '../Assets/Print Design.png'
// import Mockup from '../Assets/mockupdesigns.png'
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

      {/* <div class="projndpics">
        <div class="abtproj">
          <p data-aos="fade-up" class="bigp">
            Brand Designs
          </p>
          <p data-aos="fade-up" class="projstory">
            As a brand designer, I specialize in creating visual identities that
            communicate a brand’s story and values. With experience working on
            diverse branding projects, I design essential elements such as
            logos, social media assets, promotional...
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
      </div> */}

      {/* <div class="projndpics">
        <div class="abtproj">
          <p data-aos="fade-up" class="bigp">
            Mockup Designs
          </p>
          <p data-aos="fade-up" class="projstory">
            In mockup design, I bring concepts to life by creating realistic
            previews of branding, product, and packaging designs. Mockups are
            essential for visualizing how designs will look in real-world
            settings, whether on products, print materials, or digital...
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
      </div> */}

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
