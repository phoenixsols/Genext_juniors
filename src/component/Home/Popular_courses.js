import { Link } from "react-router-dom";
import Popular from "./Popular";
import Languages from "./Languages";

export default function Popular_courses(){
    return<>
    <>
    <Popular/>
  {/* ======= Popular Courses Section ======= */}
  <section id="popular-courses" className="courses">
    <div className="container" data-aos="fade-up">
      <div className="row" data-aos="zoom-in" data-aos-delay={100}>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="course-item">
            <img
              src="assets/img/gamedevelopment.jpg"
              className="img-fluid scratch"
              alt="..."
            />
            <div className="course-content">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Development</h4>
                <p className="price">$169</p>
              </div>
              <h3>
                <Link to={'/game'}>Game Development</Link>
              </h3>
              <p>
              Game design in education is typically associated with the higher grade-level.
               Usually somewhere in high school and college is where individuals learn the
                tricks and trade of game design. However, this does not mean that game design
                 is limited to teenagers and adults. kids are beginning to get in on the craft
                  of game design as well.
              </p>
             
            </div>
          </div>
        </div>{" "}
        {/* End Course Item*/}
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
          <div className="course-item">
            <img
              src="assets/img/AI.jpg"
              className="img-fluid scratch"
              alt="..."
            />
            <div className="course-content">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Artificial intelligence</h4>
                <p className="price">$250</p>
              </div>
              <h3>
                <Link to={'/robotics'}>AI & Robotics</Link>
              </h3>
              <p>
              Artificial intelligence (AI) is intelligence demonstrated by machines,
               unlike the natural intelligence displayed by humans and animals, 
               which involves consciousness and emotionality.Colloquially, 
               the term “artificial intelligence” is often used to describe machines
                (or computers) that mimic “cognitive” functions that humans associate
                 with the human mind, such as “learning” and “problem solving”.
              </p>
             
            </div>
          </div>
        </div>{" "}
        {/* End Course Item*/}
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
          <div className="course-item">
            <img
              src="assets/img/graphic.jpg"
              className="img-fluid scratch"
              alt="..."
            />
            <div className="course-content">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Designing</h4>
                <p className="price">$180</p>
              </div>
              <h3>
                <Link to={'/graphic'}>Graphic Designing</Link>
              </h3>
              <p>
              Hey there, young artist! Are you ready to explore the exciting
               world of graphic design? Get ready to unleash your creativity,
                experiment with colors and shapes, and bring your ideas to life
                 in stunning detail. Whether you dream of designing posters,
                  creating logos, or illustrating your own comics, graphic design
                   is your ticket to endless possibilities.
              </p>
             
            </div>
          </div>
        </div>{" "}
        {/* End Course Item*/}
      </div>
    </div>
  </section>

  <Languages/>
  {/* End Popular Courses Section */}
</>

    
    
    </>
}