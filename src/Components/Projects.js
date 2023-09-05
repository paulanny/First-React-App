import { Link } from "react-router-dom";
import "./Projects.css";
import btnArrow from "../Assets/shotarrow.png";
import Proj1Img from "../Assets/image2/kaapit herosmall.png";
import Proj2Img from "../Assets/psyche/epsycherosmall.png";
import Proj3Img from "../Assets/eggimages/naps herosmall.png";
import Proj4Img from "../Assets/logo images/logohero.png";
import Proj5Img from "../Assets/proj5small.png";
import Proj6Img from "../Assets/proj6small.png";
import Proj7Img from "../Assets/proj7small.png";

const Projects = () => {
  return (
    <section class="allprojects">
      <div class="projndpics">
        <div class="abtproj">
          <p data-aos="fade-up" class="bigp">KAAPIT GRAPHICS DESIGNS</p>
          <p data-aos="fade-up" class="projstory">
            As a Freelance graphic designer and one of the co-founders of
             KAAPIT GRAPHIC STUDIO, I have worked on series of designs 
             for the brand, starting from the brand's Logo design to other attractive 
             and appealing social media post designs. click the button below to view some of the selected 
             designs. 

          </p>
          <div data-aos="fade-up" class="viewbtn">
            <Link to="/kaapitshot" class="viewshota">
              <button class="viewshotabtn">
                <p class="viewshotp">View Designs</p>
                <div class="shotarrow">
                  <img src={btnArrow} alt="arrow" />
                  <img src={btnArrow} alt="arrow" />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div class="projectimg">
          <img src={Proj1Img} alt="project1" />
        </div>
      </div>

   
      <div class="projndpics2">
        <div class="abtproj2">
          <p data-aos="fade-up" class="bigp">EPSYCHE DESIGNS</p>
          <p data-aos="fade-up" class="projstory">
            Everything Psychology(EPSYCHE Ng) is a non profit oragnization that 
            brings together great minds studying and interested in Psychology, I am a part of the 
            graphic team for the organization and I have worked on several designs for the organization.
          </p>

          <div data-aos="fade-up" class="viewbtn">
            <Link to="/psychedesigns" class="viewshota">
              <button class="viewshotabtn">
                <p class="viewshotp">View Designs</p>
                <div class="shotarrow">
                  <img src={btnArrow} alt="arrow" />
                  <img src={btnArrow} alt="arrow" />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div class="projectimg2">
          <img src={Proj2Img} alt="project1" />
        </div>
      </div>

      <div class="projndpics2">
        <div class="abtproj2">
          <p data-aos="fade-up" class="bigp">NAPS DESIGNS</p>
          <p data-aos="fade-up"  class="projstory">
            As the graphic team lead for NIGERIAN ASSOCIATION OF PSYCHOLOGY STUDENTS, I have 
            overseen and directed creation of different designs for the association for relatively
            broadcasting across the various platforms used by the association. I have also designed
            several designs for the association.
          </p>

          <div data-aos="fade-up" class="viewbtn">
            <Link to="/eggdesigns" class="viewshota">
              <button class="viewshotabtn">
                <p class="viewshotp">View Designs</p>
                <div class="shotarrow">
                  <img src={btnArrow} alt="arrow" />
                  <img src={btnArrow} alt="arrow" />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div class="projectimg2">
          <img src={Proj3Img} alt="project1" />
        </div>
      </div>
    

      <div class="projndpics">
        <div class="abtproj">
          <p data-aos="fade-up" class="bigp">LOGO DESIGNS</p>
          <p data-aos="fade-up" class="projstory">
           Logo Design is one important aspect of Graphic/Visual Design and of course
            I am a creative Logo designer who creates simple and brand centered Logo to help
            brands identity. Click the link to see some of my Logo designs.
          </p>

          <div data-aos="fade-up" class="viewbtn">
            <Link to="/logodesigns" class="viewshota">
              <button class="viewshotabtn">
                <p class="viewshotp">View Designs</p>
                <div class="shotarrow">
                  <img src={btnArrow} alt="arrow" />
                  <img src={btnArrow} alt="arrow" />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div class="projectimg">
          <img src={Proj4Img} alt="project1" />
        </div>
      </div>

      <div class="projndpics2">
        <div class="abtproj2">
          <p data-aos="fade-up" class="bigp">MOCKUP DESIGNS</p>
          <p data-aos="fade-up" class="projstory">
            Mockup Design is a way of revealing the exact and expected 
            outcome of every design to the client to enable them have an advance view of 
            waht and how their designs will look like in real life printout. I am experiened in 
            creating designs and designs Mockup for brands.

          </p>

          <div data-aos="fade-up" class="viewbtn">
            <Link to="/mockupdesigns" class="viewshota">
              <button class="viewshotabtn">
                <p class="viewshotp">View Designs</p>
                <div class="shotarrow">
                  <img src={btnArrow} alt="arrow" />
                  <img src={btnArrow} alt="arrow" />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div class="projectimg2">
          <img src={Proj5Img} alt="project1" />
        </div>
      </div>

      <div class="projndpics2">
        <div class="abtproj2">
          <p data-aos="fade-up" class="bigp">PSYCHOWIZARD DESIGNS</p>
          <p data-aos="fade-up" class="projstory">
            As a volunteer graphic designer for Psychowizard, I 
            have created multiple designs for the organization that help convey necessary
            information to the intended audience. 
          </p>

          <div data-aos="fade-up" class="viewbtn">
            <Link to="/psychowizdesigns" class="viewshota">
              <button class="viewshotabtn">
                <p class="viewshotp">View Designs</p>
                <div class="shotarrow">
                  <img src={btnArrow} alt="arrow" />
                  <img src={btnArrow} alt="arrow" />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div class="projectimg2">
          <img src={Proj6Img} alt="project1" />
        </div>
      </div>

      <div class="projndpics">
        <div class="abtproj">
          <p data-aos="fade-up" class="bigp">SIMPLE RANDOM DESIGNS</p>
          <p data-aos="fade-up" class="projstory">
            Of course, I have various clients that reach out to me to help them with 
            nice and simple designs, I deliver quality and high resolution designs as usual
            considering and tailoring my designs to meet the expected 
            outcome of the client. Click the button to see some of the selected random designs.

          </p>

          <div data-aos="fade-up" class="viewbtn">
            <Link to="/randomdesigns" class="viewshota">
              <button class="viewshotabtn">
                <p class="viewshotp">View Designs</p>
                <div class="shotarrow">
                  <img src={btnArrow} alt="arrow" />
                  <img src={btnArrow} alt="arrow" />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div class="projectimg">
          <img src={Proj7Img} alt="project1" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
