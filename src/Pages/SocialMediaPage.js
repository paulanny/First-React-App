import './Mockup.css'
import './SocialMedia.css'
import '../Components/SecondProj.css'
import NavBar from '../Components/NavBar'
import SocialMedia from '../Assets/SocialMedia.png'
import sm1 from '../Assets/SocialMedia/1.jpg'
import sm2 from '../Assets/SocialMedia/10.png'
import sm3 from '../Assets/SocialMedia/12.jpg'
import sm4 from '../Assets/SocialMedia/15.png'
import sm5 from '../Assets/SocialMedia/2.png'
import sm6 from '../Assets/SocialMedia/20.png'
import sm7 from '../Assets/SocialMedia/3.png'
import sm8 from '../Assets/SocialMedia/4 (2).png'
import sm9 from '../Assets/SocialMedia/5.png'
import sm10 from '../Assets/SocialMedia/8.png'
import BackdropPattern from '../Components/BackdropPattern'

const SocialMediaPage = () => {
  return (
    <div>
      <NavBar />

      <div class="projndpics3">
        <div class="abtproj3">
          <p data-aos="fade-up" class="bigp">
            Social Media Designs
          </p>
          <p data-aos="fade-up" class="projstory">
            As a social media designer, I create visually engaging content that
            helps brands connect with their audience across digital platforms. I
            design graphics for posts, stories and any other social media use
            cases with brand aesthetics and resonate with target audiences. This
            section features some of my social media design projects,
            highlighting my ability to balance eye-catching visuals with
            consistent brand messaging to drive engagement and build a strong
            online presence.
          </p>
        </div>
        <div class="projectimg3">
          <img src={SocialMedia} alt="project1" />
        </div>
      </div>

      <section class="otherdes">
        <div data-aos="fade-up" class="desslides">
          <div class="desdiv">
            <img class="kaapitdes" src={sm1} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={sm3} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={sm5} alt="psychowiz designs" />
          </div>
          <div class="desdiv">
            <img class="kaapitdes" src={sm7} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={sm9} alt="psychowiz designs" />
          </div>
        </div>

        <div data-aos="fade-up" class="desslides1">
          <div class="desdiv">
            <img class="kaapitdes" src={sm2} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={sm4} alt="psychowiz designs" />
          </div>
          <div class="desdiv">
            <img class="kaapitdes" src={sm6} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={sm8} alt="psychowiz designs" />
          </div>
          <div class="desdiv">
            <img class="kaapitdes" src={sm10} alt="psychowiz designs" />
          </div>
        </div>
      </section>

      <p data-aos="fade-up" class="selecteddesp">
        End of Selected Social Media Designs
      </p>
      <BackdropPattern />
    </div>
  )
}

export default SocialMediaPage
