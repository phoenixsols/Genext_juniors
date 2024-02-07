import { Link } from "react-router-dom";

export default function Popular(){
    return<>
     <section id="popular-courses" className="courses">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Courses</h2>
        <p>Popular Courses</p>
      </div>
      <div className="row" data-aos="zoom-in" data-aos-delay={100}>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="course-item">
            <img
              src="assets/img/webdesign.jpg"
              className="img-fluid scratch"
              alt="..."
            />
            <div className="course-content">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Web Development</h4>
                <p className="price">$169</p>
              </div>
              <h3>
                <Link to={'/web'}>Web Designing</Link>
              </h3>
              <p>
              Web design involves creating the visual elements and layout of a website, while coding involves translating these designs into a functional website using programming languages like HTML, CSS, and JavaScript. Typically, dedicated web developers translate the designs to code.
              </p>
              
            </div>
          </div>
        </div>{" "}
        {/* End Course Item*/}
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
          <div className="course-item">
            <img
              src="assets/img/scratch1.png "
              className="img-fluid h-50 scratch" 
              alt="..."
            />
            <div className="course-content">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Scratch tool</h4>
                <p className="price">$250</p>
              </div>
              <h3>
                <Link to={'/scratch'}>Scratch</Link>
              </h3>
              <p>
              Scratch is a high-level block-based visual programming language
               and website aimed primarily at children as an educational tool,
                with a target audience of ages 8 to 16. Users on the site can
                 create projects on the website using a block-like interface.
              </p>
             
            </div>
          </div>
        </div>{" "}
        {/* End Course Item*/}
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
          <div className="course-item">
            <img
              src="assets/img/hacking.jpg"
              className="img-fluid scratch"
              alt="..."
            />
            <div className="course-content">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Ethical Hacking</h4>
                <p className="price">$180</p>
              </div>
              <h3>
                <Link to={'/ethical_hacking'}>Ethical Hacking</Link>
              </h3>
              <p>
              An ethical hacker is responsible for identifying weaknesses in systems,
               networks and technology assets. They report these weaknesses to their
                organization and give advice on how to make security patches and 
                strengthen their defenses.
              </p>
             
            </div>
          </div>
        </div>{" "}
        {/* End Course Item*/}
      </div>
    </div>
  </section>
    </>
}