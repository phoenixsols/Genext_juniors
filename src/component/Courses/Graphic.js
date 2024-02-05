import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Languages from "../Home/Languages";

export default function Graphic(){
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
    return<>
     <Nav/>
    <div className="breadcrumbs" data-aos="fade-in">
  <div className="container">
    <h2>Graphic Designing</h2>
    <p>
    Hey there, young artist! Are you ready to explore the exciting world of graphic design? Get ready to unleash your creativity, experiment with colors and shapes, and bring your ideas to life in stunning detail. Whether you dream of designing posters, creating logos, or illustrating your own comics, graphic design is your ticket to endless possibilities. {" "}
    </p>
  </div>
    </div>


    <section id="course-details" className="course-details">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-8">
          <img
            src="assets/img/graphic.jpg "
            className="img-fluid w-100  h-100"
            alt=""
          />
          <h3>Explore the Elements of Design</h3>
          <p>
            QAt the heart of graphic design are the elements of design – the building blocks that designers use to create artwork. Learn about line, shape, color, texture, and space, and how these elements work together to create visually appealing compositions. Experiment with different combinations of elements to create mood, evoke emotion, and tell stories through your artwork.
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
             What is Graphic Design?
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
            Dive into the World of Typography
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
            Get Creative with Color
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
            Embrace Digital Tools and Software
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
            Share Your Creativity with the World
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-9 mt-4 mt-lg-0">
        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>What is Graphic Design?</h3>
                <p className="fst-italic">
                Graphic design is all about using images, colors, and typography to communicate ideas and messages visually. From eye-catching logos and stylish websites to captivating book covers and colorful illustrations, graphic design is everywhere you look. By learning about graphic design, you'll discover how to use design principles and tools to create artwork that not only looks great but also communicates effectively to your audience.
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
                <h3>Dive into the World of Typography</h3>
                <p className="fst-italic">
                Typography is the art of arranging and styling text, and it plays a crucial role in graphic design. Learn about different fonts, typefaces, and styles, and how they can be used to convey personality, tone, and meaning in your designs. Experiment with typography to create eye-catching headlines, readable body text, and stylish logos that make your designs stand out from the crowd.
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
                <h3>Get Creative with Color</h3>
                <p className="fst-italic">
                Color is one of the most powerful tools in a graphic designer's toolkit. Learn about color theory, the color wheel, and how to use color effectively in your designs. Explore different color palettes, experiment with shades and tints, and discover the psychology of color – how different colors can evoke different emotions and reactions in your audience. With a good understanding of color, you can create artwork that pops and grabs attention!
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
                Embrace Digital Tools and Software
                </h3>
                <p className="fst-italic">
                In today's digital age, graphic design is as much about pixels as it is about pencils. Explore digital drawing and painting tools like Adobe Photoshop, Illustrator, or Procreate, and discover how to create artwork digitally using a tablet or computer. Experiment with layers, brushes, and special effects to add depth and dimension to your designs, and watch your artwork come to life in ways you never thought possible.
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
                <h3>Share Your Creativity with the World</h3>
                <p className="fst-italic">
                Once your designs are complete, it's time to share them with the world! Whether you showcase your artwork online through social media, create a portfolio to share with friends and family, or even print your designs on posters or t-shirts, sharing your creativity is what graphic design is all about. Be proud of your work, and don't be afraid to show it off – you never know who might be inspired by your designs!
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