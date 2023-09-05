import NavBar from "../Components/NavBar";
import "./KGshot.css";
import logohero from "../Assets/logo images/logohero.png";
import LogoImagesone from "../Assets/logo images/1.jpg";
import LogoImagestwo from "../Assets/logo images/3.jpg";
import LogoImagesthree from "../Assets/logo images/3.png";
import LogoImagesfour from "../Assets/logo images/4.jpg";
import LogoImagesfive from "../Assets/logo images/5.png";
import BackdropPattern from "../Components/BackdropPattern";
const Logoworks = () => {
  return (
    <div>
      <NavBar />
      <div class="projndpics4">
        <div class="abtproj">
          <p data-aos="fade-up" class="bigp">LOGO DESIGNS</p>
          <p data-aos="fade-up" class="projstory">
            Logo Design is one important aspect of Graphic/Visual Design and of
            course I am a creative Logo designer who creates simple and brand
            centered Logo to help brands identity. 
          </p>
        </div>
        <div class="projectimgkg">
          <img src={logohero} alt="project1" />
        </div>
      </div>

      <section class="otherdes">
        <div data-aos="fade-up" class="desslides">
          <div class="desdiv">
            <img class="kaapitdes" src={LogoImagesone} alt="kaapit designs" />
          </div>

          <div class="desdiv">
          <img class="kaapitdes" src={LogoImagesthree} alt="kaapit designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={LogoImagesfive} alt="kaapit designs" />
          </div>
        </div>

        <div data-aos="fade-up" class="desslides1">
          <div class="desdiv">
            <img class="kaapitdes" src={LogoImagestwo} alt="kaapit designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={LogoImagesfour} alt="kaapit designs" />
          </div>
        </div>
      </section>

      <p data-aos="fade-up" class="selecteddesp">End of Selected Logo Designs</p>
      <BackdropPattern />
    </div>
  );
};

export default Logoworks;
