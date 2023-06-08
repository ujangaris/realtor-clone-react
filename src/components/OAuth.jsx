import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-toastify'
export const OAuth = () => {
  const onGoogleClick = async () => {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      console.log(user)
    } catch (error) {
      toast.error('Could not authorize with Google!')
      console.log(error)
    }
  }
  return (
    <button
      type='button'
      onClick={onGoogleClick}
      className='flex  items-center justify-center w-full bg-red-700 text-white px-7 py-3 rounded uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out'
    >
      <FcGoogle className='text-2xl bg-white rounded-full mr-2' />
      COntinue with Google
    </button>
  )
}
