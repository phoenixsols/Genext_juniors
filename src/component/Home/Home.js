import Event_blog from "../Events/Event_blog";
import Events from "../Events/Events";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Corosale from "./Corosale";
import Languages from "./Languages";
import Message from "./Message";
import Popular_courses from "./Popular_courses";
import Trainer from "./Trainer";



export default function Home(){
    return<>
    <Nav/>
    <Corosale/>
    <Message/>
    <Languages/>
    <Popular_courses/>
    <Trainer/>
    <Event_blog/>
    <Footer/>
    </>
}