import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Outlet, Link } from "react-router-dom"

const Layout = () => {
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
                    <Link className='nav-link nav-link-color' to="/auth">Login</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Outlet />
    </>
  )
}

export default Layout