import React from 'react'
import ProductList from '../components/product/ProductList'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ProductAddUpdate from '../components/product/ProductAddUpdate'
import { useSelector } from 'react-redux'

const Home = () => {
  const auth = useSelector((state) => state.auth)
  
  return (
    <>
      {auth.isLoggedIn && (
        <Container>
          <Row className='justify-content-center'>
            <Col xs lg="7">
              <ProductAddUpdate />
            </Col>
          </Row>
        </Container>
      )}
      
      <ProductList/>
    </>
  )
}

export default Home