import "./Tools.css";
import CanvaImg from "../Assets/canva-icon.png";
import CorelDrawImg from "../Assets/corel-draw-icon.png";
import FigmaImg from "../Assets/figma.png";
import PhotoshopImg from "../Assets/photoshop.png";
import AdobeIllustrator from "../Assets/ai.png";
import Pixellab from "../Assets/pixellab.png";
import Picsart from "../Assets/picsart.png";

const Tools = () => {
  return (
    <div className="toolspane">
      <div className="toolsp">
        <p data-aos="fade-up" className="firsttoolp">
          In my 2+ years of graphic design, I've undertaken diverse projects,
          meticulously crafting templates with a keen eye for detail. Leveraging
          my background in the field, I prioritize creating simple,
          attractive and unique designs. I seamlessly integrate design tools like 
          CorelDRAW, Picsart, Pixellab, Photoshop, Canva, and Figma to bring my creative vision to life, 
          ensuring a top-notch, high-resolution output.
          Additionally, I possess expertise in Adobe Creative Suite, encompassing Illustrator and photoshop.
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
          <p className="iconname">ADOBE PHOTOSHOP</p>
        </div>
        <div className="toolicons">
          <img src={AdobeIllustrator} alt="pslogo" />
          <p className="iconname">ADOBE ILLUSTRATOR</p>
        </div>
        <div className="toolicons">
          <img src={CorelDrawImg} alt="pslogo" />
          <p className="iconname">COREL DRAW</p>
        </div>
        <div className="toolicons">
          <img src={CanvaImg} alt="pslogo" />
          <p className="iconname">CANVA</p>
        </div>
        <div className="toolicons">
          <img src={FigmaImg} alt="pslogo" />
          <p className="iconname">FIGMA</p>
        </div>
        <div className="toolicons">
          <img src={Pixellab} alt="pslogo" />
          <p className="iconname">PIXELLAB</p>
        </div>
        <div className="toolicons">
          <img src={Picsart} alt="pslogo" />
          <p className="iconname">PICSART</p>
        </div>
      </div>
    </div>
  );
};

export default Tools;
