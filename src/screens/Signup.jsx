import React, { useRef } from 'react'

const Signup = () => {
  const FirstName = useRef()
  const LastName = useRef()
  const Email = useRef()
  const Password = useRef()
  const ConfirmPassword = useRef()
  

  return (
    <div>
      <form 
      // onSubmit={signup_function} 
      >

    <input type="text" placeholder='First Name' ref={FirstName}/>
    <input type="text" placeholder='Last Name' ref={LastName}/>
    <input type="email" placeholder='Email' ref={Email}/>
    <input type="password" placeholder='' ref={Password}/>
    <input type="password" placeholder='' ref={ConfirmPassword}/>
    <button type="submit">Sign Up</button>

      </form>
    </div>
  )
}

export default Signup