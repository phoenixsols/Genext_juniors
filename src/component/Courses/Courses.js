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
      Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id
      aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam
      consequatur laboriosam nemo harum praesentium.{" "}
    </p>
  </div>
</div>
<Popular_courses/>
<Footer/>

</>

}