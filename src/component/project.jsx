import React from 'react'
import Footer from './footer'
import '../App.css'


import { Button, Card, Col, Row } from 'react-bootstrap'
import image from '../assets/images/image1.jpg';
import image1 from '../assets/images/portfolio.jpg';
import image2 from '../assets/images/ecommerce.jpg';
import image3 from '../assets/images/todolist.jpg';

const Project = () => {
  return (
    <>

      <section className='project' style={{ minHeight: "70vh", backgroundColor: 'beige' }}>

        <h1 className=' Project-heading text-center py-4'>Projects</h1>
        <div className='container mt-5 p-4'>
          <Row>
            <Col xs={12} sm={6} md={4} lg={3} className="d-flex gap-3">
              <Card className='card'>
                <Card.Img variant="top" src={image} style={{ height: '180px' }} className='cardimage' />
                <Card.Body>
                  <Card.Title>Durken Monkey Restaurant</Card.Title>
                  <Card.Text>
                    Dranken Monkey Restaurant opened On Thanks giving day 2020. Chef/Owner Ashwin baking pies and selling them to Restaurants and his neighbours out of small kitchens then today sucessfully running lot of branches.
                  </Card.Text>
                  <div className='d-flex justify-content-center align-items-center'>
                    <Button className='text-center' variant="primary">Read somewhere</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={4} lg={3} className="d-flex gap-3">
              <Card className='card'>
                <Card.Img variant="top" src={image1} style={{ height: '180px' }} className='cardimage' />
                <Card.Body>
                  <Card.Title>My Portfolio</Card.Title>
                  <Card.Text>
                    Developed using HTML, CSS, Bootstrap, and React.js, this project is a dynamic web application designed to [briefly describe its purpose or functionality], showcasing responsive design and interactive user interfaces.
                  </Card.Text>
                  <div className='d-flex justify-content-center align-items-center'>
                    <Button className='text-center' variant="primary">Read somewhere</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={4} lg={3} className="d-flex gap-3">
              <Card className='card'>
                <Card.Img variant="top" src={image2} style={{ height: '180px' }} className='cardimage' />
                <Card.Body>
                  <Card.Title>E_commerce</Card.Title>
                  <Card.Text>
                    Developed with HTML, CSS, Bootstrap, and React.js, this e-commerce platform offers a seamless shopping experience with responsive design, interactive product catalogs, and secure checkout functionalities.
                  </Card.Text>
                  <div className='d-flex justify-content-center align-items-center'>
                    <Button className='text-center' variant="primary">Read somewhere</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={4} lg={3} className="d-flex gap-3">
              <Card className='card' >
                <Card.Img variant="top" src={image3} style={{ height: '180px' }} className='cardimage' />
                <Card.Body >
                  <Card.Title>Todo-List</Card.Title>
                  <Card.Text>
                    This to-do list application, built with HTML, CSS, Bootstrap, and Angular, enables users to manage tasks efficiently with a clean and intuitive interface, featuring task creation, editing, and completion functionalities.
                  </Card.Text>
                  <div className='d-flex justify-content-center align-items-center'>
                    <Button className='text-center' variant="primary">Read somewhere</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>




      </section>


      <div className=''>
        < Footer footerPage="home" />
      </div>
    </>
  )
}

export default Project
