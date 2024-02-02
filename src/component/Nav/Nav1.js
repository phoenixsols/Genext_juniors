import { Link } from "react-router-dom";
export default function Nav1(){
    return<>
    <>
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto">
        <Link to={'/'}>Genext Juniors
       </Link>
      </h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li>
            <Link to={'/'} >
              Home
              </Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/courses'}>Courses</Link>
          </li>
          <li>
            <Link to={'/trainers'}>Trainers</Link>
          </li>
          <li>
            <Link to={'/events'}>Events</Link>
          </li>
          <li>
            <Link to={'/pricing'}>Pricing</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
      <Link to={'courses'} className="get-started-btn">
        Get Started
      </Link>
    </div>
  </header>
  {/* End Header */}
</>

    
    
    
    </>
}