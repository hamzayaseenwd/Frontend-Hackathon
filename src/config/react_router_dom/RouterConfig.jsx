import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../screens/Home'
import Login from '../../screens/Login'
import Dashboard from '../../screens/Dashboard'
import Signup from '../../screens/Signup'
import Profile from '../../screens/Profile'
import Navbar from '../../components/Navbar'

const RouterConfig = () => {
  return (
    <BrowserRouter>
        <Navbar/>
    
    <Routes>

        <Route path='' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='profile/:id' element={<Profile/>}/>
        
    </Routes>
    
    </BrowserRouter>
  )
}

export default RouterConfig