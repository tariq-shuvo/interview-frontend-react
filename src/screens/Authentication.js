import React from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'

const Authentication = () => {
  return (
    <>
      <Container className='mt-5'>
        <Row className='justify-content-center'>
          <Col xs lg="8">
            <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
              <Tab eventKey="login" title="Login">
                <Row className='justify-content-center'>
                  <Col xs lg="11">
                    <Login />
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="register" title="Register">
              <Row className='justify-content-center'>
                  <Col xs lg="11">
                    <Register />
                  </Col>
                </Row>
              </Tab>
            </Tabs>          
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Authentication