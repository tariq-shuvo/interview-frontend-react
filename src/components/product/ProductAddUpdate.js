import React, { useEffect, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addProductInfo, updateProductInfo } from '../../util/productOperation'
import _ from 'lodash'
import { removeOperationalInfo } from '../../store/slices/productSlice'

const ProductAddUpdate = (props) => {
  const auth = useSelector((state) => state.auth)
  const operation = useSelector((state) => state.products.operation)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    price: '',
    status: true,
    description: ''
  })
  const {productUpdate, setProductUpdateInfo} = props

  let {id, title, price, status, description} = formData

  useEffect(()=>{
    if(productUpdate.isUpdate){
      setFormData({
        id: productUpdate.productData._id,
        title: productUpdate.productData.title,
        price: productUpdate.productData.price,
        status: productUpdate.productData.status,
        description: productUpdate.productData.description
      })
    }else{
      setFormData({
        id: '',
        title: '',
        price: '',
        status: true,
        description: ''
      })
    }
  }, [productUpdate])

  const onChange = e =>
    setFormData({...formData, [e.target.name]: e.target.value})

  const formReset = () => {
    setFormData({
      ...formData,
      title: '',
      price: '',
      status: true,
      description: ''
    })
  }  

  const onSubmit = async e => {
    e.preventDefault()
    let token = localStorage.getItem("token")
    if(productUpdate.isUpdate){
      dispatch(updateProductInfo(formData))
    }else{
      dispatch(addProductInfo(formData, token))
      formReset()
    }
    setTimeout(()=>{
      dispatch(removeOperationalInfo())
    }, 3000)
  }

  return (
    <>
      <div className='mt-3'>
        {!(_.isEmpty(operation.errors)) && operation.errors.map(errorInfo=><Alert key={errorInfo.param} variant='danger'>{errorInfo.msg}</Alert>)}
        {operation.success && <Alert key="success" variant='success'>{operation.message}</Alert>}
      </div>
      <div className='float-right mb-3'>
        <Button variant="danger" type="button" size='sm' onClick={()=>setProductUpdateInfo({isVisible: false, productData: null, isUpdate: false})}>
          Close
        </Button>
      </div>
      <Form className='mt-4' onSubmitCapture={e => onSubmit(e)}>
        <Form.Control type="hidden" name='id' value={id} onChange={e => onChange(e)}/>
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
          <Form.Control as="select" value={status} name='status' onChange={e => onChange(e)}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Form.Control>
        </Form.Group>
        
        <Form.Group controlId="formDescription" className='mt-3'>
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Description" name='description' value={description} onChange={e => onChange(e)}/>
        </Form.Group>
        
        <Button variant="primary" type="submit" className='mt-3 mr-2' disabled={auth.loading}>
          {productUpdate.isUpdate ? 'Update': 'Add'}
        </Button>
        <Button variant="info" type="reset" className='mt-3'>
          Reset
        </Button>
      </Form>
    </>
  )
}

export default ProductAddUpdate