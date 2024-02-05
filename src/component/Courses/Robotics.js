import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Languages from "../Home/Languages";

export default function Robotics(){
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
    return<>
     
     
     
     <Nav/>
    <div className="breadcrumbs" data-aos="fade-in">
  <div className="container">
    <h2>AI & Robotics</h2>
    <p>
    Artificial Intelligence (AI) and Robotics are two cutting-edge fields that are rapidly evolving and increasingly intersecting. As technology advances, the integration of AI into robotics has revolutionized various industries, from manufacturing and healthcare to transportation and entertainment{" "}
    </p>
  </div>
    </div>


    <section id="course-details" className="course-details">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-8">
          <img
            src="assets/img/robotics.jpg"
            className="img-fluid"
            alt=""
          />
          <h3>The Future of AI & Robotics</h3>
          <p>
          The future of AI and robotics holds tremendous promise for innovation and progress across various domains. As AI algorithms become more sophisticated and robotics hardware becomes more advanced, we can expect to see even greater integration and synergy between these two fields. From self-driving cars and delivery drones to intelligent home assistants and robotic companions, AI-powered robots will increasingly become part of our everyday lives, transforming how we work, live, and interact with the world around us.
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
              Robo-Friends Everywhere
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
            Fun and Learning with Robot Buddies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
            Robots and You
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
            Let's Imagine Together
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
            Creative Robot Artists
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-9 mt-4 mt-lg-0">
        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Robo-Friends Everywhere</h3>
                <p className="fst-italic">
                Imagine having a robot friend to help you clean your room, play games, or even learn new things! AI-powered robots are becoming more like friendly helpers, and they can do all sorts of cool stuff, like helping out in the kitchen or playing your favorite games with you.
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
                <h3>Fun and Learning with Robot Buddies</h3>
                <p className="fst-italic">
                Have you ever wanted to learn how to code? With AI-powered robots, you can! There are special robots designed just for kids to learn coding in a fun and interactive way. You can teach your robot friend to dance, solve puzzles, or even navigate through mazes – the possibilities are endless!
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
                <h3>Robots and You</h3>
                <p className="fst-italic">
                Have you ever wondered what it would be like to have a robot friend of your own? With AI and robotics, the future is full of exciting possibilities! Whether it's playing games, exploring new places, or learning new things, robots can be our helpful companions every step of the way.
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
                Let's Imagine Together
                </h3>
                <p className="fst-italic">
                Close your eyes and imagine a world where robots are our friends and helpers, making our lives easier and more fun. With your creativity and imagination, you can dream up all sorts of amazing adventures and inventions that AI-powered robots could be a part of!
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
                <h3>Creative Robot Artists</h3>
                <p className="fst-italic">
                Did you know that robots can be artists too? With AI-powered robots, you can explore your creative side and make amazing works of art together! These artistic robots can paint pictures, create music, and even dance to their own beats. It's like having your very own robot art studio right at your fingertips!
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