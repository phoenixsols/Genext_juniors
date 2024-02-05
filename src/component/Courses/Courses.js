import Footer from "../Footer/Footer";
import Popular_courses from "../Home/Popular_courses";
import Nav from "../Nav/Nav";

export default function Courses(){
return<>

<Nav/>

<div className="breadcrumbs" data-aos="fade-in">
  <div className="container">
    <h2>Courses</h2>
    <p>
    “The more that you read, the more things you will know."{" "}
    </p>
  </div>
</div>
<Popular_courses/>
<Footer/>

</>

}