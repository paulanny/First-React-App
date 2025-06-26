import { Link } from 'react-router-dom'
import './Brands.css'
import btnArrow from '../Assets/shotarrow.png'
import Hillemisaries from '../Assets/Brands/projhillemissariesdisplay.png'
import Abeke from '../Assets/Brands/Abeke/abekecover.png'
import Tiesmart from '../Assets/Brands/projtiesmartdisplay.png'
import Weoutside from '../Assets/Brands/projweoutsidedisplay.png'
import Adedola from '../Assets/Brands/projACdisplay.png'
import Padua from '../Assets/Brands/projpaduadisplay.png'
import Ramblings from '../Assets/Brands/projramblingsdisplay.png'

const Brands = () => {
  return (
    <section class="brandsec">
      <div className="branddiv">
        <div className="brandimg">
          <img src={Abeke} alt="project1" />
          <div className="brandviewbtn">
            <div>
              <p className="brandprojectname">Abeke's Cravings</p>
              <p className="brandindustry">Fast Food & Pastries</p>
            </div>
            <Link to="/abekepage" className="brandviewshota">
              <button className="brandviewshotabtn">
                <p className="brandviewshotp">View Designs</p>
                <div className="brandshotarrow">
                  <img src={btnArrow} alt="arrow" />
                  <img src={btnArrow} alt="arrow" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="branddiv">
        <div className="brandimg">
          <img src={Hillemisaries} alt="project1" />
          <div className="brandviewbtn">
            <div>
              <p className="brandprojectname">The Hill Emissaries Project</p>
              <p className="brandindustry">Education</p>
            </div>
            <Link to="/thebrandpage" className="brandviewshota">
              <button className="brandviewshotabtn">
                <p className="brandviewshotp">View Designs</p>
                <div className="brandshotarrow">
                  <img src={btnArrow} alt="arrow" />
                  <img src={btnArrow} alt="arrow" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="branddiv">
        <div className="brandimg">
          <img src={Ramblings} alt="project1" />
          <div className="brandviewbtn">
            <div>
              <p className="brandprojectname">Ramblings Project</p>
              <p className="brandindustry">Podcast</p>
            </div>
            <Link to="/ramblingspage" className="brandviewshota">
              <button className="brandviewshotabtn">
                <p className="brandviewshotp">View Designs</p>
                <div className="brandshotarrow">
                  <img src={btnArrow} alt="arrow" />
                  <img src={btnArrow} alt="arrow" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="branddiv">
        <div className="brandimg">
          <img src={Adedola} alt="project1" />
          <div className="brandviewbtn">
            <div>
              <p className="brandprojectname">Adedola Consulting Project</p>
              <p className="brandindustry">Consultancy</p>
            </div>
            <Link to="/adedolapage" className="brandviewshota">
              <button className="brandviewshotabtn">
                <p className="brandviewshotp">View Designs</p>
                <div className="brandshotarrow">
                  <img src={btnArrow} alt="arrow" />
                  <img src={btnArrow} alt="arrow" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="branddiv">
        <div className="brandimg">
          <img src={Padua} alt="project1" />
          <div className="brandviewbtn">
            <div>
              <p className="brandprojectname">Padua Project</p>
              <p className="brandindustry">Mental Health</p>
            </div>
            <Link to="/paduapage" className="brandviewshota">
              <button className="brandviewshotabtn">
                <p className="brandviewshotp">View Designs</p>
                <div className="brandshotarrow">
                  <img src={btnArrow} alt="arrow" />
                  <img src={btnArrow} alt="arrow" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="branddiv">
        <div className="brandimg">
          <img src={Weoutside} alt="project1" />
          <div className="brandviewbtn">
            <div>
              <p className="brandprojectname">Weoutside Project</p>
              <p className="brandindustry">Entertainment</p>
            </div>
            <Link to="/weoutsidepage" className="brandviewshota">
              <button className="brandviewshotabtn">
                <p className="brandviewshotp">View Designs</p>
                <div className="brandshotarrow">
                  <img src={btnArrow} alt="arrow" />
                  <img src={btnArrow} alt="arrow" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="branddiv">
        <div className="brandimg">
          <img src={Tiesmart} alt="project1" />
          <div className="brandviewbtn">
            <div>
              <p className="brandprojectname">Tiesmart Project</p>
              <p className="brandindustry">E-commerce</p>
            </div>
            <Link to="/tiesmartpage" className="brandviewshota">
              <button className="brandviewshotabtn">
                <p className="brandviewshotp">View Designs</p>
                <div className="brandshotarrow">
                  <img src={btnArrow} alt="arrow" />
                  <img src={btnArrow} alt="arrow" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands
