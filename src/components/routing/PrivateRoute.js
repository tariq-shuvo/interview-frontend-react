import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({auth, children}) => {
  return (
    auth.isLoggedIn && !auth.loading ? (
        <Navigate to='/' />
    ) : (
        children
    )
  )
}

export default PrivateRoute