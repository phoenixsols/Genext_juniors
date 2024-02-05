import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Trainer from "../Home/Trainer";
import Nav from "../Nav/Nav";

export default function Instructors(){
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
    return<>
    <Nav/>
    <div className="breadcrumbs" data-aos="fade-in">
  <div className="container">
    <h2>Trainers</h2>
    <p>
      Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id
      aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam
      consequatur laboriosam nemo harum praesentium.{" "}
    </p>
  </div>
</div>
    <Trainer/>
    <Footer/>
    </>
}