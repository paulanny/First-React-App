import NavBar from "../Components/NavBar";
import "./KGshot.css";
import Proj4Img from "../Assets/proj4.png";
import LogoImagesone from "../Assets/logo images/1.jpg";
import LogoImagestwo from "../Assets/logo images/2.jpg";
import LogoImagesthree from "../Assets/logo images/3.jpg";
import LogoImagesfour from "../Assets/logo images/4.jpg";
import LogoImagesfive from "../Assets/logo images/5.png";
import BackdropPattern from "../Components/BackdropPattern";
const Logoworks = () => {
  return (
    <div>
      <NavBar />
      <div class="projndpics">
        <div class="abtproj">
          <p data-aos="fade-up" class="bigp">LOGO DESIGNS</p>
          <p data-aos="fade-up" class="projstory">
            Logo Design is one important aspect of Graphic/Visual Design and of
            course I am a creative Logo designer who creates simple and brand
            centered Logo to help brands identity. 
          </p>
        </div>
        <div class="projectimgkg">
          <img src={Proj4Img} alt="project1" />
        </div>
      </div>

      <section class="otherdes">
        <div data-aos="fade-right" class="desslides">
          <div class="desdiv">
            <img class="kaapitdes" src={LogoImagesone} alt="kaapit designs" />
          </div>

          <div class="desdiv">
            <img class={LogoImagesthree} alt="kaapit designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={LogoImagesfive} alt="kaapit designs" />
          </div>
        </div>

        <div data-aos="fade-left" class="desslides1">
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
