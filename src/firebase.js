// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA2_6tgkrzXywFr9W8ZoN3rsMDuMzlyy0A',
  authDomain: 'realtor-clone-react-f7722.firebaseapp.com',
  projectId: 'realtor-clone-react-f7722',
  storageBucket: 'realtor-clone-react-f7722.appspot.com',
  messagingSenderId: '258521590404',
  appId: '1:258521590404:web:a6920ad451ca0f2eecb0d1',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
