import './Mockup.css';
import "../Components/SecondProj.css";
import NavBar from '../Components/NavBar';
import Proj5Img from '../Assets/proj5small.png';
import Mockone from "../Assets/mockup images/1.png"
import Mocktwo from "../Assets/mockup images/2.png";
import Mockthree from "../Assets/mockup images/3.png";
import Mockfour from "../Assets/mockup images/4.png";
import Mockfive from "../Assets/mockup images/5.png";
import BackdropPattern from '../Components/BackdropPattern';
const Mockup = () => {
    return (
        <div>
        <NavBar />
       <div class="projndpics3">
        <div class="abtproj3">
            <p data-aos="fade-up" class="bigp">MOCKUP DESIGNS</p>
            <p data-aos="fade-up" class="projstory">Mockup Design is a way of revealing the exact and expected 
            outcome of every design to the client to enable them have an advance view of 
            waht and how their designs will look like in real life printout. I am experienced in 
            creating designs and designs Mockup for brands.
            </p>

           
        </div>
        <div class="projectimg3">
        <img src={Proj5Img} alt="project1"/>
        </div>
    </div>

    <section class="otherdes">
        <div data-aos="fade-up" class="desslides">
            <div class="desdiv">
                <img class="kaapitdes" src={Mockone} alt="mockup designs"/>
            </div>

            <div class="desdiv">
                <img class="kaapitdes" src={Mockthree} alt="mockup designs"/>
            </div>

            <div class="desdiv">
                <img class="kaapitdes" src={Mockfive} alt="mockup designs"/>
            </div>
           
        </div>

        <div data-aos="fade-up" class="desslides1">

            <div class="desdiv">
                <img class="kaapitdes" src={Mocktwo} alt="mockup designs"/>
            </div>

            <div class="desdiv">
                <img class="kaapitdes" src={Mockfour} alt="mockup designs"/>
            </div>
        </div>

    </section>


    <p data-aos="fade-up" class="selecteddesp">End of Selected Mockups Designs</p>
    <BackdropPattern />
    </div>
    )
}

export default Mockup;