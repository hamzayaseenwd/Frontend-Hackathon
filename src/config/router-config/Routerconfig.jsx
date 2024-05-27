import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../../screens/Dashboard'
import Login from '../../screens/Login'
import Signup from '../../screens/Signup'
import { Typography } from '@mui/material'
import ProtectedRoutes from './ProtectedRoutes'
import Navbar from '../../components/Navbar'

const Routerconfig = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                {/* <Route path='/' element={<ProtectedRoutes component={<Dashboard />}/>} /> */}
                <Route path='/' element={<Dashboard />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='*' element={<Typography>No Page Found 404!</Typography>} />
            </Routes>

            
        </BrowserRouter>
    )
}

export default Routerconfig