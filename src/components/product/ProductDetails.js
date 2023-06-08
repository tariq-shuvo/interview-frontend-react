import _ from 'lodash'
import React from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const ProductDetails = (props) => {
  const productInfo = useSelector((state) => state.products.info)
  return (
    <Modal show={props.show && (!productInfo.loading)} onHide={props.handleClose}>
        <Modal.Header>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!(_.isEmpty(productInfo)) && (
            <Table striped bordered hover size="sm">
                <tbody>
                  <tr>
                    <th>Title</th>
                    <td>{productInfo.data.title}</td>
                  </tr>
                  <tr>
                    <th>Price</th>
                    <td>{productInfo.data.price}</td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td>{productInfo.data.satus?'active':'inactive'}</td>
                  </tr>
                  <tr>
                    <th>Description</th>
                    <td>{productInfo.data.description}</td>
                  </tr>
                </tbody>
            </Table>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default ProductDetails