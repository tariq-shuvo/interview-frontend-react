import React from 'react'
import { Outlet, Link } from "react-router-dom"

const Layout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Products</Link>
                </li>
                <li>
                    <Link to="/auth">Login</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
    </div>
  )
}

export default Layout