import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Languages from "../Home/Languages";

export default function Info(){
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
    return<>
     <Nav/>
    <div className="breadcrumbs" data-aos="fade-in">
  <div className="container">
    <h2>Info Technology</h2>
    <p>
    Hey there, future tech wizard! Are you ready to explore the amazing world of Information Technology (IT)? Get ready to unlock the secrets of computers, dive into the wonders of the internet, and discover the magic behind all the gadgets and gizmos that make our digital world go round.{" "}
    </p>
  </div>
    </div>


    <section id="course-details" className="course-details">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-8">
          <img
            src="assets/img/Nodejs.jpg"
            className="img-fluid"
            alt=""
          />
          <h3>Explore the Basics of Computing</h3>
          <p>
          At the heart of Information Technology is the computer – a powerful machine that can perform a wide range of tasks, from crunching numbers and playing music to browsing the web and editing photos. Learn about the different parts of a computer, how they work together, and the basics of operating systems and software. With a solid understanding of computing fundamentals, you'll be well-equipped to tackle more advanced concepts and projects down the road.
          </p>
        </div>
        <div className="col-lg-4">
          <div className="course-info d-flex justify-content-between align-items-center">
            <h5>Trainer</h5>
            <p>
              <a href="#">Walter White</a>
            </p>
          </div>
          <div className="course-info d-flex justify-content-between align-items-center">
            <h5>Course Fee</h5>
            <p>$165</p>
          </div>
          <div className="course-info d-flex justify-content-between align-items-center">
            <h5>Available Seats</h5>
            <p>30</p>
          </div>
          <div className="course-info d-flex justify-content-between align-items-center">
            <h5>Schedule</h5>
            <p>5.00 pm - 7.00 pm</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="cource-details-tabs" className="cource-details-tabs">
  <div className="container" data-aos="fade-up">
    <div className="row">
      <div className="col-lg-3">
        <ul className="nav nav-tabs flex-column">
          <li className="nav-item">
            <a
              className="nav-link active show"
              data-bs-toggle="tab"
              href="#tab-1"
            >
             What is Information Technology?
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
            Dive into the Internet
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
            Get Hands-On with Coding
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
            Explore Exciting Career Paths
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
            Stay Curious and Keep Learning
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-9 mt-4 mt-lg-0">
        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>What is Information Technology?</h3>
                <p className="fst-italic">
                Information Technology, or IT for short, is all about using computers, software, and networks to store, process, and share information. From smartphones and laptops to websites and video games, IT touches every aspect of our daily lives and shapes the way we work, play, and communicate with others. By learning about IT, you'll gain valuable skills that will help you navigate the digital world and unleash your creativity in new and exciting ways.
                </p>
             
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img
                  src="assets/img/course-details-tab-1.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-2">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Dive into the Internet</h3>
                <p className="fst-italic">
                Ever wonder how you can watch videos, play games, and chat with friends from anywhere in the world? It's all thanks to the internet – a vast network of computers and servers that connects billions of people around the globe. Learn about the history of the internet, how it works, and the importance of staying safe and respectful online. With the internet as your playground, the possibilities for learning, creativity, and exploration are endless!
                </p>
            
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img
                  src="assets/img/course-details-tab-2.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-3">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Get Hands-On with Coding</h3>
                <p className="fst-italic">
                Want to build your own website, create a mobile app, or program a robot to do your chores? Coding is the key! Coding is like giving instructions to a computer to tell it what to do, and there are lots of fun and easy-to-learn programming languages for kids like you. Start with visual programming languages like Scratch or Blockly, then gradually work your way up to text-based languages like Python or JavaScript. With coding skills in your toolkit, you can turn your ideas into reality and create amazing projects that amaze and inspire others.
                </p>
             
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img
                  src="assets/img/course-details-tab-3.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-4">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>
                Explore Exciting Career Paths
                </h3>
                <p className="fst-italic">
                Did you know that IT is one of the fastest-growing industries in the world? From software development and cybersecurity to digital marketing and game design, there are countless career paths and opportunities waiting for you in the world of Information Technology. Whether you dream of working at a tech company, starting your own business, or making a difference in your community, IT can open doors to a world of exciting possibilities and endless adventures.
                </p>
              
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img
                  src="assets/img/course-details-tab-4.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-5">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Stay Curious and Keep Learning</h3>
                <p className="fst-italic">
                The world of Information Technology is vast and ever-changing, so there's always something new to learn and explore. Stay curious, ask questions, and never stop challenging yourself to learn and grow. Whether you're tinkering with gadgets, experimenting with new software, or attending tech camps and workshops, every experience is an opportunity to expand your knowledge and unleash your inner tech genius.
                </p>
              
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img
                  src="assets/img/course-details-tab-5.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Languages/>
  <Footer/>
    
    
    </>
}