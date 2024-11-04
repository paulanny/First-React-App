import './Mockup.css'
import '../Components/SecondProj.css'
import NavBar from '../Components/NavBar'
import BrandMedia from '../Assets/brand.png'
import bd1 from '../Assets/Branding Images/Brand 1.png'
import bd2 from '../Assets/Branding Images/Brand 2.png'
import bd3 from '../Assets/Branding Images/Brand 3.png'
import bd4 from '../Assets/Branding Images/Brand 4.png'
import bd5 from '../Assets/Branding Images/Brand 5.png'
import bd6 from '../Assets/Branding Images/Brand 6.png'
import bd7 from '../Assets/Branding Images/Brand 7.png'
import bd8 from '../Assets/Branding Images/Brand 8.png'
import bd9 from '../Assets/Branding Images/Brand 9.png'
import bd10 from '../Assets/Branding Images/Brand 10.png'
import BackdropPattern from '../Components/BackdropPattern'

const SocialMediaPage = () => {
  return (
    <div>
      <NavBar />

      <div class="projndpics3">
        <div class="abtproj3">
          <p data-aos="fade-up" class="bigp">
            Branding
          </p>
          <p data-aos="fade-up" class="projstory">
            As a brand designer, I specialize in creating visual identities that
            communicate a brand’s story and values. With experience working on
            diverse branding projects, I design essential elements such as
            logos, social media assets, promotional materials, and cohesive
            style guides to bring brands to life across platforms. This section
            showcases some of my brand design work, where each project
            demonstrates a commitment to unique, impactful, and visually
            consistent branding.
          </p>
        </div>
        <div class="projectimg3">
          <img src={BrandMedia} alt="project1" />
        </div>
      </div>

      <section class="otherdes">
        <div data-aos="fade-up" class="desslides">
          <div class="desdiv">
            <img class="kaapitdes" src={bd1} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={bd3} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={bd5} alt="psychowiz designs" />
          </div>
          <div class="desdiv">
            <img class="kaapitdes" src={bd7} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={bd9} alt="psychowiz designs" />
          </div>
        </div>

        <div data-aos="fade-up" class="desslides1">
          <div class="desdiv">
            <img class="kaapitdes" src={bd2} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={bd4} alt="psychowiz designs" />
          </div>
          <div class="desdiv">
            <img class="kaapitdes" src={bd6} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={bd8} alt="psychowiz designs" />
          </div>
          <div class="desdiv">
            <img class="kaapitdes" src={bd10} alt="psychowiz designs" />
          </div>
        </div>
      </section>

      <p data-aos="fade-up" class="selecteddesp">
        End of Selected Branding
      </p>
      <BackdropPattern />
    </div>
  )
}

export default SocialMediaPage
