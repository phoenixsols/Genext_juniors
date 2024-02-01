import { Link } from "react-router-dom";
export default function Languages(){
    return<>
    <>
  {/* ======= Features Section ======= */}
  <section id="features" className="features">
    <div className="container" data-aos="fade-up">
      <div className="row" data-aos="zoom-in" data-aos-delay={100}>
        <div className="col-lg-3 col-md-4">
          <div className="icon-box">
            <i className="ri-store-line" style={{ color: "#ffbb2c" }} />
            <h3>
              <Link to={'/course_details'}>Scratch</Link>
            </h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div className="icon-box">
            <i className="ri-bar-chart-box-line" style={{ color: "#5578ff" }} />
            <h3>
            <Link to={'/robotics'}>AI & Robotics</Link>
            </h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div className="icon-box">
            <i className="ri-calendar-todo-line" style={{ color: "#e80368" }} />
            <h3>
              <Link to={'/python'}>Python</Link>
            </h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
          <div className="icon-box">
            <i className="ri-paint-brush-line" style={{ color: "#e361ff" }} />
            <h3>
            <Link to={'/canva'}>Design with Canva</Link>
            </h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="ri-database-2-line" style={{ color: "#47aeff" }} />
            <h3>
            <Link to={'/game'}>Game Development</Link>
            </h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="ri-gradienter-line" style={{ color: "#ffa76e" }} />
            <h3>
            <Link to={'/web'}>Web Designing</Link>
            </h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="ri-file-list-3-line" style={{ color: "#11dbcf" }} />
            <h3>
            <Link to={'/coding'}>Coding</Link>
            </h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="ri-price-tag-2-line" style={{ color: "#4233ff" }} />
            <h3>
            <Link to={'/graphic'}>Graphic Designing</Link>
            </h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="ri-anchor-line" style={{ color: "#b2904f" }} />
            <h3>
            <Link to={'/vedic'}>Vedic Maths</Link>
            </h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="ri-disc-line" style={{ color: "#b20969" }} />
            <h3>
            <Link to={'/procreate'}>Procreate</Link>
            </h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="ri-base-station-line" style={{ color: "#ff5828" }} />
            <h3>
            <Link to={'/info'}>Info Technology</Link>
            </h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="ri-fingerprint-line" style={{ color: "#29cc61" }} />
            <h3>
             <Link to={'/ethical_hacking'}>Ethical Hacking</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Features Section */}
</>

    
    
    </>
}