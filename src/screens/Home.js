import React, { useState } from 'react'
import ProductList from '../components/product/ProductList'
import { Col, Container, Row } from 'react-bootstrap'
import ProductAddUpdate from '../components/product/ProductAddUpdate'
import { useSelector } from 'react-redux'

const Home = () => {
  const auth = useSelector((state) => state.auth)
  const [productUpdate, setProductUpdateInfo] = useState({
    isVisible: false,
    productData: null,
    isUpdate: false
  })

  return (
    <>
      {auth.isLoggedIn && (
        <Container>
          <Row className='justify-content-center'>
            <Col xs lg="7">
              {productUpdate.isVisible && <ProductAddUpdate productUpdate={productUpdate} setProductUpdateInfo={setProductUpdateInfo}/>}
            </Col>
          </Row>
        </Container>
      )}
      
      <ProductList productUpdate={productUpdate} setProductUpdateInfo={setProductUpdateInfo}/>
    </>
  )
}

export default Home