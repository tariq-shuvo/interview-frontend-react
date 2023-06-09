import React, { useEffect } from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserInfoData } from '../util/authUser'
import { useNavigate } from 'react-router-dom'

const Authentication = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(auth.isLoggedIn){
      if(auth.user?.token){
        localStorage.setItem('token', auth.user.token);
      }
      dispatch(fetchUserInfoData(auth.user))
      navigate("/")
    }
  }, [auth, dispatch, navigate]);

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