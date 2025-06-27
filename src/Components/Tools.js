import './Tools.css'
import CanvaImg from '../Assets/canva-icon.png'
import CorelDrawImg from '../Assets/corel-draw-icon.png'
import FigmaImg from '../Assets/figma.png'
import PhotoshopImg from '../Assets/photoshop.png'
import AdobeIllustrator from '../Assets/ai.png'
import Pixellab from '../Assets/pixellab.png'
import Picsart from '../Assets/picsart.png'
// import circleTools from './circletools'

const Tools = () => {
  return (
    <div className="toolspane">
      <div className="toolsp">
        <p data-aos="fade-up" className="firsttoolp">
          With over four years of experience as a creative brand and graphic
          designer, I bring more than just aesthetics to the table. I approach
          every project with a blend of design expertise, human understanding,
          and psychological insight to craft solutions that truly resonate. My
          style is clean, compelling, and strategically tailored to each brief.
          I work seamlessly across tools like CorelDRAW, Picsart, Pixellab,
          Canva, Figma, and Adobe Creative Suite, ensuring each concept is
          executed with clarity, quality, and impactful storytelling.
        </p>
        <p data-aos="fade-up" className="sectoolp">
          Beyond delivering strong design work, I am dedicated to staying ahead
          of industry trends and evolving technologies. I believe in lifelong
          learning and continually refining my craft, always seeking new
          challenges that push my creativity and expand my perspective as a
          designer.
        </p>
      </div>

      <div data-aos="fade-up" className="linethrough"></div>

      <div data-aos="fade-up" className="toolsimages">
        <div className="toolicons">
          <img src={PhotoshopImg} alt="pslogo" />
          <p className="iconname">Adobe Photoshop</p>
        </div>
        <div className="toolicons">
          <img src={AdobeIllustrator} alt="pslogo" />
          <p className="iconname">Adobe Illustrator</p>
        </div>
        <div className="toolicons">
          <img src={CorelDrawImg} alt="pslogo" />
          <p className="iconname">Corel Draw</p>
        </div>
        <div className="toolicons">
          <img src={CanvaImg} alt="pslogo" />
          <p className="iconname">Canva</p>
        </div>
        <div className="toolicons">
          <img src={FigmaImg} alt="pslogo" />
          <p className="iconname">Figma</p>
        </div>
        <div className="toolicons">
          <img src={Pixellab} alt="pslogo" />
          <p className="iconname">Pixellab</p>
        </div>
        <div className="toolicons">
          <img src={Picsart} alt="pslogo" />
          <p className="iconname">Picsart</p>
        </div>
      </div>
      {/* <circleTools /> */}
    </div>
  )
}

export default Tools
