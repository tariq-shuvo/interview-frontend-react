import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <Container>
      <Row>
        <Col className='mt-5'>
            <h1>404 Not Found!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
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

export default NoPage