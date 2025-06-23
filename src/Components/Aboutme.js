import 'aos/dist/aos.css'
import shotArrow from '../Assets/shotarrow.png'
import './Aboutme.css'
import SideImg from '../Assets/sideimg.png'
import ImageSide from '../Assets/imageside.png'
const Aboutme = () => {
  return (
    <div className="allaboutme">
      <div className="coloredsess">
        <div className="hiretext">
          {/* <p className="coloredabout">About me</p> */}
          <p className="catchphrase">
            I consistently deliver results that exceed expectations.
          </p>
          <div data-aos="fade-up">
            <div class="viewbtnlg">
              <a href="mailto:paulanimashaun20@gmail.com" class="viewshotalg">
                <button class="viewshotabtnlg">
                  <p class="viewshotplg">Hire Me!</p>
                  <div class="shotarrow">
                    <img src={shotArrow} alt="arrow" />
                    <img src={shotArrow} alt="arrow" />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="sideimg">
          <img src={ImageSide} alt="bannersection" />
        </div>
      </div>
      <div className="aboutmendimg">
        <div class="sideimg2">
          <img src={SideImg} alt="bannersection" />
        </div>
        <p data-aos="fade-up" class="aboutmep">
          Hi, I’m Paul Anny — a passionate and creative{' '}
          <strong>Graphic and Brand Designer</strong> with over 4 years of
          experience in the design industry. I specialize in crafting compelling
          visual identities through branding, logo creation, digital design, and
          illustration. With a strong foundation in brand strategy and visual
          storytelling, I’ve consistently delivered impactful designs that
          connect with audiences and elevate brands. I take pride in
          understanding each client’s unique goals and translating them into
          tailored, effective design solutions.
        </p>
      </div>
    </div>
  )
}

export default Aboutme
