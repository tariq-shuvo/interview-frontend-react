import React, { useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import ProductDetails from './ProductDetails';

const ProductList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container>
        <Row>
          <Col className='mt-4'>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th className='text-center'>#</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-center'>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <Button variant="primary" size='sm' className='mr-2' onClick={handleShow}>view</Button>
                    <Button variant="success" size='sm' className='mr-2'>edit</Button>
                    <Button variant="danger" size='sm'>delete</Button>
                  </td>
                </tr>
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