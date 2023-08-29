import Header from '../Components/Header';
import Hero from '../Components/Hero';
import SelectedProjsTexts from '../Components/SelectedProjsTexts';
import Projects from '../Components/Projects';
import Tools from '../Components/Tools';
import Footer from '../Components/Footer';
import BackdropPattern from '../Components/BackdropPattern';

const Home = () => {
    return (
        <div>
        <Header/>
        <Hero/>
        <SelectedProjsTexts
        title="SELECTED PROJECTS"
        description="Projects"/>
        <Projects />
        <SelectedProjsTexts
     title="MY DESIGN TOOLS"
     description="Tools"/>
     <Tools />
     <Footer />
     <BackdropPattern />
     </div>
    )
}
export default Home;