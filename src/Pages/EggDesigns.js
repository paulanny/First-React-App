import "./Mockup.css";
import "../Components/Header.css";
import "./KGshot.css";
import LogoImage from "../Assets/myLogo.png";
import Proj3Img from "../Assets/proj3.png";
import Eggone from "../Assets/eggimages/1.jpg";
import Eggtwo from "../Assets/eggimages/2.jpg";
import Eggthree from "../Assets/eggimages/3.jpg";
import Eggfour from "../Assets/eggimages/4.jpg";
import Eggfive from "../Assets/eggimages/5.jpg";
import Eggsix from "../Assets/eggimages/6.jpg";
import Eggseven from "../Assets/eggimages/7.jpg";
// import Eggeight from "../Assets/eggimages/8.jpg";
// import Eggnine from "../Assets/eggimages/9.jpg";
// import Eggten from "../Assets/eggimages/10.jpg";

const EggDesigns = () => {
  return (
    <div>
      <header>
        <nav class="navbar">
          <div class="logo" id="logo">
            <img className="logoimg" src={LogoImage} alt="My-Logo" />
          </div>
          <div>
            <ul class="navbarul">
              <li class="navbara">
                <a>About</a>
                <a>About</a>
                <a>About</a>
                <a>About</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div class="projndpics2">
        <div class="abtproj2">
          <p class="bigp">SIMPLE AND CLASSY EGG DESIGNS</p>
          <p class="projstory">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            aperiam quae doloremque corporis iste voluptatum quia optio incidunt
            ipsa, officiis nesciunt eos ut, fugiat ad alias rem enim, earum
            praesentium?..
          </p>
        </div>
        <div class="projectimg2">
          <img src={Proj3Img} alt="project1" />
        </div>
      </div>

      <section class="otherdes">
        <div class="desslides">
          <div class="desdiv">
            <img class="kaapitdes" src={Eggone} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={Eggtwo} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={Eggthree} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={Eggfour} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={Eggfive} alt="psychowiz designs" />
          </div>
        </div>

        <div class="desslides1">
          <div class="desdiv">
            <img class="kaapitdes" src={Eggsix} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={Eggseven} alt="psychowiz designs" />
          </div>
          {/* <div class="desdiv">
            <img class="kaapitdes" src={Eggeight} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={Eggnine} alt="psychowiz designs" />
          </div>

          <div class="desdiv">
            <img class="kaapitdes" src={Eggten} alt="psychowiz designs" />
          </div> */}
        </div>
      </section>

      <p class="selecteddesp">End of Selected Fola's Egg Designs</p>
    </div>
  );
}

export default EggDesigns;
