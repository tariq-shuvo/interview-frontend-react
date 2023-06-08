import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Register = () => {
  return (
    <>
      <Form className='mt-4'>
        <Form.Group controlId="formUsername" className='mt-3'>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group controlId="formFirstName" className='mt-3'>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>

        <Form.Group controlId="formLastName" className='mt-3'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
        
        <Form.Group controlId="formEmail" className='mt-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" />
        </Form.Group>
        
        <Form.Group controlId="formAddress" className='mt-3'>
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Address" />
        </Form.Group>

        <Form.Group controlId="formPassword" className='mt-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword" className='mt-3'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit" className='mt-3'>
          Register
        </Button>
      </Form>
    </>
  )
}

export default Register