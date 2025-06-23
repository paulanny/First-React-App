// import React from 'react'
// import './autoplaycarousel.css'
// import { getCardDetails } from './carousel-config'
// import CarouselItem from './CarouselItem'

// const cardDetails = getCardDetails()

// const CarouselAuto = () => (
//   <div className="carousel-container">
//     <div className="carousel-track">
//       {Object.keys(cardDetails).map((detailKey) => (
//         <CarouselItem
//           key={detailKey}
//           imgUrl={cardDetails[detailKey].imgUrl}
//           imgTitle={cardDetails[detailKey].title}
//         />
//       ))}
//       {Object.keys(cardDetails).map((detailKey) => (
//         <CarouselItem
//           key={`${detailKey}-duplicate`}
//           imgUrl={cardDetails[detailKey].imgUrl}
//           imgTitle={cardDetails[detailKey].title}
//         />
//       ))}
//     </div>
//   </div>
// )

// export default CarouselAuto

// CarouselAuto.jsx
import React from 'react'
import './autoplaycarousel.css'
import CarouselItem from './CarouselItem'

const CarouselAuto = ({ cardDetails }) => (
  <div className="carousel-container">
    <div className="carousel-track">
      {cardDetails.map((detail, i) => (
        <CarouselItem key={i} imgUrl={detail.imgUrl} imgTitle={detail.title} />
      ))}
      {cardDetails.map((detail, i) => (
        <CarouselItem
          key={`${i}-dup`}
          imgUrl={detail.imgUrl}
          imgTitle={detail.title}
        />
      ))}
    </div>
  </div>
)

export default CarouselAuto
