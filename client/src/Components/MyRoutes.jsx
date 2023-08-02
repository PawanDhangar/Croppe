import React from 'react'
import Navbar from './navbar/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './about'
import Contact from './Contact'
import Login from './Login'
import SignUp from './Signup'
import Service from './service'

const MyRoutes = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Service' element={<Service/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </div>
  )
}

export default MyRoutes
