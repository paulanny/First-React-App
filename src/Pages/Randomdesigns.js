import "./KGshot.css";
import Proj7Img from "../Assets/proj7small.png";
import RandomImagesone from "../Assets/random images/1.png";
import RandomImagestwo from "../Assets/random images/2.png";
import RandomImagesthree from "../Assets/random images/3.png";
import RandomImagesfour from "../Assets/random images/4.png";
import RandomImagesfive from "../Assets/random images/5.png";
import BackdropPattern from "../Components/BackdropPattern";
import NavBar from "../Components/NavBar";

const Randomdesigns = () => {
  return (
    <div>
      <NavBar />
      <div class="projndpics4">
        <div class="abtproj4">
          <p data-aos="fade-up" class="bigp">RANDOM DESIGNS</p>
          <p data-aos="fade-up" class="projstory">
            {" "}
            Of course, I have various clients that reach out to me to help them
            with nice and simple designs, I deliver quality and high resolution
            designs as usual considering and tailoring my designs to meet the
            expected outcome of the client. Click the button to see some of the
            selected random designs.
          </p>
        </div>
        <div class="projectimg4">
          <img src={Proj7Img} alt="project1" />
        </div>
      </div>

      <section class="otherdes">
        <div data-aos="fade-up" class="desslides">
          <div class="desdiv">
            <img class="kaapitdes" src={RandomImagesone} alt="kaapit designs" />
          </div>

          <div class="desdiv">
            <img
              class="kaapitdes"
              src={RandomImagesthree}
              alt="kaapit designs"
            />
          </div>

          <div class="desdiv">
            <img
              class="kaapitdes"
              src={RandomImagesfive}
              alt="kaapit designs"
            />
          </div>
        </div>

        <div data-aos="fade-up" class="desslides1">
        <div class="desdiv">
            <img class="kaapitdes" src={RandomImagestwo} alt="kaapit designs" />
          </div>

          <div class="desdiv">
            <img
              class="kaapitdes"
              src={RandomImagesfour}
              alt="kaapit designs"
            />
          </div>
        </div>
      </section>

      <p class="selecteddesp">End of Selected Random Designs</p>
      <BackdropPattern />
    </div>
  );
};

export default Randomdesigns;
