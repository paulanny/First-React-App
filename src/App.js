import React, { useState, useEffect } from "react";
import BackdropPattern from "./Components/BackdropPattern";
// import Typewriter from './Components/Typewriter';
import Logoimg from '../src/Assets/myLogo.png';
import { Routes, Route } from "react-router-dom";
import KGshot from "./Pages/KGShot";
import Logoworks from "./Pages/Logoworks";
import Mockup from "./Pages/Mockup";
import Psyche from "./Pages/Psyche";
import Psychowiz from "./Pages/Psychowiz";
import EggDesigns from "./Pages/EggDesigns";
import Randomdesigns from "./Pages/Randomdesigns";
import Home from "./Pages/Home";
import TypeEffect from "./Components/TypeEffect";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          {" "}
          <div className="Logobob">
            <img src={Logoimg} alt="This is the Logo" />;
          </div>
          <div className="spanp">
            <p> <TypeEffect text="Paul_Anny Designs" delay={100} /> </p>
            {/* <p> <Typewriter text="Paul_Anny Designs" delay={100} infinite/></p> */}
          </div>{" "}
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kaapitshot" element={<KGshot />} />
          <Route path="/logodesigns" element={<Logoworks />} />
          <Route path="/mockupdesigns" element={<Mockup />} />
          <Route path="/psychedesigns" element={<Psyche />} />
          <Route path="/psychowizdesigns" element={<Psychowiz />} />
          <Route path="/eggdesigns" element={<EggDesigns />} />
          <Route path="/randomdesigns" element={<Randomdesigns />} />
        </Routes>
      )}
      <BackdropPattern />
    </div>
  );
};

export default App;
