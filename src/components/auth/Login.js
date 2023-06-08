import React, { useEffect, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom"
import { fetchUserInfoData, loginUserData } from '../../util/authUser'

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(auth.isLoggedIn){
      if(auth.user?.token){
        localStorage.setItem('token', auth.user.token);
        setFormData({
          username: '',
          password: ''
        })
      }
      dispatch(fetchUserInfoData(auth.user))
      navigate("/")
    }
  }, [auth, dispatch]);

  const {username, password} = formData

  const onChange = e =>
    setFormData({...formData, [e.target.name]: e.target.value})

  const onSubmit = e => {
    e.preventDefault()
    dispatch(loginUserData(formData))
  }

  return (
    <>
      <Form className='mt-4' onSubmitCapture={e => onSubmit(e)}>
        {auth.user.errors?.map(errorInfo=><Alert key={errorInfo.param} variant='danger'>{errorInfo.msg}</Alert>)}
        <Form.Group controlId="formBasicEmail" className='mt-3'>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" name='username' value={username} onChange={e => onChange(e)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className='mt-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={e => onChange(e)}/>
        </Form.Group>
        <Button variant="primary" type="submit" className='mt-3' disabled={auth.loading}>
          Login
        </Button>
      </Form>
    </>
  )
}

export default Login