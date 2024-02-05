import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Languages from "../Home/Languages";

export default function Ethical_Hacking(){
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
    return<>
     <Nav/>
    <div className="breadcrumbs" data-aos="fade-in">
  <div className="container">
    <h2>Ethical Hacking</h2>
    <p>
    Hey there, young cybersecurity enthusiast! Are you ready to embark on an exciting journey into the world of ethical hacking? Get ready to unleash your curiosity, sharpen your problem-solving skills, and become a cyberhero who protects the digital world from cyber threats.{" "}
    </p>
  </div>
    </div>


    <section id="course-details" className="course-details">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-8">
          <img
            src="assets/img/hacking.jpg"
            className="img-fluid w-100 "
            alt=""
          />
          <h3>Become a Cyberhero with Ethical Hacking: Safeguarding the Digital World, One Code at a Time!</h3>
          <p>
          Ethical hacking, also known as penetration testing or pen testing, is legally breaking into computers and devices to test an organization’s defenses. It’s among the most exciting IT jobs any person can be involved in. You are literally getting paid to keep up with the latest technology and get to break into computers without the threat of being arrested. Companies engage ethical hackers to identify vulnerabilities in their systems. From the penetration tester’s point of view, there is no downside: If you hack in past the current defenses, you’ve given the client a chance to close the hole before an attacker discovers it. If you don’t find anything, your client is even happier because they now get to declare their systems “secure enough that even paid hackers couldn’t break into it.” Win-win! We here not only develop your skills by teaching it to you jhow it works but also with quality assurance we teach you the Hidden Techniques and Explore Better Ways
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
             What is Ethical Hacking
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
            Learn the Tools of the Trade
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
            Play the Role of a White Hat Hacker
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
            Practice Safe and Responsible Hacking
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
            Explore Exciting Career Opportunities
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-9 mt-4 mt-lg-0">
        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>What is Ethical Hacking?</h3>
                <p className="fst-italic">
                Ethical hacking is like being a digital detective – it's about using your computer skills to find and fix security weaknesses before cybercriminals can exploit them. Just like a locksmith who tests the locks to make sure they're secure, ethical hackers use their knowledge of computer systems and networks to identify vulnerabilities and suggest ways to strengthen security defenses.
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
                <h3>Learn the Tools of the Trade</h3>
                <p className="fst-italic">
                Ethical hacking requires a good understanding of computer systems, networks, and programming languages. Learn about operating systems like Windows and Linux, networking concepts like IP addresses and routers, and programming languages like Python and JavaScript. These skills will help you understand how computers and networks work and how cybercriminals exploit vulnerabilities to gain unauthorized access.
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
                <h3>Play the Role of a White Hat Hacker</h3>
                <p className="fst-italic">
                In the world of ethical hacking, there are three types of hackers: white hat hackers, black hat hackers, and grey hat hackers. White hat hackers, also known as ethical hackers, use their skills to help organizations improve their security defenses and protect against cyber attacks. By playing the role of a white hat hacker, you'll learn how to think like a cybercriminal and anticipate potential threats before they happen.
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
                Practice Safe and Responsible Hacking
                </h3>
                <p className="fst-italic">
                Ethical hacking is all about following rules and ethical guidelines to ensure that you're using your skills for good. Always get permission before testing or hacking into computer systems or networks, and never engage in any activities that could cause harm or disrupt services. Remember, ethical hackers are the good guys – so always act responsibly and with integrity.
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
                <h3>Explore Exciting Career Opportunities</h3>
                <p className="fst-italic">
                Did you know that ethical hacking is one of the fastest-growing fields in cybersecurity? From cybersecurity analysts and penetration testers to security consultants and ethical hacking trainers, there are countless career opportunities waiting for ethical hackers like you. Whether you dream of working for a tech company, a government agency, or a cybersecurity firm, ethical hacking skills are in high demand and can open doors to a world of exciting possibilities.
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