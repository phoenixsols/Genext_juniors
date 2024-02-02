import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

export default function Web(){
    return<>
     <Nav/>
    <div className="breadcrumbs" data-aos="fade-in">
  <div className="container">
    <h2>Web Designing & WEB DESIGNING & DEVELOPMENT</h2>
    <p>
    Our web development training are most inclusive and impactful as it include web all based services{" "}
    </p>
  </div>
    </div>


    <section id="course-details" className="course-details">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-8">
          <img
            src="assets/img/webdesign.jpg"
            className="img-fluid"
            alt=""
          />
          <h3>WEB DESIGNING & DEVELOPMENT</h3>
          <p>
          Our web development training are most inclusive and impactful as it include web all based services

The web development training includes web design, web content development, client-side/server-side scripting & network security configuration, among other tasks. Due to Blog & Open sources, web technologies like HTML, CSS, WordPress, PHP & Web development more attracts the youngest.
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
             Designing Your Dream Website
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
            Coding Your Creations
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
            Explore Content Management Systems
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
            Share Your Masterpiece with the World
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
            Learn and Grow
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-9 mt-4 mt-lg-0">
        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Designing Your Dream Website</h3>
                <p className="fst-italic">
                Web designing is all about creating beautiful and user-friendly websites that people love to visit. From choosing colors and fonts to designing layouts and graphics, you'll have the chance to let your imagination run wild and bring your ideas to life. Whether you prefer sleek and modern designs or colorful and whimsical themes, the sky's the limit when it comes to designing your dream website.
                </p>
                {/* <p>
                  Et nobis maiores eius. Voluptatibus ut enim blanditiis atque
                  harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut
                  molestiae aut qui. Est repellat minima eveniet eius et quis
                  magni nihil. Consequatur dolorem quaerat quos qui similique
                  accusamus nostrum rem vero
                </p> */}
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
                <h3>Coding Your Creations</h3>
                <p className="fst-italic">
                Once you have your design in mind, it's time to bring it to life with coding! Web development is the process of writing code that tells the web browser how to display your website. Don't worry if you're new to coding – there are plenty of beginner-friendly languages and tools to help you get started. HTML and CSS are two essential languages for web development, and they're easy to learn with lots of fun tutorials and interactive resources available online.
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
                <h3>Explore Content Management Systems</h3>
                <p className="fst-italic">
                As you become more experienced in web development, you may want to explore content management systems (CMS) like WordPress or Wix. These platforms provide pre-built templates and tools to help you create and manage your website without having to write code from scratch. With a CMS, you can focus on designing and customizing your website's look and feel, while the platform takes care of the technical details behind the scenes.
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
                Share Your Masterpiece with the World
                </h3>
                <p className="fst-italic">
                Once your website is complete, it's time to share it with the world! There are plenty of options for publishing your website online, from free hosting platforms like GitHub Pages to paid hosting services like Bluehost or SiteGround. With just a few clicks, you can make your website accessible to anyone with an internet connection, allowing you to showcase your work and connect with people from all over the globe.
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
                <h3>Learn and Grow</h3>
                <p className="fst-italic">
                Web designing and development is a journey of continuous learning and growth. As you build and publish your own websites, you'll gain valuable skills in design, coding, problem-solving, and project management. Don't be afraid to experiment, make mistakes, and ask for help along the way – that's how you'll become a confident and skilled web designer and developer!
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
  <Footer/>
    
    </>
}