import './Mockup.css';
import "../Components/Header.css"
import "../Components/SecondProj.css";
import LogoImage from "../Assets/myLogo.png";
import Proj2Img from '../Assets/incivil.png';
import Psycheone from "../Assets/psyche/1.png";
import Psychetwo from "../Assets/psyche/2.jpg";
import Psychethree from "../Assets/psyche/3.jpg";
import Psychefour from "../Assets/psyche/4.jpg";
import Psychefive from "../Assets/psyche/5.jpg";
import Psychesix from "../Assets/psyche/6.jpg";
import Psycheseven from "../Assets/psyche/7.png";
import Psycheeight from "../Assets/psyche/8.jpg";
import Psychenine from "../Assets/psyche/9.jpg";
import Psycheten from "../Assets/psyche/10.jpg";
import BackdropPattern from '../Components/BackdropPattern';
const Psyche = () => {
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

        <div class="projndpics3">
            <div class="abtproj3">
                <p class="bigp">DEPARTMENTAL DESIGNS</p>
                <p class="projstory">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam quae doloremque corporis iste voluptatum quia optio incidunt ipsa,
                                                                                                                                            officiis nesciunt eos ut, fugiat ad alias rem enim, earum praesentium?..
                </p>

        
            </div>
            <div class="projectimg3">
            <img src={Proj2Img} alt="project1"/>
            </div>
        </div>

        <section class="otherdes">
            <div class="desslides">
                <div class="desdiv">
                    <img class="kaapitdes" src={Psycheone} alt="psychowiz designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={Psychetwo} alt="psychowiz designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={Psychethree} alt="psychowiz designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={Psychefour} alt="psychowiz designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={Psychefive} alt="psychowiz designs"/>
                </div>
                
            </div>

            <div class="desslides1">

                <div class="desdiv">
                    <img class="kaapitdes" src={Psychesix} alt="psychowiz designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={Psycheseven} alt="psychowiz designs"/>
                </div>
                <div class="desdiv">
                    <img class="kaapitdes" src={Psycheeight} alt="psychowiz designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={Psychenine} alt="psychowiz designs"/>
                </div>

                <div class="desdiv">
                    <img class="kaapitdes" src={Psycheten} alt="psychowiz designs"/>

                </div>


            </div>

        </section>


        <p class="selecteddesp">End of Selected Departmental Designs</p>
        <BackdropPattern />

        </div>
    )
};

export default Psyche;