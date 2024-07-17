import { useState } from 'react'
import './App.css'
import Navigation from './component/navigation';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import Project from './component/project';
import Skill from './component/skill';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './component/footer';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
       
      <BrowserRouter>
      <Navigation/>
      
      
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/skill" element={<Skill/>} />
          
         
          



        </Routes>
       



      </BrowserRouter>


    </>

  );
}

export default App;
