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
          <p className="coloredabout">About me</p>
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
          Hi, I am Paul Anny, a passionate and creative{' '}
          <strong>GRAPHIC DESIGNER</strong> with over 4 years of experience in
          the industry. With a strong background in branding, logo creation,
          digital design, or illustration, I have a proven track record of
          creating impactful designs that engage and captivate audiences. I
          strive to understand the client's goals and needs and tailor my
          designs accordingly.
        </p>
      </div>
    </div>
  )
}

export default Aboutme
