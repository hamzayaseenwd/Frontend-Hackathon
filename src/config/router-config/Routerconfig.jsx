import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../../screens/Dashboard'
import Login from '../../screens/Login'
import Signup from '../../screens/Signup'

const Routerconfig = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<ProtectedRoutes component={<Dashboard />}/>} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='*' element={"No Page Found 404!"} />
            </Routes>

            
        </BrowserRouter>
    )
}

export default Routerconfig