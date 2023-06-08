import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const ProductAddUpdate = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    status: true,
    description: ''
  })

  const {title, price, status, description} = formData

  const onChange = e =>
    setFormData({...formData, [e.target.name]: e.target.value})

  const onSubmit = e => {
    e.preventDefault()
    console.log(formData);
    // if (password !== password2) {
    //   setAlert('Passwords do not matched', 'danger')
    // } else {
    //   register({name, email, password})
    // }
  }

  return (
    <>
      <Button variant="danger" type="button" size='sm' className='mt-3 float-right'>
        Close
      </Button>
      <Form className='mt-4' onSubmitCapture={e => onSubmit(e)}>
        <Form.Group controlId="formTitle" className='mt-3'>
          <Form.Label>Product Title</Form.Label>
          <Form.Control type="text" placeholder="Product Title" name='title' value={title} onChange={e => onChange(e)}/>
        </Form.Group>

        <Form.Group controlId="formPrice" className='mt-3'>
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Price" name='price' value={price} onChange={e => onChange(e)}/>
        </Form.Group>

        <Form.Group controlId="formStatus" className='mt-3'>
          <Form.Label>Status</Form.Label>
          <Form.Control as="select">
            <option value="true" {...status===true && 'selected'}>Yes</option>
            <option value="false" {...status===true && 'selected'}>No</option>
          </Form.Control>
        </Form.Group>
        
        <Form.Group controlId="formDescription" className='mt-3'>
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Description" name='description' value={description} onChange={e => onChange(e)}/>
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