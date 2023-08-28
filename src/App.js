import { Routes, Route } from 'react-router-dom';
import KGshot from './Pages/KGShot';
import Logoworks from './Pages/Logoworks';
import Mockup from './Pages/Mockup';
import Psyche from './Pages/Psyche';
import Psychowiz from './Pages/Psychowiz';
import EggDesigns from './Pages/EggDesigns';
import Randomdesigns from './Pages/Randomdesigns';
import Home from './Pages/Home';



const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/kaapitshot' element={<KGshot />} />
      <Route path='/logodesigns' element={<Logoworks />} />
      <Route path='/mockupdesigns' element={<Mockup />} />
      <Route path='/psychedesigns' element={<Psyche />} />
      <Route path='/psychowizdesigns' element={<Psychowiz />} />
      <Route path='/eggdesigns' element={<EggDesigns />} />
      <Route path='/randomdesigns' element={<Randomdesigns />} />
      </Routes>
     
     </div>
  );
}

export default App;
