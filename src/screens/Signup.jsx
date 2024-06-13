import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../config/firebase'
import Swal from 'sweetalert2'
import Custom_Button from '../components/Custom_Button'
import Custom_Input_Field from '../components/Custom_Input_Field'

const Signup = () => {
  const navigate = useNavigate()
  
  const firstName = useRef()
  const lastName = useRef()
  const email = useRef()
  const password = useRef()
  const confirmPassword = useRef()

  const signup_function =(event)=>{
    event.preventDefault();
    if (password.current.value === confirmPassword.current.value) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed up 
    const user = userCredential.user;
  console.log(user.data , "Register sucessfully");
Swal.fire({
  position: "top-center",
icon: "success",
title: "You are registered",
showConfirmButton: false,
timer: 1500
});
setTimeout(function(){
  navigate('/login')
},2000)
email.current.value = ''
password.current.value = ''
})
.catch((error) => {
  const errorMessage = error.message;
console.log(errorMessage);
Swal.fire("This Email already in used");
email.value = ''
password.value = ''
});
}else{
  Swal.fire("Password not match");
}



  }

  return (
    <div className='' >
      <form className='ml-[25%] mb-[25%] justify-center items-center justify-items-center border-black'
      onSubmit={signup_function} >


    <Custom_Input_Field
    type="text" placeholder='Enter Your First Name' ref={firstName}
    />
    <Custom_Input_Field
    type="text" placeholder='Enter Your Last Name' ref={lastName}
    />
    <Custom_Input_Field
    type="text" placeholder='Enter Your Email Address' ref={email}
    />
    <Custom_Input_Field
    type="password" placeholder='Enter Your Password' ref={password}
    />
    <Custom_Input_Field
    type="password" placeholder='Re-enter Your Password' ref={confirmPassword}
    />
        
    <Custom_Button
    type="submit"
    name= "Sign Up"
    />
      </form>
    </div>
  )
}

export default Signup