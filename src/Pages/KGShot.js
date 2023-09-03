// import LogoImage from "../Assets/myLogo.png";
// import "../Components/Header.css"
import NavBar from '../Components/NavBar';
import "./KGshot.css";
import Proj1Img from "../Assets/proj1.png";
import KGStudioone from "../Assets/image2/1.jpg";
import KGStudiotwo from "../Assets/image2/2.jpg";
import KGStudiothree from "../Assets/image2/3.jpg";
import KGStudiofour from "../Assets/image2/4.jpg";
import KGStudiofive from "../Assets/image2/5.jpg";
import BackdropPattern from "../Components/BackdropPattern";

const KGshot = () => {
  return (
    <div>
       <NavBar />
      <div class="projndpics">
        <div class="abtproj">
          <p data-aos="fade-up" class="bigp">KAAPIT STUDIO GRAPHICS</p>
          <p data-aos="fade-up" class="projstory">
          As a Freelance graphic designer and one of the co-founders of
             KAAPIT GRAPHIC STUDIO, I have worked on series of designs 
             for the brand, starting from the brand's Logo design to other attractive 
             and appealing social media post designs. Below are some of the selceted designs for KAAPIT.
          </p>
        </div>
        <div class="projectimgkg">
          <img src={Proj1Img} alt="project1" />
        </div>
      </div>

      <section class="otherdes">
        <div data-aos="fade-right" class="desslides">
          <div class="desdiv">
            <img
              className="kaapitdes"
              src={KGStudioone}
              alt="kaapit designs"
            />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={KGStudiothree} alt="kaapit designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={KGStudiofive} alt="kaapit designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={KGStudiofive} alt="kaapit designs" />
          </div>

        </div>

        <div data-aos="fade-left" class="desslides1">
          <div class="desdiv">
            <img class="kaapitdes" src={KGStudiotwo} alt="kaapit designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={KGStudiofour} alt="kaapit designs" />
          </div>
        </div>
      </section>

      <p data-aos="fade-up" class="selecteddesp">End of Selected KAAPIT Designs</p>
      <BackdropPattern />
    </div>
  )
};

export default KGshot;
