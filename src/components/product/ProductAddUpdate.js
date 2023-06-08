import React from 'react'
import { Button, Form } from 'react-bootstrap'

const ProductAddUpdate = () => {
  return (
    <>
      <Button variant="danger" type="button" size='sm' className='mt-3 float-right'>
        Close
      </Button>
      <Form className='mt-4'>
        <Form.Group controlId="formTitle" className='mt-3'>
          <Form.Label>Product Title</Form.Label>
          <Form.Control type="text" placeholder="Product Title" />
        </Form.Group>

        <Form.Group controlId="formPrice" className='mt-3'>
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Price" />
        </Form.Group>

        <Form.Group controlId="formStatus" className='mt-3'>
          <Form.Label>Status</Form.Label>
          <Form.Control as="select">
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>
        
        <Form.Group controlId="formDescription" className='mt-3'>
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Description" />
        </Form.Group>
        
        <Button variant="primary" type="submit" className='mt-3 mr-2'>
          Add
        </Button>
        <Button variant="info" type="reset" className='mt-3'>
          Reset
        </Button>
      </Form>
    </>
  )
}

export default ProductAddUpdate