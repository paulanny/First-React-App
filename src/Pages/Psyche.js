import "./Mockup.css";
// import "../Components/Header.css"
import "../Components/SecondProj.css";
// import LogoImage from "../Assets/myLogo.png";
import NavBar from "../Components/NavBar";
import epsychero from "../Assets/psyche/epsycherosmall.png";
import Psycheone from "../Assets/psyche/1.png";
import Psychetwo from "../Assets/psyche/2.png";
import Psychethree from "../Assets/psyche/3.png";
import Psychefour from "../Assets/psyche/4.png";
import Psychefive from "../Assets/psyche/5.png";
import BackdropPattern from "../Components/BackdropPattern";
const Psyche = () => {
  return (
    <div>
      <NavBar />

      <div class="projndpics3">
        <div class="abtproj3">
          <p data-aos="fade-up" class="bigp">EPSYCHE DESIGNS</p>
          <p data-aos="fade-up" class="projstory">
            Everything Psychology(EPSYCHE Ng) is a non profit oragnization that
            brings together great minds studying and interested in Psychology, I
            am a part of the graphic team for the organization and I have worked
            on several designs for the organization.
          </p>
        </div>
        <div class="projectimg3">
          <img src={epsychero} alt="project1" />
        </div>
      </div>

      <section class="otherdes">
        <div data-aos="fade-up" class="desslides">
          <div class="desdiv">
            <img class="kaapitdes" src={Psycheone} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={Psychethree} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={Psychefive} alt="psychowiz designs" />
          </div>
        </div>

        <div data-aos="fade-up" class="desslides1">
          <div class="desdiv">
            <img class="kaapitdes" src={Psychetwo} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={Psychefour} alt="psychowiz designs" />
          </div>
        </div>
      </section>

      <p data-aos="fade-up" class="selecteddesp">End of Selected Everything Psyche Designs</p>
      <BackdropPattern />
    </div>
  );
};

export default Psyche;
