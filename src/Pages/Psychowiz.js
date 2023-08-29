import './Mockup.css';
import "../Components/SecondProj.css";
import "../Components/Header.css";
import LogoImage from "../Assets/myLogo.png";
import Proj6Img from '../Assets/proj6.png';
import Psychowizone from "../Assets/psychowiz design/1.jpg"
import Psychowiztwo from "../Assets/psychowiz design/2.png";
import Psychowizthree from "../Assets/psychowiz design/3.jpg";
import Psychowizfour from "../Assets/psychowiz design/4.jpg";
import Psychowizfive from "../Assets/psychowiz design/5.jpg";
import Psychowizsix from "../Assets/psychowiz design/6.jpg";
import Psychowizseven from "../Assets/psychowiz design/7.jpg";
import Psychowizeight from "../Assets/psychowiz design/8.jpg";
import Psychowiznine from "../Assets/psychowiz design/9.png";
import Psychowizten from "../Assets/psychowiz design/10.jpg";
import BackdropPattern from '../Components/BackdropPattern';

const Psychowiz = () => {
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

        <div class="projndpics3">
            <div class="abtproj3">
                <p class="bigp">PSYCHOWIZARD VENTURE DESIGNS</p>
                <p class="projstory">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam quae doloremque corporis iste voluptatum quia optio incidunt ipsa,
                                                                                                                                            officiis nesciunt eos ut, fugiat ad alias rem enim, earum praesentium?..
                </p>

               
            </div>
            <div class="projectimg3">
            <img src={Proj6Img} alt="project1"/>
            </div>
        </div>

        <section class="otherdes">
            <div class="desslides">
                <div class="desdiv">
                    <img class="kaapitdes" src={Psychowizone} alt="psychowiz designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={Psychowiztwo} alt="psychowiz designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={Psychowizthree} alt="psychowiz designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={Psychowizfour} alt="psychowiz designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={Psychowizfive} alt="psychowiz designs"/>
                </div>
                
            </div>

            <div class="desslides1">

                <div class="desdiv">
                    <img class="kaapitdes" src={Psychowizsix} alt="psychowiz designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={Psychowizseven} alt="psychowiz designs"/>
                </div>
                <div class="desdiv">
                    <img class="kaapitdes" src={Psychowizeight} alt="psychowiz designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={Psychowiznine} alt="psychowiz designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={Psychowizten} alt="psychowiz designs"/>

                </div>


            </div>

        </section>


        <p class="selecteddesp">End of Selected Psychowizard Designs</p>
        <BackdropPattern />
        </div>
    )
};

export default Psychowiz;