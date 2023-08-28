import LogoImage from "../Assets/myLogo.png";
import "../Components/Header.css"
import "./KGshot.css";
import Proj1Img from "../Assets/proj1.png";
import KGStudioInsta from "../Assets/image2/1.jpg";
import KGStudioone from "../Assets/image2/2.jpg";
import KGStudiotwo from "../Assets/image2/3.jpg";
import KGStudiothree from "../Assets/image2/4.jpg";
import KGStudiofour from "../Assets/image2/5.jpg";
import KGStudiofive from "../Assets/image2/6.jpg";
import KGStudiosix from "../Assets/image2/7.jpg";
import KGStudioseven from "../Assets/image2/8.jpg";
import KGStudioeight from "../Assets/image2/9.jpg";
import KGStudionine from "../Assets/image2/10.jpg";

const KGshot = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo" id="logo">
            <img className="logoimg" src={LogoImage} alt="My-Logo" />
          </div>
          <div>
            <ul className="navbarul">
              <li className="navbara">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#tools">Design Tools</a>
                <a href="#contact">Contact</a>

                <a>Resume</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div class="projndpics">
        <div class="abtproj">
          <p class="bigp">KAAPIT STUDIO GRAPHICS</p>
          <p class="projstory">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            aperiam quae doloremque corporis iste voluptatum quia optio incidunt
            ipsa, officiis nesciunt eos ut, fugiat ad alias rem enim, earum
            praesentium?..
          </p>
        </div>
        <div class="projectimgkg">
          <img src={Proj1Img} alt="project1" />
        </div>
      </div>

      <section class="otherdes">
        <div class="desslides">
          <div class="desdiv">
            <img
              className="kaapitdes"
              src={KGStudioInsta}
              alt="kaapit designs"
            />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={KGStudioone} alt="kaapit designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={KGStudiotwo} alt="kaapit designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={KGStudiothree} alt="kaapit designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={KGStudiofour} alt="kaapit designs" />
          </div>
        </div>

        <div class="desslides1">
          <div class="desdiv">
            <img class="kaapitdes" src={KGStudiofive} alt="kaapit designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={KGStudiosix} alt="kaapit designs" />
          </div>
          <div class="desdiv">
            <img class="kaapitdes" src={KGStudioseven} alt="kaapit designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={KGStudioeight} alt="kaapit designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={KGStudionine} alt="kaapit designs" />
          </div>
        </div>
      </section>

      <p class="selecteddesp">End of Selected KAAPIT Designs</p>
    </div>
  )
};

export default KGshot;
