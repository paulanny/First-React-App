import { Link } from "react-router-dom";
import "./Projects.css";
import btnArrow from "../Assets/shotarrow.png";
import Proj1Img from "../Assets/proj1.png";
import Proj2Img from "../Assets/incivil.png";
import Proj3Img from "../Assets/proj3.png";
import Proj4Img from "../Assets/proj4.png";
import Proj5Img from "../Assets/proj5.png";
import Proj6Img from "../Assets/proj6.png";
import Proj7Img from "../Assets/proj7.png";

const Projects = () => {
  return (
    <section class="allprojects">
      <div class="projndpics">
        <div class="abtproj">
          <p class="bigp">KAAPIT STUDIO GRAPHICS</p>
          <p class="projstory">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            aperiam quae doloremque corporis iste voluptatum quia optio incidunt
            ipsa, officiis nesciunt eos ut, fugiat ad alias rem enim, earum
            praesentium?..
          </p>
          <div class="viewbtn">
            <Link to="/kaapitshot" class="viewshota">
              <button class="viewshotabtn">
                <p class="viewshotp">View Shots</p>
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
          <p class="bigp">DEPARTMENTAL DESIGNS</p>
          <p class="projstory">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            aperiam quae doloremque corporis iste voluptatum quia optio incidunt
            ipsa, officiis nesciunt eos ut, fugiat ad alias rem enim, earum
            praesentium?..
          </p>

          <div class="viewbtn">
            <Link to="/psychedesigns" class="viewshota">
              <button class="viewshotabtn">
                <p class="viewshotp">View Shots</p>
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
          <p class="bigp">SIMPLE AND CLASSY EGG DESIGNS</p>
          <p class="projstory">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            aperiam quae doloremque corporis iste voluptatum quia optio incidunt
            ipsa, officiis nesciunt eos ut, fugiat ad alias rem enim, earum
            praesentium?..
          </p>

          <div class="viewbtn">
            <Link to="/eggdesigns" class="viewshota">
              <button class="viewshotabtn">
                <p class="viewshotp">View Shots</p>
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
          <p class="bigp">LOGO DESIGNS</p>
          <p class="projstory">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            aperiam quae doloremque corporis iste voluptatum quia optio incidunt
            ipsa, officiis nesciunt eos ut, fugiat ad alias rem enim, earum
            praesentium?..
          </p>

          <div class="viewbtn">
            <Link to="/logodesigns" class="viewshota">
              <button class="viewshotabtn">
                <p class="viewshotp">View Shots</p>
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
          <p class="bigp">MOCKUP DESIGNS</p>
          <p class="projstory">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            aperiam quae doloremque corporis iste voluptatum quia optio incidunt
            ipsa, officiis nesciunt eos ut, fugiat ad alias rem enim, earum
            praesentium?..
          </p>

          <div class="viewbtn">
            <Link to="/mockupdesigns" class="viewshota">
              <button class="viewshotabtn">
                <p class="viewshotp">View Shots</p>
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
          <p class="bigp">PSYCHOWIZARD VENTURE DESIGNS</p>
          <p class="projstory">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            aperiam quae doloremque corporis iste voluptatum quia optio incidunt
            ipsa, officiis nesciunt eos ut, fugiat ad alias rem enim, earum
            praesentium?..
          </p>

          <div class="viewbtn">
            <Link to="/psychowizdesigns" class="viewshota">
              <button class="viewshotabtn">
                <p class="viewshotp">View Shots</p>
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
          <p class="bigp">SIMPLE RANDOM DESIGNS</p>
          <p class="projstory">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            aperiam quae doloremque corporis iste voluptatum quia optio incidunt
            ipsa, officiis nesciunt eos ut, fugiat ad alias rem enim, earum
            praesentium?..
          </p>

          <div class="viewbtn">
            <Link to="/randomdesigns" class="viewshota">
              <button class="viewshotabtn">
                <p class="viewshotp">View Shots</p>
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
