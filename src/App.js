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


function App() {
  return (
   <Routes>
   <Route path='/' element={<Home/>}>Home</Route>
   <Route path='/about' element={<About/>}>About</Route>
   <Route path='/courses' element={<Courses/>}>Courses</Route>
   <Route path='/trainers' element={<Instructors/>}>Trainer</Route>
   <Route path='/events' element={<Events/>}>Events</Route>
   <Route path='/pricing' element={<Pricing/>}>Pricing</Route>
   <Route path='/contact' element={<Contact/>}>Contact</Route>



   </Routes>
    
  );
}

export default App;
