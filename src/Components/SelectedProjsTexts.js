// import { useEffect } from 'react';
import './SelectedProjsTexts.css';

const SelectedProjsTexts = (props) => {
 
  return (
    <div class="selectedptxt" id="projects">
      <p data-aos="fade-right" class="selectwhite">{props.title}</p>
      <p  data-aos="fade-right" class="dimselect">{props.description}</p>
    </div>
  )
};

export default SelectedProjsTexts;
