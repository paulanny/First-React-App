import LogoImage from "../Assets/myLogo.png";
import "../Components/Header.css"
import "./KGshot.css";
import Proj4Img from '../Assets/proj4.png';
import LogoImagesone from "../Assets/logo images/1.jpg";
import LogoImagestwo from "../Assets/logo images/2.jpg";
import LogoImagesthree from "../Assets/logo images/3.jpg";
import LogoImagesfour from "../Assets/logo images/4.jpg";
import LogoImagesfive from "../Assets/logo images/5.jpg";
import LogoImagessix from "../Assets/logo images/6.jpg";
import LogoImagesseven from "../Assets/logo images/7.jpg";
import LogoImageseight from "../Assets/logo images/8.jpg";
import LogoImagesnine from "../Assets/logo images/9.jpg";
import LogoImagesten from "../Assets/logo images/10.jpg";

const Logoworks = () => {

    return(
        <div>
        <header>
            <nav class="navbar">
                <div class="logo" id="logo">
                <img className="logoimg" src={LogoImage} alt="My-Logo"/>
                </div>
                <div>
                    <ul class="navbarul">
                        <li class="navbara">
                            <a>
                                About</a>
                            <a>
                                About</a>
                            <a>
                                About</a>
                            <a>
                                About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>


        <div class="projndpics">
            <div class="abtproj">
                <p class="bigp">LOGO DESIGNS</p>
                <p class="projstory">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam quae doloremque corporis iste voluptatum quia optio incidunt ipsa,
                                                                                                                                                                officiis nesciunt eos ut, fugiat ad alias rem enim, earum praesentium?..
                </p>

               
            </div>
            <div class="projectimgkg">
            <img src={Proj4Img} alt="project1"/>
            </div>
        </div>

        <section class="otherdes">
            <div class="desslides">
                <div class="desdiv">
                    <img class="kaapitdes" src={LogoImagesseven} alt="kaapit designs"/>
                </div>

                <div class="desdiv">
                    <img class={LogoImagesone}alt="kaapit designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={LogoImagestwo} alt="kaapit designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={LogoImagesthree} alt="kaapit designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={LogoImagesfour} alt="kaapit designs"/>
                </div>
            
            </div>

            <div class="desslides1">

                <div class="desdiv">
                    <img class="kaapitdes" src={LogoImagesfive} alt="kaapit designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={LogoImagessix} alt="kaapit designs"/>
                </div>
                <div class="desdiv">
                    <img class="kaapitdes" src={LogoImageseight} alt="kaapit designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={LogoImagesnine} alt="kaapit designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={LogoImagesten} alt="kaapit designs"/>

                </div>


            </div>

        </section>


        <p class="selecteddesp">End of Selected Logo Designs</p>
        </div>
    )
};

export default Logoworks;