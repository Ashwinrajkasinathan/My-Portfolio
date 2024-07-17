import React from 'react'
import Footer from './footer'
import '../App.css'
import image from '../assets/images/about.webp';


const About = () => {
  return (
    <>
      <div>
        <section className=' container-fluid about' style={{ minHeight: "70vh", backgroundColor: 'beige', fontSize: '23px' }}>
          <div className='row'>
            <div className=' col-lg-5 col-md-6 col-sm-6 my-5'>
              <img className='about-image' src={image} alt="" />
            </div>
            <div className=' col-lg-7 col-md-6 col-sm-6 content ' >
              <h2 className=''>About Me</h2>
              <p className=' my-4'>
                Hi! I'm AShwin, a Frontend Developer skilled in React, Angular, and Next.js. I enjoy building interactive, user-friendly web applications that solve real-world problems. With a background , I have Six month of experience in developing high-quality, responsive websites. When I'm not coding, I love [hobbies or interests]. Let's connect and create something amazing together!
              </p>
              <div className='d-flex gap-4 my-3'>
                <button className='btn btn-outline-none bg-black text-light'>Hire Me</button>
                <a href="/assets/pdf/Ashwinresume.pdf" target="_blank" >
                  <button className="btn btn-outline-none bg-black text-light">Download CV</button>
                </a>
              </div>

            </div>
          </div>

        </section>

      </div>
      <div className=''>
        < Footer footerPage="home" />
      </div>
    </>
  )
}

export default About
