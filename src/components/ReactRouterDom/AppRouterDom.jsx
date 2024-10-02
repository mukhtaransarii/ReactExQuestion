import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import CurrentPath from './CurrentPath.jsx'
import Contanct from './Contanct.jsx'
import Help from './Help.jsx'
export default function AppRouterDom(){

  return (
  <div className="bg-[#CDEA68] p-5 flex flex-col gap-5">
  <h5>03 React Router Dom</h5>
   <Router> 
      <CurrentPath />
      <div class="flex aspect-video max-w-[450px] bgShadow rounded-[8px] overflow-hidden">
            <Navbar />
              <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={<Contanct />} />
               <Route path="/help" element={<Help />} />
             </Routes>
         </div>
   </Router>
  </div>
  )
}
