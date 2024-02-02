import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

export default function Game(){
 return<>
  <Nav/>
    <div className="breadcrumbs" data-aos="fade-in">
  <div className="container">
    <h2>Game Development</h2>
    <p>
    Are you ready to dive into the exciting world of game development? Get ready to unleash your creativity and bring your wildest imaginations to life! Game development is not just about playing games{" "}
    </p>
  </div>
    </div>


    <section id="course-details" className="course-details">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-8">
          <img
            src="assets/img/gamedevelopment.jpg"
            className="img-fluid"
            alt=""
          />
          <h3>Learn the Tools of the Trade</h3>
          <p>
          Just like a carpenter needs tools to build a house, a game developer needs tools to build a game. Fortunately, there are plenty of game development engines and software available to help you bring your vision to life. From industry-standard engines like Unity and Unreal Engine to beginner-friendly platforms like Scratch and GameMaker Studio, there's a tool out there for every skill level and project scope. So, roll up your sleeves and start experimenting with different tools to find the one that's right for you!
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
              Master the Art of Coding:
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
            Design, Create, Iterate
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
            Collaborate and Network
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
            Release and Share Your Creation
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
            Playtest and Polish
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-9 mt-4 mt-lg-0">
        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Master the Art of Coding:</h3>
                <p className="fst-italic">
                At Genext the heart of every great game is a solid foundation of code. Learning to code may seem daunting at first, but with practice and perseverance, you'll soon become a coding ninja! Start by learning the basics of programming languages like Python, C#, or JavaScript – these languages are widely used in the game development industry and will serve as valuable skills throughout your career. As you become more proficient, you can experiment with more advanced concepts like artificial intelligence, physics simulations, and procedural generation to take your games to the next level.
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
                <h3>Design, Create, Iterate</h3>
                <p className="fst-italic">
                Game development is an iterative process – it's all about designing, creating, and refining your game until it's just right. Start by sketching out your ideas on paper, creating prototypes to test your gameplay mechanics, and gathering feedback from friends, family, and fellow developers. Don't be afraid to make mistakes or scrap ideas that aren't working – every setback is an opportunity to learn and grow as a game developer.
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
                <h3>Collaborate and Network</h3>
                <p className="fst-italic">
                Game development is a collaborative effort – it's rare for a single person to create a game entirely on their own. That's why it's essential to collaborate with others, whether it's working with artists to create stunning visuals, musicians to compose epic soundtracks, or fellow developers to brainstorm ideas and solve problems together. Networking with other developers and participating in game jams, conferences, and online forums is also a great way to learn from others, share your work, and build connections within the industry.
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
                Release and Share Your Creation
                </h3>
                <p className="fst-italic">
                Congratulations, you've done it – your game is finally ready for the world to see! Whether you're publishing your game on a digital storefront like Steam or the App Store, sharing it on a web platform like itch.io, or distributing it through your own website, releasing your game is an exciting milestone in your game development journey. Be sure to promote your game through social media, press releases, and community forums to reach as many players as possible and share your creation with the world!
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
                <h3>Playtest and Polish</h3>
                <p className="fst-italic">
                Once your game is up and running, it's time to put it to the test! Gather a group of playtesters to try out your game and provide feedback on everything from gameplay mechanics and level design to graphics and user interface. Use this feedback to identify areas for improvement and make necessary adjustments to polish your game until it shines. Remember, even the best games go through multiple iterations before they're ready for release – so don't be afraid to iterate, iterate, iterate!
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