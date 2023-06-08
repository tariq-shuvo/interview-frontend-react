import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addProductInfo, fetchAllProductInfo } from '../../util/productOperation'

const ProductAddUpdate = () => {
  const product = useSelector((state) => state.products)
  const dispatch = useDispatch()
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
    let token = localStorage.getItem("token")
    dispatch(addProductInfo(formData, token));
    dispatch(fetchAllProductInfo())
  }

  return (
    <>
      <div className='mt-3'>
        {product.info.errors?.map(errorInfo=><Alert key={errorInfo.param} variant='danger'>{errorInfo.msg}</Alert>)}
        {product.info.success && <Alert key="success" variant='success'>{product.info.message}</Alert>}
      </div>
      <div className='float-right mb-3'>
        <Button variant="danger" type="button" size='sm'>
          Close
        </Button>
      </div>
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
          <Form.Control as="select" value={status} onChange={e => onChange(e)}>
            <option value="true">Yes</option>
            <option value="false">No</option>
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