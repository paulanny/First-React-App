import './toolsnew.css'
import CanvaImg from '../Assets/canva-icon.png'
import CorelDrawImg from '../Assets/corel-draw-icon.png'
import FigmaImg from '../Assets/figma.png'
import PhotoshopImg from '../Assets/photoshop.png'
import AdobeIllustrator from '../Assets/ai.png'

const circleTools = () => {
  const icons = [
    { src: PhotoshopImg, name: 'Adobe Photoshop' },
    { src: AdobeIllustrator, name: 'Adobe Illustrator' },
    { src: CorelDrawImg, name: 'Corel Draw' },
    { src: CanvaImg, name: 'Canva' },
    { src: FigmaImg, name: 'Figma' },
  ]

  return (
    <div className="toolspane">
      <h2 className="toolstitle">Design Tools I Use</h2>
      <div className="circle-container">
        <div className="rotating-circle">
          {icons.map((icon, idx) => (
            <div className="circle-item" key={idx}>
              <img src={icon.src} alt={icon.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default circleTools
