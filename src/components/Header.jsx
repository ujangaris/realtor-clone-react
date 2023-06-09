import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const Header = () => {
  // deklarasi hooks
  const [pageState, setPageState] = useState('Sign in')
  const location = useLocation()
  //   console.log(location.pathname)
  const navigate = useNavigate()
  // pasang getAuth()
  const auth = getAuth()
  // pasaang useEffect
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState('Profile')
      } else {
        setPageState('Sign in')
      }
    })
  })
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true
    }
  }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <img
            className='h-5 cursor-pointer'
            src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg'
            alt='logo'
            onClick={() => navigate('/')}
          />
        </div>

        <div>
          <ul className='flex space-x-10'>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute('/') && 'text-black border-b-pink-500'
              }`}
              onClick={() => navigate('/')}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute('/offers') && 'text-black border-b-pink-500'
              }`}
              onClick={() => navigate('/offers')}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute('/sign-in') ||
                (pathMatchRoute('/profile') && 'text-black border-b-pink-500')
              }`}
              onClick={() => navigate('/profile')}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}
