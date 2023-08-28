import './SelectedProjsTexts.css';

const SelectedProjsTexts = (props) => {
  return (
    <div class="selectedptxt" id="projects">
      <p class="selectwhite">{props.title}</p>
      <p class="dimselect">{props.description}</p>
    </div>
  )
};

export default SelectedProjsTexts;
