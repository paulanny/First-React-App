import "./Tools.css";
import CanvaImg from "../Assets/canva-icon.png";
import CorelDrawImg from "../Assets/corel-draw-icon.png";
import FigmaImg from "../Assets/figma.png";
import PhotoshopImg from "../Assets/photoshop.png";

const Tools = () => {
  return (
    <div className="toolspane" id="tools">
      <div className="toolsp">
        <p className="firsttoolp">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          officia veniam iusto cumque placeat facilis sunt aperiam commodi quas
          consequuntur vel ducimus, quae, suscipit, dolorem corporis ipsum ad
          quia totam!
        </p>
        <p className="sectoolp">
          In addition to my design work, I am committed to staying up-to-date
          with the latest design trends and technologies. I am always eager to
          learn and improve my skills and seek out new challenges to push my
          boundaries as a designer.
        </p>
      </div>

      <div className="linethrough"></div>

      <div className="toolsimages">
        <div className="toolicons">
          <img src={CanvaImg} alt="pslogo" />
          <p className="iconname">CANVA</p>
        </div>
        <div className="toolicons">
          <img src={CorelDrawImg} alt="pslogo" />
          <p className="iconname">COREL DRAW</p>
        </div>
        <div className="toolicons">
          <img src={FigmaImg} alt="pslogo" />
          <p className="iconname">FIGMA</p>
        </div>
        <div className="toolicons">
          <img src={PhotoshopImg} alt="pslogo" />
          <p className="iconname">PHOTOSHOP</p>
        </div>
      </div>
    </div>
  );
};

export default Tools;
