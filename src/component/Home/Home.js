import { useEffect } from "react";
import Event_blog from "../Events/Event_blog";
import Events from "../Events/Events";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Corosale from "./Corosale";
import Gallery from "./Gallery";
import Languages from "./Languages";
import Message from "./Message";
import Popular from "./Popular";
import Popular_courses from "./Popular_courses";
import Trainer from "./Trainer";



export default function Home(){
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return<>
    <Nav/>
    <Corosale/>
    <Message/>
    <Languages/>
    <Popular/>
    <Trainer/>
    <Event_blog/>
    <Gallery/>
    <Footer/>
    </>
}