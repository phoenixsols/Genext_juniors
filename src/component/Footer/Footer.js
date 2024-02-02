import { Link } from "react-router-dom";

export default function Footer(){
    return<>
    <>
  {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>GENEXT JUNIORS</h3>
         
            <p>
            Kandhari Plaza, <br /> 6, Opposite Annapurna Temple, <br /> 
Sudama Nagar, Indore, <br /> Madhya Pradesh 452009
              <br />
        
              <br />
              <strong>Phone:</strong> +91 98930 78853
              <br />
              <strong>Email:</strong> info@genextjuniors.com
              <br />
            </p>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <Link to={'/'}>Home</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <Link to={'/about'}>About us</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <Link to={'/courses'}>Courses</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <Link to={'/trainers'}>Trainers</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <Link to={'/event'}>Events</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <Link to={'/web'}>Web Design</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <Link to={'/robotics'}>AI & Robotics</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <Link to={'/ethical_hacking'}>Ethical Hacking</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <Link to={'/game'}>Game Development</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <Link to={'/scratch'}>Scratch</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <Link to={'/info'}>Info Technology</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Branch Office</h4>
            <p>
              <ul>
                <li>
                577, Gold plaza opp treasure island mall M G road, Indore, M.P. Ph: 920-2220-930, 989-3435-788
                </li>
                <br />
                <li>
              B-24 ,Scheme no.71 Behind Ranjeet Hanuman Temple, Indore, M.P. Mob: 9893078853, 8871856277
              </li>
              <br />
              <li>
              117 Pragati Nagar, rajendra nagar, Opp Bhagat Singh Garden Ph: 920-2220-930, 989-3435-788
              </li>
              <br />
              <li>
                124-A, Silicon City, Near Club House, Row, Indore Mob: 9893078853 , Mob: 9202220930
              </li>
            </ul>
            </p>
         
          </div>
        </div>
      </div>
    </div>
    <div className="container d-md-flex py-4">
      <div className="me-md-auto text-center text-md-start">
   
       
         
          © All right reserved by genextcomputer.com
      
     
      </div>
      <div className="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" className="twitter">
          <i className="bx bxl-twitter" />
        </a>
        <a href="#" className="facebook">
          <i className="bx bxl-facebook" />
        </a>
        <a href="#" className="instagram">
          <i className="bx bxl-instagram" />
        </a>
        <a href="#" className="google-plus">
          <i className="bx bxl-skype" />
        </a>
        <a href="#" className="linkedin">
          <i className="bx bxl-linkedin" />
        </a>
      </div>
    </div>
  </footer>
  {/* End Footer */}
</>

    
    </>
}