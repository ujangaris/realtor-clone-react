import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { OAuth } from '../components/OAuth'
import { toast } from 'react-toastify'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
export const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  function onChange(e) {
    // console.log(e.target.value)
    setEmail(e.target.value)
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was sent!')
    } catch (error) {
      toast.error('Could not send reset password')
    }
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Forgot Password</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img
            className='w-full rounded-2xl'
            src='https://images.unsplash.com/photo-1675266873434-5ba73c38ce6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1114&q=80'
            alt='key'
          />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form onSubmit={onSubmit}>
            <input
              className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
              type='email'
              id='email'
              placeholder='Email Address'
              value={email}
              onChange={onChange}
            />

            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-6'>
                Don't have account?
                <Link
                  to='/sign-up'
                  className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to='/sign-in'
                  className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'
                >
                  Sign in instead
                </Link>
              </p>
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition
             duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'
            >
              Send reset password
            </button>
            <div className='flex items-center my-4 before:border-t  before:flex-1  before:border-grey-300 after:border-t  after:flex-1  after:border-grey-300 '>
              <p className='text-center font-semibold mx-4'>OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  )
}
