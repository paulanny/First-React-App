import { useEffect } from 'react';
import 'aos/dist/aos.css';
import NavBar from '../Components/NavBar';
import Hero from '../Components/Hero';
import SelectedProjsTexts from '../Components/SelectedProjsTexts';
import Projects from '../Components/Projects';
import Tools from '../Components/Tools';
import Footer from '../Components/Footer';
import BackdropPattern from '../Components/BackdropPattern';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <SelectedProjsTexts
        id="projects"
        title="SELECTED DESIGNS"
        description="Designs"
      />
      <Projects />
      <SelectedProjsTexts
        id="tools"
        title="MY DESIGN TOOLS"
        description="Tools"
      />
      <Tools />
      <Footer />
      <BackdropPattern />
    </div>
  );
};
export default Home;
