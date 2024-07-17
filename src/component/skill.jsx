import React from 'react'
import Footer from './footer';
import '../App.css'
import { Card, Col, Row } from 'react-bootstrap';
import html from '../assets/images/html.jpg';
import css from '../assets/images/css3.png';
import javascript from '../assets/images/javascript.png';
import bootstrap from '../assets/images/bootsrap.png';
import react from '../assets/images/react.png';
import angular from '../assets/images/angular.png';
import mysql from '../assets/images/mysql.png';
import node from '../assets/images/node.png';

const skill = () => {
  return (
    <>
      <div className=' container-fluid py-5 skill-page' style={{ minHeight: "70vh", backgroundColor: 'beige', fontSize: '23px' }}>
        <h2 className='skill-page my-5 text-center'>Skills</h2>
        <Row className='gap-5 d-flex justify-content-center'>
          
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={html} style={{height:'230px'}} />
              
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={css}   style={{height:'230px'}}/>
              
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={javascript}  style={{height:'230px'}} />
              
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={bootstrap}  style={{height:'230px'}} />
              
            </Card>
            </Row>
            <Row className='gap-5 d-flex justify-content-center my-5'>
          
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={react}  style={{height:'230px'}} />
           
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={angular}  style={{height:'230px'}} />
           
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={mysql}  style={{height:'230px'}} />
           
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={node}  style={{height:'230px'}} />
           
          </Card>
          </Row>
           

          
        

       
      </div>



      <div className=''>
        < Footer footerPage="home" />
      </div>
    </>
  )
}

export default skill
