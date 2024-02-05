import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Languages from "../Home/Languages";

export default function Procreate(){
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
    return<>
    
    <Nav/>
    <div className="breadcrumbs" data-aos="fade-in">
  <div className="container">
    <h2>Procreate</h2>
    <p>
    Get ready to dive into the magical world of Procreate – a powerful digital art app that puts the tools of professional artists right at your fingertips. Whether you love drawing, painting, or creating animations, Procreate has everything you need to bring your imagination to life in stunning detail.{" "}
    </p>
  </div>
    </div>


    <section id="course-details" className="course-details">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-8">
          <img
            src="assets/img/Procreate.jpg"
            className="img-fluid"
            alt=""
          />
          <h3>Let Your Creativity Soar with Procreate: The Ultimate Digital Art Playground!</h3>
          <p>
          Hey there, young artist! Are you ready to take your artwork to the next level and unleash your creativity like never before? Get ready to dive into the magical world of Procreate – a powerful digital art app that puts the tools of professional artists right at your fingertips. Whether you love drawing, painting, or creating animations, Procreate has everything you need to bring your imagination to life in stunning detail. So, grab your stylus and tablet, and let's embark on an epic artistic adventure with Procreate!
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
              What is Procreate?
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
            Explore a World of Brushes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
            Master the Art of Layers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
            Bring Your Art to Life with Animation
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
            Learn and Grow as an Artist
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-9 mt-4 mt-lg-0">
        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>What is Procreate?</h3>
                <p className="fst-italic">
                Procreate is a digital art app designed for artists of all ages and skill levels. Whether you're a beginner doodler or a seasoned illustrator, Procreate offers a wide range of tools and features to help you create beautiful artwork with ease. From realistic brushes and customizable brushes to advanced layering and animation tools, Procreate is like having a complete art studio in the palm of your hand.
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
                <h3>Explore a World of Brushes</h3>
                <p className="fst-italic">
                With Procreate, you can explore a vast library of brushes that mimic traditional art tools like pencils, pens, paints, and more. Experiment with different brushes, textures, and effects to create unique and expressive artwork that reflects your style and personality. Whether you're sketching characters, painting landscapes, or adding the finishing touches to your masterpiece, Procreate's brushes are sure to inspire your creativity.
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
                <h3>Master the Art of Layers</h3>
                <p className="fst-italic">
                Layers are like transparent sheets of paper that you can stack on top of each other to create complex artwork. With Procreate's advanced layering system, you can easily organize your artwork, make changes without affecting the rest of your drawing, and add depth and dimension to your creations. Whether you're adding details, adjusting colors, or creating special effects, layers give you the freedom to experiment and express yourself like never before.
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
                Bring Your Art to Life with Animation
                </h3>
                <p className="fst-italic">
                Want to make your artwork move and come alive? With Procreate's animation tools, you can create stunning animations and motion graphics with ease. Whether you're animating characters, adding special effects, or creating frame-by-frame animations, Procreate's intuitive animation timeline makes it easy to bring your ideas to life and tell captivating stories through animation.
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
                <h3>Learn and Grow as an Artist</h3>
                <p className="fst-italic">
                With Procreate, the only limit to what you can create is your imagination. Whether you're drawing, painting, animating, or experimenting with new techniques, Procreate offers endless opportunities for learning and growth as an artist. Take advantage of Procreate's tutorials, community forums, and online resources to expand your skills, connect with other artists, and take your artwork to new heights.
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