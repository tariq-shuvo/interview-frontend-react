import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import ProductDetails from './ProductDetails';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProductInfo, fetchSingleProductInfo } from '../../util/productOperation';

const ProductList = () => {
  const auth = useSelector((state) => state.auth)
  const productInfo = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)

  useEffect(()=>{
    dispatch(fetchAllProductInfo())
  }, [])

  const handleClose = () => setShow(false);
  const handleShow = (productID) => {
    dispatch(fetchSingleProductInfo(productID))
    setShow(true)
  };


  return (
    <>
      <Container>
        <Row>
          <Col className='mt-4'>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th className='text-center'><input type='checkbox'/></th>
                  <th className='text-center'>#</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {productInfo.products.length > 0 ? (
                  productInfo.products.map((productInfo, index)=>(
                    <tr key={index}>
                      <td className='text-center'><input type='checkbox'/></td>
                      <td className='text-center'>{index+1}</td>
                      <td>{productInfo.title}</td>
                      <td>{productInfo.price}</td>
                      <td>{productInfo.satus == true ? 'active':'inactive'}</td>
                      <td>
                        <Button variant="primary" size='sm' className='mr-2' onClick={()=>handleShow(productInfo._id)}>view</Button>
                        {auth.isLoggedIn && (
                          <>
                            <Button variant="success" size='sm' className='mr-2'>edit</Button>
                            <Button variant="danger" size='sm'>delete</Button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className='text-center' colSpan={6}>No data found.</td>
                  </tr>
                )}
                
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <ProductDetails show={show} handleClose={handleClose}/>
    </>
  )
}

export default ProductList