import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

export default function Python(){
    return<>
    <Nav/>
    <div className="breadcrumbs" data-aos="fade-in">
  <div className="container">
    <h2>Python</h2>
    <p>
    Hey there, future coder! Have you ever wanted to learn how to make your computer do cool stuff, like make games, draw pictures, or even talk to you? Well, get ready to meet your new best friend: Python!{" "}
    </p>
  </div>
    </div>


    <section id="course-details" className="course-details">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-8">
          <img
            src="assets/img/python.webp"
            className="img-fluid"
            alt=""
          />
          <h3>Let's Get Creative with Python!</h3>
          <p>
          With Python, the sky's the limit when it comes to creativity. You can use Python to create your own games, animations, and stories that you can share with your friends and family. Whether you want to design a virtual pet, build a maze game, or even create your own superhero adventure, Python has got you covered!
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
              Easy as Pie
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
            Join the Python Party
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
            Let's Code Together!
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
            Explore and Experiment
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
            Python is Your Creative Playground
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-9 mt-4 mt-lg-0">
        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Easy as Pie</h3>
                <p className="fst-italic">
                Python is known for its simplicity and readability, which makes it a breeze to learn – even for kids! Instead of typing out long and complicated commands, you'll use simple words and symbols to tell your computer what to do. Plus, Python comes with lots of helpful tools and resources, like colorful graphics and interactive tutorials, to help you along the way.
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
                <h3>Join the Python Party</h3>
                <p className="fst-italic">
                Did you know that Python is used by people all over the world, from scientists and engineers to artists and musicians? By learning Python, you'll be joining a global community of creative thinkers and problem solvers who use code to make the world a better place. Who knows – maybe you'll even become the next big Python superstar!
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
                <h3>Let's Code Together!</h3>
                <p className="fst-italic">
                Ready to dive into the exciting world of Python? Grab your computer (or tablet) and let's get started! There are tons of fun and free resources available online to help you learn Python, including interactive coding websites, video tutorials, and even online coding camps just for kids. So what are you waiting for? Let's start coding and make some magic happen!
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
                Explore and Experiment  
                </h3>
                <p className="fst-italic">
                The best part about learning Python is that there are no limits to what you can create. Don't be afraid to try new things, make mistakes, and experiment with different ideas. That's how you'll learn and grow as a coder – by exploring the endless possibilities of Python and unleashing your creativity!
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
                <h3>Python is Your Creative Playground</h3>
                <p className="fst-italic">
                Imagine Python as your own creative playground where you can bring your wildest ideas to life! Want to make a game where you dodge asteroids in space? With Python, you can do it! How about creating a virtual pet that responds to your commands? Python makes it possible! You're the boss, and Python is your trusty sidekick, ready to help you turn your imagination into reality.
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