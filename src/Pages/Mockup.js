import './Mockup.css';
import "../Components/SecondProj.css";
import "../Components/Header.css";
import LogoImage from "../Assets/myLogo.png";
import Proj5Img from '../Assets/proj5.png';
import Mockone from "../Assets/mockup images/1.jpg"
import Mocktwo from "../Assets/mockup images/2.jpg";
import Mockthree from "../Assets/mockup images/3.jpg";
import Mockfour from "../Assets/mockup images/4.jpg";
import Mockfive from "../Assets/mockup images/5.jpg";
import Mocksix from "../Assets/mockup images/6.png";
import Mockseven from "../Assets/mockup images/7.jpg";
import Mockeight from "../Assets/mockup images/8.png";
import Mocknine from "../Assets/mockup images/9.jpg";
import Mockten from "../Assets/mockup images/10.jpg";
import BackdropPattern from '../Components/BackdropPattern';
const Mockup = () => {
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

    <div class="projndpics3">
        <div class="abtproj3">
            <p class="bigp">MOCKUP DESIGNS</p>
            <p class="projstory">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam quae doloremque corporis iste voluptatum quia optio incidunt ipsa,
                                                                                                                                                                officiis nesciunt eos ut, fugiat ad alias rem enim, earum praesentium?..
            </p>

           
        </div>
        <div class="projectimg3">
        <img src={Proj5Img} alt="project1"/>
        </div>
    </div>

    <section class="otherdes">
        <div class="desslides">
            <div class="desdiv">
                <img class="kaapitdes" src={Mockone} alt="mockup designs"/>
            </div>

            <div class="desdiv">
                <img class="kaapitdes" src={Mocktwo} alt="mockup designs"/>
            </div>

            <div class="desdiv">
                <img class="kaapitdes" src={Mockthree} alt="mockup designs"/>
            </div>

            <div class="desdiv">
                <img class="kaapitdes" src={Mockfour} alt="mockup designs"/>
            </div>

            <div class="desdiv">
                <img class="kaapitdes" src={Mockfive} alt="mockup designs"/>
            </div>
           
        </div>

        <div class="desslides1">

            <div class="desdiv">
                <img class="kaapitdes" src={Mocksix} alt="mockup designs"/>
            </div>

            <div class="desdiv">
                <img class="kaapitdes" src={Mockseven} alt="mockup designs"/>
            </div>
            <div class="desdiv">
                <img class="kaapitdes" src={Mockeight} alt="mockup designs"/>
            </div>

            <div class="desdiv">
                <img class="kaapitdes" src={Mocknine} alt="mockup designs"/>
            </div>

            <div class="desdiv">
                <img class="kaapitdes" src={Mockten} alt="mockup designs"/>

            </div>


        </div>

    </section>


    <p class="selecteddesp">End of Selected Mockups Designs</p>
    <BackdropPattern />
    </div>
    )
}

export default Mockup;