import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Event_blog from "./Event_blog";

export default function Events(){
    return<>
   
   
    <Nav/>

    <div className="breadcrumbs" data-aos="fade-in">
  <div className="container">
    <h2>Events</h2>
    <p>
    The more you praise and celebrate your life, the more there is in life to celebrate.{" "}
    </p>
  </div>
</div>
<Event_blog/>
<section id="events" className="events">
  <div className="container" data-aos="fade-up">
    <div className="row">
      <div className="col-md-4 d-flex align-items-stretch">
        <div className="card">
          <div className="card-img" style={{height:"250px"}}>
            <img src="assets/img/26_jan2.jpeg" alt="..." className="h-100 w-100" />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <a href="">Independence Day</a>
            </h5>
            <p className="fst-italic text-center">
              Saturday, August 15
            </p>
            <p className="card-text">
            We celebrate independence day contribute to the growth and progress of our beloved India.
             Their stories of courage and sacrifice inspire us to be better citizens and to
                stand up for justice and equality.
            </p>
          </div>
        </div>
      </div>
     
      <div className="col-md-4 d-flex align-items-stretch">
        <div className="card">
          <div className="card-img" style={{height:"250px"}}>
            <img src="assets/img/Navratri.jpeg" alt="..." className="h-100 w-100" />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <a href="">Navratri</a>
            </h5>
            <p className="fst-italic text-center">
            Friday, October 12
            </p>
            <p className="card-text">
            Navratri is a festival in which people joyously
             worship Goddess Durga. Indians celebrate this festival
              with a lot of joy and enthusiasm. Further, the meaning
               of 'Nav' is nine and 'Ratri' refers to night. Thus,
                the festival derives its name as we celebrate it over
                 a period of nine nights.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex align-items-stretch">
        <div className="card">
          <div className="card-img" style={{height:"250px"}}>
            <img src="assets/img/Teachers_day2.jpeg" alt="..."  />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <a href="">Teachers Day</a>
            </h5>
            <p className="fst-italic text-center">
              Thursday, September 5
            </p>
            <p className="card-text">
            Teachers' Day is a global celebration, observed in India on
             September 05 to honor Dr. Sarvapalli Radhakrishnan. Teachers
              play a vital role in shaping our future, recognizing and
               fostering our potential. They impart knowledge and life
                lessons, extending their impact beyond the classroom.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="events" className="events">
  <div className="container" data-aos="fade-up">
    <div className="row">
      <div className="col-md-4 d-flex align-items-stretch">
        <div className="card">
          <div className="card-img" style={{height:"250px"}}>
            <img src="assets/img/Ganesh.jpeg" alt="..." className="h-100 w-100" />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <a href="">Ganesh Chaturthi</a>
            </h5>
            <p className="fst-italic text-center">
              Monday, August 21
            </p>
            <p className="card-text">
            Ganesh Chaturthi stands out as one of the most anticipated and vibrant festivals in India.
            
            </p>
          </div>
        </div>
      </div>
     
      <div className="col-md-4 d-flex align-items-stretch">
        <div className="card">
          <div className="card-img" style={{height:"250px"}}>
            <img src="assets/img/Games.jpeg" alt="..." className="h-100 w-100" />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <a href="">Sports Activities</a>
            </h5>
            <p className="fst-italic text-center">
            Friday, February 16 
            </p>
            <p className="card-text">
              Study is important but Sports activities are also important fo students.
              This improves team-building abilities as well as decreases stress.
            Sport pertains to any form of competitive physical activity
             or game that aims to use, maintain or improve our physical ability.
             
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex align-items-stretch">
        <div className="card">
          <div className="card-img" style={{height:"250px"}}>
            <img src="assets/img/seminar1.jpeg" alt="..."  />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <a href="">Seminars</a>
            </h5>
            <p className="fst-italic text-center">
              Thursday, September 25
            </p>
            <p className="card-text">
            Students become more confident and independent.
             Attending a seminar has numerous benefits, including improving
              communication skills, gaining expert knowledge, networking with
               others and renewing motivation and confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<Footer/>
    
    
    
    
    
    </>
}