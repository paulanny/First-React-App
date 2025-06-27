import './Footer.css'
import Arrow from '../Assets/arroww.png'
import shotArrow from '../Assets/shotarrow.png'
import Github from '../Assets/github-mark-white.png'
import Instagram from '../Assets/instagram.png'
import LinkedIn from '../Assets/linkin.png'
import Twitter from '../Assets/twitter.png'
import Gmail from '../Assets/gmail.png'

const Footer = () => {
  return (
    <footer id="contact">
      <div class="letwork">
        <div class="letworkp">
          <p data-aos="fade-up" class="letworkbigp">
            Let's Build Something Together!
          </p>
          <p data-aos="fade-up" class="letworksmallp">
            Ready to embark on your next creative adventure or collaborate on a
            design project? I’d love to hear all about your vision. Let’s chat
            about how we can bring your ideas to life with thoughtful, effective
            design solutions. Feel free to reach out—The Psychology Designer is
            here for you.
          </p>
        </div>

        <div data-aos="fade-up" class="sendmessage">
          <div class="arrowimg">
            <img src={Arrow} alt="messageicon" />
          </div>

          <div class="viewbtnlg">
            <a href="mailto:paulanimashaun20@gmail.com" class="viewshotalg">
              <button class="viewshotabtnlg">
                <p class="viewshotplg">Send Message</p>
                <div class="shotarrow">
                  <img src={shotArrow} alt="arrow" />
                  <img src={shotArrow} alt="arrow" />
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" class="horizontaldiv"></div>

      <div data-aos="fade-up" class="tributendsocials">
        <div class="socials">
          <div class="divsoc">
            <a href="https://github.com/paulanny" class="soca">
              <img src={Github} alt="github" />
            </a>
          </div>

          <div class="divsoc">
            <a href="mailto:paulanimashaun20@gmail.com" class="soca">
              <img src={Gmail} alt="gmail" />
            </a>
          </div>

          <div class="divsoc">
            <a href="https://www.instagram.com/thepaulanny/" class="soca">
              <img src={Instagram} alt="instagram" />
            </a>
          </div>
          <div class="divsoc">
            <a href="https://www.linkedin.com/in/animashaun-paul/" class="soca">
              <img src={LinkedIn} alt="Linkedin" />
            </a>
          </div>
          <div class="divsoc">
            <a href="https://twitter.com/animashaun_paul" class="soca">
              <img src={Twitter} alt="twitter" />
            </a>
          </div>
        </div>
        <div class="referencep">
          <p class="ref">Inspired by Steph Crown</p>
          <p>Developed by Paul Anny</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
