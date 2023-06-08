# Realtor Clone Reactjs

## Bagian 2: Installation and first template

### Setup Favicon & Tailwindcss

    todo:
    1.  favicon generator:
        - docs = https://favicon.io/favicon-generator/
    2.  Install tailwindcss :
        - docs = https://tailwindcss.com/docs/guides/create-react-app
        - ikuti semua configuration
    3.  npm start : http://localhost:3000

### Create page and routes

    todo:
    1.  install reac-router-dom v6
        - npm install react-router-dom
    2.  index.js
        - import dan pasang BrowserRouter
    3.  src/pages:
        - Home.jsx
        - Profile.jsx
        - SignIn.jsx
        - SignUp.jsx
        - ForgotPassword.jsx
        - Offers.jsx
    4.  App.jsx
        - import dan pasang Routes, Route
        - import dan pasang :
         Home, Profile, SignIn, SignUp, ForgotPassword, Offers
    5.  npm start : http://localhost:3000
        - http://localhost:3000/
        - http://localhost:3000/profile
        - http://localhost:3000/sign-in
        - http://localhost:3000/sign-up
        - http://localhost:3000/forgot-password
        - http://localhost:3000/offers

### Create the header component

    todo:
    1.  components/Header.jsx
        - rafc
        - setup code header
    2.  App.js
        - import dan pasang Header
    3.  npm start : http://localhost:3000
        - klik: home, Offers, Sign in

## Bagian 3: Authentication using Firebase auth versin 9

### Create Sign in page

    todo:
    1.  install tailwindcss form
        - npm install -D @tailwindcss/forms
        - docs : https://github.com/tailwindlabs/tailwindcss-forms
    2.  tailwind.config.js
        - pasang tailwind form
    3.  install react icons
        - npm install react-icons
        - docs : https://react-icons.github.io/react-icons/
    4.  src/index.css
        - styling body
    5.  pages/SignIn.jsx
        - Content Sign In
    6.  components/OAuth.jsx
        - membuat button OAuth yang bisa dipanggil berulang2(sign-in page & sign-up page)
    7.  npm start : http://localhost:3000
        - klik: Sign in
        - akan tampil halaman sign in yang isinya ada form dan button

### Create Sign up page

    todo:
    1.  pages/SignUp.jsx
        - Copy code dari SignIn.jsx dan pastekan
        - kemudian modifikasi sesuai kebutuhan
    2.  npm start : http://localhost:3000
        - klik: Sign
        - akan tampil halaman sign in yang isinya ada form dan button
        - klik Register
        - akan tampil halaman Sign up

### Create Forgot Password page

    todo:
    1.  pages/ForgotPassword.jsx
        - Copy code dari SignIn.jsx dan pastekan
        - kemudian modifikasi sesuai kebutuhan
    2.  npm start : http://localhost:3000
        - klik: Sign
        - akan tampil halaman sign in yang isinya ada form dan button
        - klik Forgot Password
        - akan tampil halaman Forgot Password

### Install firebase in SignUp page

    todo:
    1.  install firebase
        - npm install firebase
    2.  src/firebase.js
        - paste code dari database firebase yang sudah kita buat
    3.  pages/SignUp.jsx
        - docs: https://firebase.google.com/docs/auth/web/start?hl=id
            - import dan pasang ,getAuth & createUserWithEmailAndPassword
        - setup database firebase dengan asyncronus & trycatch
        - buat & pasang function onSubmit
    4.  npm start : http://localhost:3000/sign-up
        - coba lakukan insert data user baru/register user
        - perikasa pada firebase kemudian authentication
          akan ada data user baru yang terbuat
        - lihat pada console.log, akan ada data yang berhasil terbuat

### Register data users colection in firebase

    todo:
    1.  pages/SignUp.jsx
        - updateProfile
        - import dan pasang setDoc, doc, serverTimestamp
        - import dan pasang useNavigate
    2.  npm start : http://localhost:3000/sign-up
        - coba lakukan insert data user baru/register user jika berhasil akan diredirect kehalaman home
        - untuk updateProfile : perikasa pada firebase kemudian authentication
          akan ada data user baru yang terbuat
        - untuk setDoc lihat pada firebase kemudian Firestore
          akan ada data baru terbuat

### Pasang Toastify

    todo:
    1.  install toastify
        npm install react-toastify
    2.  App.js
        - import dan pasang ToastContainer
        - react-toastify css
    3.  pages/SignUp.jsx
        - import dan pasang toastify
    4.  npm start : http://localhost:3000/sign-up
        - coba lakukan insert data user baru/register user jika berhasil akan ada notifikasi
          dan  diredirect kehalaman home
        - coba juga register dengan data yang kosong, akan ada notifikasi gagal dari toastify
