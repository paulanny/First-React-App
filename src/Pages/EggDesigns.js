import './Mockup.css';
import "../Components/SecondProj.css";
import NavBar from '../Components/NavBar';
import Proj3Img from "../Assets/eggimages/naps herosmall.png";
import Eggone from "../Assets/eggimages/2.jpg";
import Eggtwo from "../Assets/eggimages/3.jpg";
import Eggthree from "../Assets/eggimages/4.jpg";
import Eggfour from "../Assets/eggimages/5.png";
import Eggfive from "../Assets/eggimages/6.jpg";
import BackdropPattern from '../Components/BackdropPattern';

const EggDesigns = () => {
  return (
    <div>
      <NavBar />
      <div class="projndpics3">
        <div class="abtproj3">
          <p data-aos="fade-up" class="bigp">NAPS DESIGN</p>
          <p data-aos="fade-up" class="projstory">
          As the graphic team lead for NIGERIAN ASSOCIATION OF PSYCHOLOGY STUDENTS, I have 
            overseen and directed creation of different designs for the asociation for relatively
            broadcasting across the various platforms used by te association. I have also designed
            several designs for the association.
          </p>
        </div>
        <div class="projectimg3">
          <img src={Proj3Img} alt="project1" />
        </div>
      </div>

      <section class="otherdes">
        <div  data-aos="fade-up" class="desslides">
          <div class="desdiv">
            <img class="kaapitdes" src={Eggone} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={Eggthree} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={Eggfive} alt="psychowiz designs" />
          </div>

        </div>

        <div data-aos="fade-up" class="desslides1">
          <div class="desdiv">
            <img class="kaapitdes" src={Eggtwo} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={Eggfour} alt="psychowiz designs" />
          </div>

        </div>
      </section>

      <p class="selecteddesp">End of Selected NAPS Designs</p>
      <BackdropPattern />
    </div>
  );
}

export default EggDesigns;
