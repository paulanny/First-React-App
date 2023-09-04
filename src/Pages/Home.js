import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import SelectedProjsTexts from "../Components/SelectedProjsTexts";
import Projects from "../Components/Projects";
import Tools from "../Components/Tools";
import Footer from "../Components/Footer";
import BackdropPattern from "../Components/BackdropPattern";
// import MobileMenu from '../Components/MobileMenu';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease", delay: 0 });
  }, []);
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
