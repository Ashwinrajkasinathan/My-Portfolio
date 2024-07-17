import React from 'react';
import imageSrc from '../assets/images/ashwin.png';
import Footer from './footer';
import '../App.css'
import { Link } from 'react-router-dom';
import {useTypewriter,Cursor} from 'react-simple-typewriter'; 


const Home = () => {
    const [text]=useTypewriter({
        words:["React Developer","Web Developer","Angular Developer"],
        loop:0,
        typeSpeed:120,
        deleteSpeed:80,
    });
    return (
        <>
        <div className=' container-fluid py-5 home' style={{ backgroundColor:'beige',minHeight:"65vh"}}>
       
            <div className='row  mt-5'>
                
                <div className=' col-sm-6 col-md-5 d-flex justify-content-center my-5  '>
                    <img className='home-image ' src={imageSrc} alt="Description of the image"  />
                </div>
                <div className=' animate col-sm-6 col-md-7 d-flex flex-column justify-content-center align-item-center my-5 '>
                 
                   <p>Get Every Single Solutions</p>
                    <h1 className='heading-1'>Welcome to My Portfolio! </h1>
                    <h3 className='heading-2'>I am a <span>{text}</span> <span> <Cursor cursorStyle="<" /> </span> </h3>
                    <div className='d-flex  gap-3 my-2'>
                        <Link> <i className="bi bi-facebook fs-5 text-dark"></i></Link>
                        <Link><i className="bi bi-whatsapp fs-5 text-dark"></i></Link>
                        <Link> <i className="bi bi-instagram fs-5 text-dark"></i></Link>
                        <Link> <i className="bi bi-github fs-5 text-dark"></i></Link>
                        <Link> <i className="bi bi-linkedin fs-5 text-dark"></i></Link>
                    </div>
            
                    <div>
                        <Link  to="/project"><button className='btn btn-outline-none bg-dark text-light my-3 ' style={{ width: "200px" }}>Visit My Project</button></Link>
                    </div>
                   

                </div>

            </div>
           
           
           
        </div>
      <div className=''>
        < Footer footerPage="home"/>
      </div>
        
        
        </>
    );
   
};

export default Home;
