import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Languages from "../Home/Languages";

export default function Vedic(){
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
    return<>
     <Nav/>
    <div className="breadcrumbs" data-aos="fade-in">
  <div className="container">
    <h2>Vedic Maths</h2>
    <p>
    Vedic Maths has fun and easy-to-learn tricks that will make you a master of mental math in no time. So, grab your pencil and paper, and let's dive into the fascinating world of Vedic Maths!{" "}
    </p>
  </div>
    </div>


    <section id="course-details" className="course-details">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-8">
          <img
            src="assets/img/vadic.jpg"
            className="img-fluid w-100 " 
            alt=""
          />
          <h3>Discover the Magic of Vedic Maths: Fun Tricks for Fast Calculations!</h3>
          <p>
          Hey there, young mathematician! Are you ready to unlock the secrets of Vedic Maths and become a math wizard? Get ready to amaze your friends, impress your teachers, and solve math problems faster than you ever thought possible. Whether you're adding numbers, multiplying digits, or finding square roots, Vedic Maths has fun and easy-to-learn tricks that will make you a master of mental math in no time. So, grab your pencil and paper, and let's dive into the fascinating world of Vedic Maths!
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
             What is Vedic Maths?
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
            Speedy Addition and Subtraction
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
            Multiplication Magic
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
            Practice Makes Perfect
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
            Have Fun with Math
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-9 mt-4 mt-lg-0">
        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>What is Vedic Maths?</h3>
                <p className="fst-italic">
                Vedic Maths is an ancient system of mathematics that originated in India thousands of years ago. Based on ancient Vedic scriptures, Vedic Maths offers simple and efficient techniques for solving math problems mentally and quickly. By learning Vedic Maths, you can perform complex calculations with ease and confidence, without the need for calculators or written calculations.
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
                <h3>Speedy Addition and Subtraction</h3>
                <p className="fst-italic">
                With Vedic Maths, you can add and subtract numbers faster than ever before! Learn techniques like "Vertically and Crosswise" and "All from 9 and the Last from 10" to perform addition and subtraction with lightning speed. These tricks help you break down large numbers into smaller, more manageable parts, making it easier to perform mental calculations in your head.
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
                <h3>Multiplication Magic</h3>
                <p className="fst-italic">
                Say goodbye to long multiplication tables – with Vedic Maths, you can multiply numbers in seconds! Techniques like "Multiplication by Base" and "Nikhilam Sutra" allow you to multiply digits effortlessly, even for large numbers. By using clever shortcuts and patterns, you can solve multiplication problems mentally and impress everyone with your lightning-fast math skills.
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
                Practice Makes Perfect
                </h3>
                <p className="fst-italic">
                Like any skill, mastering Vedic Maths takes practice and patience. Start by practicing simple techniques and gradually work your way up to more complex problems. Challenge yourself with puzzles, quizzes, and real-life scenarios to put your Vedic Maths skills to the test. The more you practice, the faster and more confident you'll become in your mental math abilities.
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
                <h3>Have Fun with Math</h3>
                <p className="fst-italic">
                Most importantly, remember to have fun with math! Vedic Maths is not just about solving problems – it's about exploring the beauty and elegance of mathematics and discovering the joy of learning. Experiment with different techniques, make mistakes, and celebrate your successes along the way. With Vedic Maths, every math problem is an opportunity for adventure and discovery!
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