import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Custom_Input_Field from '../components/Custom_Input_Field'
import Custom_Button from '../components/Custom_Button'
import { auth } from '../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Swal from 'sweetalert2'

const Login = () => {
  const navigate = useNavigate()
  
  const email = useRef()
  const password = useRef()
  
  
  const signIn_function = (event) => {
    event.preventDefault();

     signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    password.value = ''
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Login Sucessfully",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(function(){
        navigate('/dashboard')
      },2000)
  })
  .catch((error) => {
    const errorMessage = error.message;
    Swal.fire({
        icon: "error",
        title: "Invalid Email or Password"
      });
      
  })
  
}
  
  return (
    <div>
      <div className='flex justify-center ' >
    <form className='content-center'
    onSubmit={signIn_function} >


  <Custom_Input_Field
  type="text" placeholder='Enter Your Email Address' ref={email}
  />
  <Custom_Input_Field
  type="password" placeholder='Enter Your Password' ref={password}
  />
  
      
  <Custom_Button
  type="submit"
  name= "Log In"
  />
    </form>
  </div></div>
  )
}

export default Login
