import Footer from "../Footer/Footer";
import Message from "../Home/Message";
import Nav from "../Nav/Nav";

export default function About(){
     return<>
    
    <Nav/>
    <>
  <div className="breadcrumbs" data-aos="fade-in">
    <div className="container">
      <h2>About Us</h2>
      <p>
       {" "}
      </p>
    </div>
  </div>
  {/* End Breadcrumbs */}
</>
   <Message/>
  

   <section id="pricing" className="pricing pt-0">
  <div className="container price" data-aos="fade-up">
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="box featured">
          <h3>CAREER OBJECTIVES</h3>
          <ul>
            <li>Now a days technologies is playing a very important role in each and every sector like engineering, aviation, medical science, aerospace, pharmaceutical etc. Web development, app development is one of the best training courses that you can choose as a promising career in the the future as a web or app developer for your children</li>
         <br />
          </ul>
          <div className="btn-wrap">
       
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
        <div className="box featured">
          <h3>OUR GOAL</h3>
        
          <ul>
            <li>Our goal is that we strive for excellence in your work by setting and exceeding goals. The superiority is meant to be better, with the goal of accomplishing better quality work. To excel by educating students to become exceptional. Or Our goal is to make your child an innovative mindset and they can achieve their goals as well as your goals.</li>
  <br />
          </ul>
          <div className="btn-wrap">
       
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
        <div className="box featured">
          <h3>OUR MISSION</h3>
        
          <ul>
            <li>“Innovation. Making things better for our world, we have to teach kids this innovative mindset. Set them up for success in THEIR future!”
At Genext Juniors the students will not learn only coding but also understand the proper use and importance of technology. To us, the ultimate goal of education is to spark a pursuit of knowledge in the child.</li>
  <br />
          </ul>
          <div className="btn-wrap">
          
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
        <div className="box featured">
        
          <h3>EXTRA ACTIVITIES</h3>
       
          <ul>
            <li>Genext Juniors being one of the most trusted institute since 2003 established by Mr, “Devendra Rathore” has come up with its first platform ever in history of India which grooms children from 6 to 16 in 360° . In our institute we not only developed your student in studies also developed in extra curriculum activities which help them to developed their personalities.</li>
            
          </ul>
          <div className="btn-wrap">
        
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer/>

    </>
}