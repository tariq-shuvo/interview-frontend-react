import React, { useEffect, useState } from 'react'
// import {Link, Redirect} from 'react-router-dom'
import { Alert, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { registerUserData } from '../../util/authUser'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    password: '',
    confirm_password: ''
  })

  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(auth.user.success){
      setFormData({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        address: '',
        password: '',
        confirm_password: ''
      })
    }
  }, [auth])

  const {username, first_name, last_name, email, address, password, confirm_password} = formData

  const onChange = e =>
    setFormData({...formData, [e.target.name]: e.target.value})

  const onSubmit = e => {
    e.preventDefault()
    dispatch(registerUserData(formData))
  }


  return (
    <>
      <Form className='mt-4' onSubmitCapture={e => onSubmit(e)}>
        {auth.user.errors?.map(errorInfo=><Alert key={errorInfo.param} variant='danger'>{errorInfo.msg}</Alert>)}
        {auth.user.success && <Alert key="success" variant='success'>{auth.user.message}</Alert>}
        <Form.Group controlId="formUsername" className='mt-3'>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" name='username' value={username} onChange={e => onChange(e)}/>
        </Form.Group>

        <Form.Group controlId="formFirstName" className='mt-3'>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" name='first_name' value={first_name} onChange={e => onChange(e)}/>
        </Form.Group>

        <Form.Group controlId="formLastName" className='mt-3'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" name='last_name' value={last_name} onChange={e => onChange(e)}/>
        </Form.Group>
        
        <Form.Group controlId="formEmail" className='mt-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" name='email' value={email} onChange={e => onChange(e)}/>
        </Form.Group>
        
        <Form.Group controlId="formAddress" className='mt-3'>
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Address" name='address' value={address} onChange={e => onChange(e)}/>
        </Form.Group>

        <Form.Group controlId="formPassword" className='mt-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={e => onChange(e)}/>
        </Form.Group>

        <Form.Group controlId="formConfirmPassword" className='mt-3'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" name='confirm_password' value={confirm_password} onChange={e => onChange(e)}/>
        </Form.Group>
        
        <Button variant="primary" type="submit" className='mt-3 mb-5' disabled={auth.loading}>
          Register
        </Button>
      </Form>
    </>
  )
}

export default Register