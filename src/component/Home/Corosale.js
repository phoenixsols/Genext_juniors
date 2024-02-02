import { Link } from "react-router-dom";
export default function Corosale(){
    return<>
    <section
    id="hero"
    className="d-flex justify-content-center align-items-center"
  >
    <div
      className="container position-relative"
      data-aos="zoom-in"
      data-aos-delay={100}
    >
      <h1>
        Genext Juniors
        <br />
 
      </h1>
      <h2>We provide best platform to Enhance yout child skills</h2>
      <Link to={'/'} className="btn-get-started">
        Know More
      </Link>
    </div>
  </section>
  {/* End Hero */}
    
    </>
}