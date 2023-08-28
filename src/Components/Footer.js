import "./Footer.css";
import Arrow from "../Assets/arroww.png";
import shotArrow from "../Assets/shotarrow.png";
import Github from "../Assets/github-mark-white.png";
import Instagram from "../Assets/instagram.png";
import LinkedIn from "../Assets/linkin.png";
import Twitter from "../Assets/twitter.png";
import Gmail from "../Assets/gmail.png";

const Footer = () => {
  return (
    <footer id="contact">
      <div class="letwork">
        <div class="letworkp">
          <p class="letworkbigp">LET'S BUILD SOMETHING TOGETHER</p>
          <p class="letworksmallp">
            Do you consider me a suitable pore partner for your next adventure?
            or you're interested in collaborating on a design project and
            learning more about my design services? please don't hesitate to
            reach out by taking a minute to tell me about your project, I'd be
            happy to chat with you! I am presently AVAILABLE for any jobs
            involving graphics.
          </p>
        </div>

        <div class="sendmessage">
          <div class="arrowimg">
            <img src={Arrow} alt="messageicon" />
          </div>

          <div class="viewbtnlg">
            <a href="#" class="viewshotalg">
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

      <div class="horizontaldiv"></div>

      <div class="tributendsocials">
        <div class="socials">
          <div class="divsoc">
            <a class="soca">
              <img src={Github} alt="twitter" />
            </a>
          </div>

          <div class="divsoc">
            <a class="soca">
              <img src={Gmail} alt="twitter" />
            </a>
          </div>

          <div class="divsoc">
            <a class="soca">
              {" "}
              <img src={Instagram} alt="twitter" />
            </a>
          </div>
          <div class="divsoc">
            <a class="soca">
              <img src={LinkedIn} alt="twitter" />
            </a>
          </div>
          <div class="divsoc">
            <a class="soca">
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
};

export default Footer;
