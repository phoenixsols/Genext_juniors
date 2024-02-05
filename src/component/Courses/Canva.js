import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Languages from "../Home/Languages";

export default function Canva(){
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
    return<>
    <Nav/>
    <div className="breadcrumbs" data-aos="fade-in">
  <div className="container">
    <h2>Design with Pro Canva</h2>
    <p>
    Canva Pro – your ultimate tool for creating stunning designs that stand out from the crowd. Whether you're designing posters, presentations, social media graphics, or anything in between, Canva Pro has everything you need to bring your ideas to life in style.{" "}
    </p>
  </div>
    </div>


    <section id="course-details" className="course-details">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-8">
          <img
            src="assets/img/canva.jpg"
            className="img-fluid"
            alt=""
          />
          <h3>Canva Pro Training</h3>
          <p>
          Canva Pro is a powerful design platform that makes it easy for anyone to create professional-quality graphics and visual content. With thousands of customizable templates, millions of high-quality photos and illustrations, and a user-friendly interface, Canva Pro puts the power of design right at your fingertips – no design experience required!
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
              Endless Templates, Endless Possibilities
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
            Make Your Designs Pop with Premium Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
            Collaborate Like a Pro
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
            Learn and Grow with Canva Pro
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
            Design Anywhere, Anytime
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-9 mt-4 mt-lg-0">
        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Endless Templates, Endless Possibilities</h3>
                <p className="fst-italic">
                With Canva Pro, you'll never run out of inspiration for your next project. Browse through thousands of ready-to-use templates for every occasion, from business cards and brochures to Instagram posts and YouTube thumbnails. Simply choose a template that catches your eye, customize it with your own text and images, and voila – you've got a beautiful design in minutes!
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
                <h3>Make Your Designs Pop with Premium Features</h3>
                <p className="fst-italic">
                As a Canva Pro user, you'll unlock a treasure trove of premium features and resources to take your designs to the next level. Access millions of premium photos, illustrations, and graphics to add a professional touch to your creations. Plus, enjoy advanced features like transparent backgrounds, custom fonts, and resizable designs – all included with your Canva Pro subscription.
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
                <h3>Collaborate Like a Pro</h3>
                <p className="fst-italic">
                Whether you're working on a group project or collaborating with clients, Canva Pro makes teamwork a breeze. Share your designs with teammates or clients, invite them to edit or leave comments, and keep track of changes in real-time. With Canva Pro's collaboration features, you can work together seamlessly, no matter where you are in the world.
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
                Learn and Grow with Canva Pro
                </h3>
                <p className="fst-italic">
                Whether you're a seasoned designer or just starting out, Canva Pro offers a wealth of resources to help you learn and grow. From tutorials and design courses to tips and tricks from industry experts, Canva Pro is your go-to destination for all things design. With Canva Pro by your side, the only limit to what you can create is your imagination!
                </p>
                <p>
                  Eaque consequuntur consequuntur libero expedita in voluptas.
                  Nostrum ipsam necessitatibus aliquam fugiat debitis quis
                  velit. Eum ex maxime error in consequatur corporis atque.
                  Eligendi asperiores sed qui veritatis aperiam quia a laborum
                  inventore
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
                <h3>Design Anywhere, Anytime</h3>
                <p className="fst-italic">
                With Canva Pro, you're not tied to your desktop – you can design on the go! Whether you're on your laptop, tablet, or smartphone, Canva Pro's cloud-based platform lets you access your designs from anywhere with an internet connection. So whether you're brainstorming ideas on the bus or putting the finishing touches on your masterpiece at home, Canva Pro has you covered.
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