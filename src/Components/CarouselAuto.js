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
