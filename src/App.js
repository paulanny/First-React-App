import React, { useState, useEffect } from 'react'
import BackdropPattern from './Components/BackdropPattern'
import Logoimg from '../src/Assets/myLogo.png'
import { Routes, Route } from 'react-router-dom'
import Mockup from './Pages/Mockup'
import BrandDesignsPage from './Pages/BrandDesignsPage'
import Home from './Pages/Home'
import TypeEffect from './Components/TypeEffect'
import PrintDesigns from './Pages/PrintDesigns'
import SocialMediaPage from './Pages/SocialMediaPage'
import AdsDesignPage from './Pages/AdsDesignPage'

const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <div>
      {loading ? (
        <div className="loader">
          {' '}
          <div className="Logobob">
            <img src={Logoimg} alt="This is the Logo" />;
          </div>
          <div className="spanp">
            <p>
              {' '}
              <TypeEffect text="Paul_Anny Designs" delay={100} />{' '}
            </p>
          </div>{' '}
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mockupdesigns" element={<Mockup />} />
          <Route path="/adsdesigns" element={<AdsDesignPage />} />
          <Route path="/branddesignspage" element={<BrandDesignsPage />} />
          <Route path="/socialmediapage" element={<SocialMediaPage />} />
          <Route path="/printdesigns" element={<PrintDesigns />} />
        </Routes>
      )}
      {/* <div className="raydiv">
        <div class="ray"></div>
      </div> */}
      <BackdropPattern />
    </div>
  )
}

export default App
