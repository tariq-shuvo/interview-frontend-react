import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col className='mt-5'>
            <h1>Contact Me!</h1>
            <p>
             <strong>Email: </strong><span><a href="mailto: tariq10043@gmail.com">tariq10043@gmail.com</a></span> 
            </p>
            <p>
             <strong>Contact No: </strong><span><a href="tel: +8801918322463">+8801918322463</a></span> 
            </p>
            <p className='mt-3'>
              <Link to='/'>
                <Button variant="primary">Back To Main</Button>
              </Link>
            </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact