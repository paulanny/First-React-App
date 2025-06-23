import './Tools.css'
import CanvaImg from '../Assets/canva-icon.png'
import CorelDrawImg from '../Assets/corel-draw-icon.png'
import FigmaImg from '../Assets/figma.png'
import PhotoshopImg from '../Assets/photoshop.png'
import AdobeIllustrator from '../Assets/ai.png'
import Pixellab from '../Assets/pixellab.png'
import Picsart from '../Assets/picsart.png'

const Tools = () => {
  return (
    <div className="toolspane">
      <div className="toolsp">
        <p data-aos="fade-up" className="firsttoolp">
          With over four years of experience in graphic design, I have worked on
          a wide range of projects that reflect both versatility and precision.
          My approach is rooted in crafting clean, compelling, and distinctive
          designs that are both functional and visually appealing. I combine
          creativity with technical skill, utilizing tools such as CorelDRAW,
          Picsart, Pixellab, Canva, and Figma to bring each concept to life with
          clarity and impact. My proficiency also extends to the Adobe Creative
          Suite, including Illustrator and Photoshop, ensuring every design
          meets professional standards with high-resolution quality and
          attention to detail.
        </p>
        <p data-aos="fade-up" className="sectoolp">
          In addition to my design work, I am committed to staying up-to-date
          with the latest design trends and technologies. I am always eager to
          learn and improve my skills and seek out new challenges to push my
          boundaries as a designer.
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
    </div>
  )
}

export default Tools
