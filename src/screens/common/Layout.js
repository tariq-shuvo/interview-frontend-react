import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, Link } from "react-router-dom"
import { logoutUserData } from '../../util/authUser'

const Layout = () => {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch();

  const userLogout = () =>{
    localStorage.removeItem("token");
    dispatch(logoutUserData());
  }

  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Link className='nav-link-color' to="/">
                <Navbar.Brand>Technical Interview</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Link className='nav-link nav-link-color' to="/">Products</Link>
                    <Link className='nav-link nav-link-color' to="/contact">Contact</Link>
                    {auth.isLoggedIn ? (<Button variant="danger" onClick={userLogout}>Logout</Button>): (<Link className='nav-link nav-link-color' to="/auth">Login</Link>)}
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Outlet />
    </>
  )
}

export default Layout