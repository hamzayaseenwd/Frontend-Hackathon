import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Box, Button, CircularProgress, TextField } from '@mui/material';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    setLoading(true)


    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      })
      .finally(()=>{
        setLoading(false);
      })
  }

  return (
    <Box sx={{ height: '40vh' }} className='d-flex justify-content-center align-items-center'>
      
      <form onSubmit={loginUser} className="d-flex justify-content-center flex-column w-25 gap-5">
        <TextField type="email" label="Email" variant="standard" inputRef={email} />
        <TextField type="password" label="Password" variant="standard" inputRef={password} />
        <Button type="submit" variant="contained">{loading ? <CircularProgress sx={{ color: 'white' }} /> : 'Login'}</Button>
      </form>
    </Box>
  )
}

export default Login