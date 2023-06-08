import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Login = () => {
  return (
    <>
      <Form className='mt-4'>
        <Form.Group controlId="formBasicEmail" className='mt-3'>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className='mt-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" className='mt-3'>
          Login
        </Button>
      </Form>
    </>
  )
}

export default Login