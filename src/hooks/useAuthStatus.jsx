import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'

export const useAuthStatus = () => {
  // deklarasi hooks
  const [loggedIn, setLoggedIn] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)
  //   useEffect untuk mengecek user
  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true)
      }
      // rubah  setCheckingStatus menjadi false
      setCheckingStatus(false)
    })
  }, [])
  return { loggedIn, checkingStatus }
}
