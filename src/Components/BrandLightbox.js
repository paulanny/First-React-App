import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

const BrandLightbox = ({ images }) => {
  return (
    <PhotoProvider>
      <div className="design-gallery">
        {images.map((img, i) => (
          <PhotoView key={i} src={img}>
            <img src={img} alt={`Design ${i + 1}`} className="gallery-thumb" />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  )
}

export default BrandLightbox
