import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'
import { Loading } from './Loading'

export const PrivateRoute = () => {
  //   const loggedIn = false
  //   menerapkan hooks untuk mengecek status pengguna
  const { loggedIn, checkingStatus } = useAuthStatus()
  if (checkingStatus) {
    return <Loading />
  }
  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
}
