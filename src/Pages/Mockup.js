import React, { useState } from 'react'
import './Mockup.css'
import '../Components/SecondProj.css'
import NavBar from '../Components/NavBar'
import Mockupimg from '../Assets/mockupdesigns.png'
import Mockone from '../Assets/Mockups/Mockup2.png'
import Mocktwo from '../Assets/Mockups/Mockup3.png'
import Mockthree from '../Assets/Mockups/Mockup4.png'
import Mockfour from '../Assets/Mockups/Mockup5.png'
import Mockfive from '../Assets/Mockups/Mockup6.png'
import Mocksix from '../Assets/Mockups/Mockup1.png'
import Mockseven from '../Assets/Mockups/Mockup7.png'
import Mockeight from '../Assets/Mockups/Mockup8.png'
import Mocknine from '../Assets/Mockups/Mockup9.png'
import Mockten from '../Assets/Mockups/Mockup10.png'
import BackdropPattern from '../Components/BackdropPattern'

const Mockup = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedImage('')
  }

  return (
    <div>
      <NavBar />
      <div className="projndpics3">
        <div className="abtproj3">
          <p className="bigp">Mockup Designs</p>
          <p data-aos="fade-up" className="projstory">
            In mockup design, I bring concepts to life by creating realistic
            previews of branding, product, and packaging designs. Mockups are
            essential for visualizing how designs will look in real-world
            settings, whether on products, print materials, or digital screens.
            This section showcases some of my mockup work, illustrating how I
            use lifelike visuals to present design concepts, helping clients
            envision their brand’s full potential before production.
          </p>
        </div>
        <div className="projectimg3">
          <img src={Mockupimg} alt="project1" />
        </div>
      </div>

      <section className="otherdes">
        <div data-aos="fade-up" className="desslides">
          {[Mockone, Mockthree, Mockfive, Mockseven, Mocknine].map(
            (imgSrc, index) => (
              <div className="desdiv" key={index}>
                <img
                  className="kaapitdes"
                  src={imgSrc}
                  alt="mockup designs"
                  onClick={() => openModal(imgSrc)}
                />
              </div>
            )
          )}
        </div>

        <div data-aos="fade-up" className="desslides1">
          {[Mocktwo, Mockfour, Mocksix, Mockeight, Mockten].map(
            (imgSrc, index) => (
              <div className="desdiv" key={index}>
                <img
                  className="kaapitdes"
                  src={imgSrc}
                  alt="mockup designs"
                  onClick={() => openModal(imgSrc)}
                />
              </div>
            )
          )}
        </div>
      </section>

      <p data-aos="fade-up" className="selecteddesp">
        End of Selected Mockups Designs
      </p>

      {/* Modal for zoom effect */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Zoomed mockup design"
              className="zoomed-image"
            />
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      <BackdropPattern />
    </div>
  )
}

export default Mockup
