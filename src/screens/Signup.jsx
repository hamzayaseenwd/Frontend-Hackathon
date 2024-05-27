import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { Box, Button, CircularProgress, TextField } from '@mui/material';

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const email = useRef()
  const password = useRef()
  const firstname = useRef()
  const lastname = useRef()
  

  const navigate = useNavigate();

  const registerUser = (event) => {
    event.preventDefault();
    setLoading(true);
    
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then(async (userCredential) => {
            const user = userCredential.user;
            console.log(user)
            const docRef = await addDoc(collection(db, "users"), {
              email: email.current.value,
              firstname: firstname.current.value,
              lastname: lastname.current.value,
              time: Timestamp.fromDate(new Date()),
              uid: user.uid,
            });
            navigate('/login');
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          })
          .finally(() => {
            setLoading(false);
          })
;}

  return (
    <Box sx={{ height: '80vh' }} className='d-flex justify-content-center align-items-center'>
      <form onSubmit={registerUser} className="d-flex justify-content-center flex-column w-25 gap-5">
        <TextField type="text" label="FirstName" variant="standard" inputRef={firstname} />
        <TextField type="text" label="LastName" variant="standard" inputRef={lastname} />
        <TextField type="email" label="Email" variant="standard" inputRef={email} />
        <TextField type="password" label="Password" variant="standard" inputRef={password} />
        <Button type="submit" variant="contained">{loading ? <CircularProgress sx={{ color: 'white' }} /> : 'Register'}</Button>
      </form>
    </Box>
  )
}

export default Signup