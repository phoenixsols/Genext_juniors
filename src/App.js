import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Courses from './component/Courses/Courses';
import Instructors from './component/Instructors/Instructors';
import Events from './component/Events/Events';
import Pricing from './component/Pricing/Pricing';
import Python from './component/Courses/Python';
import Robotics from './component/Courses/Robotics';
import Canva from './component/Courses/Canva';
import Game from './component/Courses/Game';
import Web from './component/Courses/Web';
import Ethical_Hacking from './component/Courses/Ethical_Hacking';
import Graphic from './component/Courses/Graphic';
import Coding from './component/Courses/Coding';
import Info from './component/Courses/Info';
import Procreate from './component/Courses/Procreate';
import Vedic from './component/Courses/Vedic';
import Scratch from './component/Courses/Scratch';


function App() {
  return (
   <Routes>
   <Route path='/' element={<Home/>}></Route>
   <Route path='/about' element={<About/>}></Route>
   <Route path='/courses' element={<Courses/>}></Route>
   <Route path='/trainers' element={<Instructors/>}></Route>
   <Route path='/events' element={<Events/>}></Route>
   <Route path='/pricing' element={<Pricing/>}></Route>
   <Route path='/contact' element={<Contact/>}></Route>
   <Route path='/scratch' element={<Scratch/>}></Route>
   <Route path='/python' element={<Python/>}></Route>
   <Route path='/robotics' element={<Robotics/>}></Route>
   <Route path='/canva' element={<Canva/>}></Route>
   <Route path='/game' element={<Game/>}></Route>
   <Route path='/web' element={<Web/>}></Route>
   <Route path='/ethical_hacking' element={<Ethical_Hacking/>}></Route>
   <Route path='/graphic' element={<Graphic/>}></Route>
   <Route path='/coding' element={<Coding/>}></Route>
   <Route path='/info' element={<Info/>}></Route>
   <Route path='/procreate' element={<Procreate/>}></Route>
   <Route path='/vedic' element={<Vedic/>}></Route>





   </Routes>
    
  );
}

export default App;
