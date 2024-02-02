import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

export default function Course_details(){
    return<>
    <Nav/>
    <div className="breadcrumbs" data-aos="fade-in">
  <div className="container">
    <h2>Scratch</h2>
    <p>
     
Scratch is a widely-used visual programming language and online community developed by the Lifelong Kindergarten Group at the MIT Media Lab.{" "}
    </p>
  </div>
    </div>
    <>
  {/* ======= Cource Details Section ======= */}
  <section id="course-details" className="course-details">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-8">
          <img
            src="assets/img/scratch.png"
            className="img-fluid"
            alt=""
          />
          <h3>Visual Programming Environment</h3>
          <p>

          Scratch provides a block-based interface where users can drag and drop code blocks to create scripts. This visual approach makes it easy for beginners to understand programming concepts like loops, conditions, and variables without worrying about syntax errors.
          
Scratch is a widely-used visual programming language and online community developed by the Lifelong Kindergarten Group at the MIT Media Lab. It's designed to help beginners, particularly children, learn the basics of coding in a fun and interactive way. Here's some key information about Scratch game development software:
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
  {/* End Cource Details Section */}
</>

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
             Designed for Beginners
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
            Online Community
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
            Multimedia Integration
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
            Cross-Platform Compatibility
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
            Encourages Creativity and Problem-Solving
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-9 mt-4 mt-lg-0">
        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Designed for Beginners</h3>
                <p className="fst-italic">
                Scratch is specifically designed for beginners with little to no programming experience. Its intuitive interface and colorful blocks make it appealing and accessible to users of all ages.
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
                <h3>Online Community</h3>
                <p className="fst-italic">
                Scratch has a vibrant online community where users can share their projects, collaborate with others, and get feedback on their creations. This community aspect fosters creativity and encourages users to learn from each other.
                </p>
                {/* <p>
                  Ea ipsum voluptatem consequatur quis est. Illum error ullam
                  omnis quia et reiciendis sunt sunt est. Non aliquid
                  repellendus itaque accusamus eius et velit ipsa voluptates.
                  Optio nesciunt eaque beatae accusamus lerode pakto madirna
                  desera vafle de nideran pal
                </p> */}
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
                <h3>Multimedia Integration</h3>
                <p className="fst-italic">
                Users can incorporate various multimedia elements into their Scratch projects, including graphics, sounds, and animations. This allows for the creation of dynamic and engaging games and interactive experiences.
                </p>
                {/* <p>
                  Iure officiis odit rerum. Harum sequi eum illum corrupti culpa
                  veritatis quisquam. Neque necessitatibus illo rerum eum ut.
                  Commodi ipsam minima molestiae sed laboriosam a iste odio.
                  Earum odit nesciunt fugiat sit ullam. Soluta et harum
                  voluptatem optio quae
                </p> */}
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
                Cross-Platform Compatibility
                </h3>
                <p className="fst-italic">
                Scratch is available as both a web-based application and a downloadable offline editor, making it accessible across different devices and operating systems.
                </p>
                {/* <p>
                  Eaque consequuntur consequuntur libero expedita in voluptas.
                  Nostrum ipsam necessitatibus aliquam fugiat debitis quis
                  velit. Eum ex maxime error in consequatur corporis atque.
                  Eligendi asperiores sed qui veritatis aperiam quia a laborum
                  inventore
                </p> */}
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
                <h3>Encourages Creativity and Problem-Solving</h3>
                <p className="fst-italic">
                their creativity and imagination through programming. By designing and coding their own games, users develop critical thinking skills and learn how to solve problems in a logical and systematic way.
                </p>
                {/* <p>
                  Exercitationem nostrum omnis. Ut reiciendis repudiandae minus.
                  Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit
                  vero atque qui quibusdam amet. Occaecati sed est sint aut
                  vitae molestiae voluptate vel
                </p> */}
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