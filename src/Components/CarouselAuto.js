// import React from 'react'
// import './autoplaycarousel.css'
// import { cardDetails } from './carousel-config'
// import CarouselItem from './CarouselItem'

// const CarouselAuto = () => {
//   return (
//     <div className="carousel-container">
//       <div className="carousel-track">
//         {Object.keys(cardDetails).map((detailKey) => {
//           return (
//             <CarouselItem
//               imgUrl={cardDetails[detailKey].imgUrl}
//               imgTitle={cardDetails[detailKey].title}
//             ></CarouselItem>
//           )
//         })}
//         {Object.keys(cardDetails).map((detailKey) => {
//           return (
//             <CarouselItem
//               imgUrl={cardDetails[detailKey].imgUrl}
//               imgTitle={cardDetails[detailKey].title}
//             ></CarouselItem>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default CarouselAuto
// import React from 'react'
// import './autoplaycarousel.css'
// import cardDetails from './carousel-config' // Import without destructuring
// import CarouselItem from './CarouselItem'

// const CarouselAuto = () => {
//   const details = cardDetails() // Call cardDetails as a function

//   return (
//     <div className="carousel-container">
//       <div className="carousel-track">
//         {Object.keys(details).map((detailKey) => {
//           return (
//             <CarouselItem
//               key={detailKey}
//               imgUrl={details[detailKey].imgUrl}
//               imgTitle={details[detailKey].title}
//             />
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default CarouselAuto

// import React from 'react'
// import './autoplaycarousel.css'
// import cardDetails from './carousel-config'
// import CarouselItem from './CarouselItem'

// const CarouselAuto = () => {
//   const details = cardDetails()

//   return (
//     <div className="carousel-container">
//       <div className="carousel-track">
//         {Object.keys(details).map((detailKey) => (
//           <CarouselItem
//             key={detailKey}
//             imgUrl={details[detailKey].imgUrl}
//             imgTitle={details[detailKey].title}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default CarouselAuto
// import React from 'react'
// import './autoplaycarousel.css'
// import cardDetails from './carousel-config'
// import CarouselItem from './CarouselItem'

// const CarouselAuto = () => {
//   const details = cardDetails()

//   return (
//     <div className="carousel-container">
//       <div className="carousel-track">
//         {Object.keys(details).map((detailKey) => (
//           <CarouselItem
//             key={detailKey}
//             imgUrl={details[detailKey].imgUrl}
//             imgTitle={details[detailKey].title}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default CarouselAuto

// import React from 'react'
// import './autoplaycarousel.css'
// import cardDetails from './carousel-config'
// import CarouselItem from './CarouselItem'

// const CarouselAuto = () => {
//   const details = cardDetails()

//   return (
//     <div className="carousel-container">
//       <div className="carousel-track">
//         {details.map((detail, index) => (
//           <CarouselItem
//             key={index}
//             imgUrl={detail.imgUrl}
//             imgTitle={detail.title}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default CarouselAuto

import React from 'react'
import './autoplaycarousel.css'
import { getCardDetails } from './carousel-config'
import CarouselItem from './CarouselItem'

const cardDetails = getCardDetails()

const CarouselAuto = () => (
  <div className="carousel-container">
    <div className="carousel-track">
      {Object.keys(cardDetails).map((detailKey) => (
        <CarouselItem
          key={detailKey}
          imgUrl={cardDetails[detailKey].imgUrl}
          imgTitle={cardDetails[detailKey].title}
        />
      ))}
      {Object.keys(cardDetails).map((detailKey) => (
        <CarouselItem
          key={`${detailKey}-duplicate`}
          imgUrl={cardDetails[detailKey].imgUrl}
          imgTitle={cardDetails[detailKey].title}
        />
      ))}
    </div>
  </div>
)

export default CarouselAuto
