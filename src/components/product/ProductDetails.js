import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const ProductDetails = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default ProductDetails