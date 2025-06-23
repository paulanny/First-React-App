// components/ProjectCard.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ to, image, title, description }) => (
  <Link to={to} className="project-card">
    <img src={image} alt={title} />
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </Link>
)

export default ProjectCard
