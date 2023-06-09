import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'

export const PrivateRoute = () => {
  //   const loggedIn = false
//   menerapkan hooks untuk mengecek status pengguna
  const { loggedIn, checkingStatus } = useAuthStatus()
  if (checkingStatus) {
    return <h3>Loading...</h3>
  }
  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
}
