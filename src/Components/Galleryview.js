// // Galleryview.jsx
// import React, { useState, useCallback } from 'react'
// import Gallery from 'react-photo-gallery'
// import Carousel, { Modal, ModalGateway } from 'react-images'

// function Galleryview({ photos }) {
//   const [currentImage, setCurrentImage] = useState(0)
//   const [viewerIsOpen, setViewerIsOpen] = useState(false)

//   const openLightbox = useCallback((event, { photo, index }) => {
//     setCurrentImage(index)
//     setViewerIsOpen(true)
//   }, [])

//   const closeLightbox = () => {
//     setCurrentImage(0)
//     setViewerIsOpen(false)
//   }

//   return (
//     <div>
//       <Gallery photos={photos} onClick={openLightbox} />
//       <ModalGateway>
//         {viewerIsOpen ? (
//           <Modal onClose={closeLightbox}>
//             <Carousel
//               currentIndex={currentImage}
//               views={photos.map((x) => ({
//                 ...x,
//                 srcset: x.srcSet,
//                 caption: x.title,
//               }))}
//             />
//           </Modal>
//         ) : null}
//       </ModalGateway>
//     </div>
//   )
// }

// export default Galleryview

// Galleryview.jsx
import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

const Galleryview = ({ photos }) => {
  return (
    <PhotoProvider>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'center',
        }}
      >
        {photos.map((photo, index) => (
          <PhotoView key={index} src={photo.src}>
            <img
              src={photo.src}
              alt={photo.title || `Photo ${index + 1}`}
              style={{
                width: '300px',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  )
}

export default Galleryview
