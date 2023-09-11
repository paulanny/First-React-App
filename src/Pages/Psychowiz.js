import "./Mockup.css";
import "../Components/SecondProj.css";
import Proj6Img from "../Assets/proj6small.png";
import Psychowizone from "../Assets/psychowiz design/1.png";
import Psychowiztwo from "../Assets/psychowiz design/2.png";
import Psychowizthree from "../Assets/psychowiz design/3.jpg";
import Psychowizfour from "../Assets/psychowiz design/3.png";
import Psychowizfive from "../Assets/psychowiz design/5.jpg";
import NavBar from "../Components/NavBar";
import BackdropPattern from "../Components/BackdropPattern";

const Psychowiz = () => {
  return (
    <div>
      <NavBar />
      <div class="projndpics3">
        <div class="abtproj3">
          <p data-aos="fade-up" class="bigp">PSYCHOWIZARD VENTURE DESIGNS</p>
          <p data-aos="fade-up" class="projstory">
            As a volunteer graphic designer for Psychowizard, I have created
            multiple designs for the organization that help convey necessary
            information to the intended audience.
          </p>
        </div>
        <div class="projectimg3">
          <img src={Proj6Img} alt="project1" />
        </div>
      </div>

      <section class="otherdes">
        <div data-aos="fade-up" class="desslides">
          <div class="desdiv">
            <img class="kaapitdes" src={Psychowizone} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img
              class="kaapitdes"
              src={Psychowizthree}
              alt="psychowiz designs"
            />
          </div>

          <div class="desdiv">
            <img
              class="kaapitdes"
              src={Psychowizfive}
              alt="psychowiz designs"
            />
          </div>
        </div>

        <div data-aos="fade-up" class="desslides1">
          <div class="desdiv">
            <img class="kaapitdes" src={Psychowiztwo} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img
              class="kaapitdes"
              src={Psychowizfour}
              alt="psychowiz designs"
            />
          </div>
        </div>
      </section>

      <p class="selecteddesp">End of Selected Psychowizard Designs</p>
      <BackdropPattern />
    </div>
  );
};

export default Psychowiz;
