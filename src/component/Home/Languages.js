import { Link } from "react-router-dom";
export default function Languages(){
    return<>
    <>
  {/* ======= Features Section ======= */}
  <section id="features" className="features">
    <div className="container" data-aos="fade-up">
      <div className="row" data-aos="zoom-in" data-aos-delay={100}>
        <div className="col-lg-3 col-md-4">
        <Link to={'/scratch'}>
          <div className="icon-box">
            <i className="ri-store-line" style={{ color: "#ffbb2c" }} />
            <h3>
            Scratch
            </h3>
          </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
        <Link to={'/robotics'}><div className="icon-box">
            <i className="ri-bar-chart-box-line" style={{ color: "#5578ff" }} />
            <h3>
            AI & Robotics
            </h3>
          </div></Link>
        </div>
        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
        <Link to={'/python'}> 
        <div className="icon-box">
            <i className="ri-calendar-todo-line" style={{ color: "#e80368" }} />
            <h3>
              Python
            </h3>
          </div></Link>
        </div>
        <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
        <Link to={'/canva'}>    <div className="icon-box">
            <i className="ri-paint-brush-line" style={{ color: "#e361ff" }} />
            <h3>
            Design with Canva
            </h3>
          </div> </Link>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
        <Link to={'/game'}>     <div className="icon-box">
            <i className="ri-database-2-line" style={{ color: "#47aeff" }} />
            <h3>
            Game Development
            </h3>
          </div> </Link>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
        <Link to={'/web'}><div className="icon-box">
            <i className="ri-gradienter-line" style={{ color: "#ffa76e" }} />
            <h3>
            Web Designing
            </h3>
          </div> </Link>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
        <Link to={'/coding'}> <div className="icon-box">
            <i className="ri-file-list-3-line" style={{ color: "#11dbcf" }} />
            <h3>
            Coding
            </h3>
          </div> </Link>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
        <Link to={'/graphic'}> <div className="icon-box">
            <i className="ri-price-tag-2-line" style={{ color: "#4233ff" }} />
            <h3>
            Graphic Designing
            </h3>
          </div> </Link>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
        <Link to={'/vedic'}> <div className="icon-box">
            <i className="ri-anchor-line" style={{ color: "#b2904f" }} />
            <h3>
            Vedic Maths
            </h3>
          </div> </Link>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
        <Link to={'/procreate'}>  <div className="icon-box">
            <i className="ri-disc-line" style={{ color: "#b20969" }} />
            <h3>
           Procreate
            </h3>
          </div> </Link>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
        <Link to={'/info'}>  <div className="icon-box">
            <i className="ri-base-station-line" style={{ color: "#ff5828" }} />
            <h3>
           Info Technology
            </h3>
          </div> </Link>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
        <Link to={'/ethical_hacking'}>  <div className="icon-box">
            <i className="ri-fingerprint-line" style={{ color: "#29cc61" }} />
            <h3>
            Ethical Hacking
            </h3>
          </div> </Link>
        </div>
      </div>
    </div>
  </section>
  {/* End Features Section */}
</>

    
    
    </>
}