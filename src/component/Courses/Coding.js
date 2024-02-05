import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Languages from "../Home/Languages";

export default function Coding(){
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
    return<>
     <Nav/>
    <div className="breadcrumbs" data-aos="fade-in">
  <div className="container">
    <h2>Coding</h2>
    <p>
    Hey there, future coder! Are you ready to embark on an exciting journey into the world of programming? Get ready to unleash your creativity, solve puzzles, and bring your ideas to life with the power of code.{" "}
    </p>
  </div>
    </div>


    <section id="course-details" className="course-details">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-8">
          <img
            src="assets/img/kid2.jpg"
            className="img-fluid w-100 h-50"
            alt=""
          />
          <h3>Start Coding with Scratch:</h3>
          <p>
          Scratch is a fun and easy-to-use programming language designed just for kids like you! With Scratch, you can create interactive stories, games, and animations using colorful blocks that snap together like puzzle pieces. No typing or syntax errors to worry about – just drag and drop blocks to create code that makes your characters move, jump, and dance across the screen.
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

  <section id="cource-details-tabs" className="cource-details-tabs ">
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
             What is Coding?
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
            Explore Coding Concepts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
            Get Creative with Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
            Join the Coding Community
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
            Keep Learning and Exploring
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-9 mt-4 mt-lg-0">
        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>What is Coding?</h3>
                <p className="fst-italic">
                Coding is like giving instructions to your computer to tell it what to do. Just like you follow a recipe to bake cookies or play a game with rules, coding is a set of instructions that tells your computer how to perform tasks. By learning to code, you can become the master of your own digital world, creating programs and projects that amaze and inspire others.
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
                <h3>Explore Coding Concepts</h3>
                <p className="fst-italic">
                As you become more familiar with Scratch, you'll start to learn important coding concepts like loops, conditionals, and variables. Loops allow you to repeat actions over and over again, while conditionals let you make decisions based on certain conditions. Variables are like containers that hold information, allowing you to keep track of scores, lives, and other important data in your games and projects.
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
                <h3>Get Creative with Projects</h3>
                <p className="fst-italic">
                The best way to learn coding is by doing – so why not get creative and start working on your own projects? Whether you want to create a platformer game, design a virtual pet, or animate your favorite characters, Scratch gives you the tools and freedom to bring your ideas to life. Don't be afraid to experiment, make mistakes, and try new things – that's how you'll learn and grow as a coder!
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
                Join the Coding Community
                </h3>
                <p className="fst-italic">
                Coding is more fun when you do it with others! Join the global Scratch community to share your projects, collaborate with other coders, and get feedback on your work. You'll be amazed at what you can learn from others and inspired by the incredible projects created by kids just like you. Plus, you'll make new friends who share your passion for coding and creativity!
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
                <h3>Keep Learning and Exploring</h3>
                <p className="fst-italic">
                The world of coding is vast and ever-changing, so there's always something new to learn and explore. Whether you're diving into a new programming language, experimenting with a new project, or attending a coding camp or workshop, never stop challenging yourself and pushing the boundaries of what you can create with code. With your creativity, curiosity, and determination, the sky's the limit!
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