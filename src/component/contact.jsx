import React from 'react'
import Footer from './footer'
import '../App.css'
import { Card, Col, Row, Form } from 'react-bootstrap'


const Contact = () => {
  return (
    <>
      <div>
        <section className='' style={{ minHeight: "70vh", backgroundColor: 'beige' }}>
          <h3 className='contact-page text-center py-4'>Feel free to personalize the placeholders with your actual contact details </h3>
          <div className='container  mt-5 p-4'>
            <Card className='shadow bg-light' >
              <Row>
                <Col sm={12} md={6} className='p-5 my-5'>
                  <div className="responsive-map-container">
                    <iframe
                      title="Google Map"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7773.636373247092!2d80.14192200000002!3d13.047242099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1720794190768!5m2!1sen!2sin"
                      style={{ border: 0, width: '100%', minHeight: '300px' }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Col>
                <Col sm={12} md={6} >
                  <Form className='p-5'>
                    <h3 className='py-1'>Contacts</h3>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Label>MObile Number</Form.Label>
                      <Form.Control type="number" placeholder="Enter Your Number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter Your email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder=" Enter Your Password" />
                    </Form.Group>
                    <div className='d-flex justify-content-center '>
                      <button className='btn btn-outline-none bg-dark my-2 text-light'>Submit</button>
                    </div>

                  </Form>


                </Col>




              </Row>

            </Card>

          </div>
        </section>

      </div>
      <div className=''>
        < Footer footerPage="home" />
      </div>
    </>
  )
}

export default Contact
