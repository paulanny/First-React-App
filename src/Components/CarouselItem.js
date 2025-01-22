import React from 'react'

const CarouselItem = ({ imgUrl, imgTitle }) => (
  <div className="carousel-card">
    <img src={imgUrl} alt={imgTitle} />
  </div>
)

export default CarouselItem
