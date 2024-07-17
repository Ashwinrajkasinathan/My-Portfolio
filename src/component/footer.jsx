import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

const Footer = ({ footerPage }) => {
    return (
        <footer>
            <div className=' container-fluid p-4' style={{ backgroundColor: ' #a9c988' }}>
                <div className='row'>


                <div className='col-md-5 p-2'>
                        <h3>Contacts</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ut deserunt non tenetur esse eius atque? At veritatis, nihil voluptas fugiat minus tempore aperiam qui dolor facere nisi ipsam id perferendis. Nobis a veniam voluptatem incidunt eligendi non, eius eveniet quis illo cupiditate nulla corporis ipsum soluta maxime consectetur. Sequi.</p>
                        <div className='d-flex  gap-3 my-2'>
                        <Link> <i className="bi bi-facebook fs-5 text-dark"></i></Link>
                        <Link><i className="bi bi-whatsapp fs-5 text-dark"></i></Link>
                        <Link> <i className="bi bi-instagram fs-5 text-dark"></i></Link>
                        <Link> <i className="bi bi-github fs-5 text-dark"></i></Link>
                        <Link> <i className="bi bi-linkedin fs-5 text-dark"></i></Link>
                    </div>
                    </div>

                    <div className=' d-flex justify-content-center flex-column  col-md-3  '>
                        <h3>Useful Links</h3>
                        <p> <Link className='mx-2 text-light text-decoration-none' href="/"> <i className="bi bi-house mx-1 "></i>Home</Link></p>
                        <p><Link className='mx-1 text-light text-decoration-none' href="/about"> <i className="bi bi-person mx-1"></i>About</Link></p>

                        <p> <Link className='mx-2 text-light text-decoration-none' href="/project"><i className="bi bi-bag-check-fill mx-1"></i>Project</Link></p>
                        <p><Link className='mx-1 text-light text-decoration-none' href="/contact"> <i className="bi bi-person-lines-fill mx-2"></i>Contact</Link></p>
                       
                    </div>
                    <div className=' d-flex justify-content-center flex-column  col-md-4  p-2'>
                        <h3>Skills</h3>
                        <p> <Link className='mx-2 text-light text-decoration-none' href="">Responsive Website</Link></p>
                        <p><Link className='mx-2 text-light  text-decoration-none' href="">Web Developement</Link></p>
                        <p><Link className='mx-2 text-light text-decoration-none' href="">Web Design</Link></p>
                        <p> <Link className='mx-2 text-light text-decoration-none' href="">Services</Link></p>
                    </div>
                  
                </div>
                <p className='text-center'>copyright@Ashwin</p>
            </div>
          
        </footer>

    )
}

export default Footer;
