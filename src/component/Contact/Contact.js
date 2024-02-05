import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

export default function Contact(){
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
    return<>
    <Nav/>
    <div className="breadcrumbs" data-aos="fade-in">
  <div className="container">
    <h2>Contact Us</h2>
    {/* <p>
      Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id
      aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam
      consequatur laboriosam nemo harum praesentium.{" "}
    </p> */}
  </div>
</div>


<section id="contact" className="contact">
  <div data-aos="fade-up">
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29448.009963284385!2d75.7994467020035!3d22.690997559081513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc4855555555%3A0x7c92e5032a0b9681!2sGenext%20Computers%20N%20Spoken%20English!5e0!3m2!1sen!2sin!4v1706779948787!5m2!1sen!2sin"
  width={'100%'}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

  </div>
  <div className="container" data-aos="fade-up">
    <div className="row mt-5">
      <div className="col-lg-4">
        <div className="info">
          <div className="address">
            <i className="bi bi-geo-alt" />
            <h4>Location:</h4>
            <p>Kandhari Plaza, 6, Opposite Annapurna Temple, <br /> Sudama Nagar, Indore, Madhya Pradesh 452009</p>
          </div>
          <div className="email">
            <i className="bi bi-envelope" />
            <h4>Email:</h4>
            <a href="mailto:info@genextjuniors.com">&nbsp;&nbsp;&nbsp;info@genextjuniors.com</a>
            {/* <p>info@genextjuniors.com</p> */}
          </div>
          <div className="phone">
            <i className="bi bi-phone" />
            <h4>Call:</h4>
            <a href="tel:+91 9893078853">&nbsp;&nbsp;&nbsp;+91 9893078853</a> <br />
            <a href="tel:0731 407885">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0731 4078854</a>
  
          </div>
        </div>
      </div>
      <div className="col-lg-8 mt-5 mt-lg-0">
        <form
          action="forms/contact.php"
          method="post"
          role="form"
          className="php-email-form"
        >
          <div className="row">
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required=""
              />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required=""
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              required=""
            />
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows={5}
              placeholder="Message"
              required=""
              defaultValue={""}
            />
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<Footer/>
    
    
    </>
}