import LogoImage from "../Assets/myLogo.png";
import "../Components/Header.css"
import "./KGshot.css";
import Proj7Img from '../Assets/proj7.png';
import RandomImagesone from "../Assets/random images/1.jpg";
import RandomImagestwo from "../Assets/random images/2.jpg";
import RandomImagesthree from "../Assets/random images/3.jpg";
import RandomImagesfour from "../Assets/random images/4.jpg";
import RandomImagesfive from "../Assets/random images/5.jpg";
import RandomImagessix from "../Assets/random images/6.jpg";
import RandomImagesseven from "../Assets/random images/7.jpg";
import RandomImageseight from "../Assets/random images/8.jpg";
import RandomImagesnine from "../Assets/random images/9.jpg";
import RandomImagesten from "../Assets/random images/10.jpg";
import BackdropPattern from "../Components/BackdropPattern";

const Randomdesigns = () => {
    return (

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
            <img src={Proj7Img} alt="project1"/>
            </div>
        </div>

        <section class="otherdes">
            <div class="desslides">
                <div class="desdiv">
                    <img class="kaapitdes" src={RandomImagesone} alt="kaapit designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={RandomImagestwo}  alt="kaapit designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={RandomImagesthree}  alt="kaapit designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={RandomImagesfour}  alt="kaapit designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={RandomImagesfive}  alt="kaapit designs"/>
                </div>
                
            </div>

            <div class="desslides1">

                <div class="desdiv">
                    <img class="kaapitdes" src={RandomImagessix}  alt="kaapit designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={RandomImagesseven}  alt="kaapit designs"/>
                </div>
                <div class="desdiv">
                    <img class="kaapitdes" src={RandomImageseight}  alt="kaapit designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={RandomImagesnine}  alt="kaapit designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={RandomImagesten}  alt="kaapit designs"/>

                </div>


            </div>

        </section>


        <p class="selecteddesp">End of Selected Random Designs</p>
        <BackdropPattern />
        </div>
    )
};

export default Randomdesigns;