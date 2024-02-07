import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaRegWindowClose,  } from "react-icons/fa";
import './nav.css'
export default function Nav() {
  const [show,setShow] = useState(false);
  const Menu = (props ) =>{
    return(<>

    <ul className={props.classVal}>

    <li onClick={()=>{setShow(false)}}>
      <Link to="/" className="nav-link scrollto active">
      Home
    </Link>
  </li>
  <li onClick={()=>{setShow(false)}}>
      <Link to="/about" className="nav-link scrollto ">
      About
    </Link>
  </li>
  <li onClick={()=>{setShow(false)}}>
      <Link to="/courses" className="nav-link scrollto ">
      Courses
    </Link>
  </li>
  <li onClick={()=>{setShow(false)}}>
      <Link to="/trainers" className="nav-link scrollto ">
      Trainers
    </Link>
  </li>
  <li onClick={()=>{setShow(false)}}>
      <Link to="/events" className="nav-link scrollto ">
      Events
    </Link>
  </li>
  {/* <li onClick={()=>{setShow(false)}}>
      <Link to="/pricing" className="nav-link scrollto ">
      Pricing
    </Link>
  </li> */}
  <li onClick={()=>{setShow(false)}}>
      <Link to="/contact" className="nav-link scrollto ">
      Contact
    </Link>
  </li>


  <li className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center navbtn" onClick={()=>{setShow(false)}}>
    <Link to="/courses" className='text-light'>Get Started</Link>
  </li> 
    </ul>
    </>)
  }
  
  
  return (
    <>
      <nav>
        <div className="nav_container">
          <div className="logo">
              <a href="/" className="">
                <h1>Genext Juniors</h1>
              </a>
            </div>
      
          {show?<Menu classVal="menu open"/>:<Menu classVal="menu"/>}

            <div className="icons" onClick={()=>{show?setShow(false):setShow(true)}}>
                {show?<FaRegWindowClose/>:<FaBars/>}
            </div>
        </div>
      </nav>
    </>
  )
}
