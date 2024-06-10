import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  
  const firstName = useRef()
  const lastName = useRef()
  const email = useRef()
  const password = useRef()
  const confirmPassword = useRef()

  const signup_function =(event)=>{
    event.preventDefault();
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
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    Swal.fire("This Email already in used");
    email.value = ''
    password.value = ''
  });






  }
  

  return (
    <div>
      <form 
      onSubmit={signup_function} 
      >

    <input type="text" placeholder='Enter Your First Name' ref={firstName}/>
    <input type="text" placeholder='Enter Your Last Name' ref={lastName}/>
    <input type="email" placeholder='Enter Your Email Address' ref={email}/>
    <input type="password" placeholder='Enter Your Password' ref={password}/>
    <input type="password" placeholder='Re-enter Your Password' ref={confirmPassword}/>
    <button type="submit">Sign Up</button>

      </form>
    </div>
  )
}

export default Signup