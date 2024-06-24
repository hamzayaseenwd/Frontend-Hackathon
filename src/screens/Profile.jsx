import React, { useRef } from 'react'
import Custom_Input_Field from '../components/Custom_Input_Field'
import Custom_Button from '../components/Custom_Button'

const Profile = () => {
  const newPassword = useRef()
  const confirmnewPassword = useRef()
  
//   function showUserProfile1() {
//     const user = firebase.auth().currentUser;
 
//     if (user !== null) {
//         user.providerData.forEach((profile) => {
//             console.log("Sign-in provider: " + profile.providerId);
//             console.log("  Provider-specific UID: " + profile.uid);
//             console.log("  Name: " + profile.displayName);
//             console.log("  Email: " + profile.email);
//             console.log("  Photo URL: " + profile.photoURL);
//         });
//     }
// }
 
// Method to update the password

function UpdatePassword() {
    const user = firebase.auth().currentUser;

    if (newPassword === confirmnewPassword) {
    
    user.updatePassword(newPassword).then(() => {
      console.log('Update SuccessFul');
     }).catch((error) => {
        console.log(error)
    });
  } else { 
    console.log("Password not match")
 }
}
  
  
 return (
    <div>

      <div>Profile Dynamic</div>
      <div className='' >
    <form className='ml-[25%] mb-[25%] justify-center items-center justify-items-center border-black'
    onSubmit={UpdatePassword} >

  <Custom_Input_Field
  type="password" placeholder='Enter Your New Password' ref={newPassword}
  />
  <Custom_Input_Field
  type="password" placeholder='Re-Enter Your NewPassword' ref={confirmnewPassword}
  />
  <Custom_Button
  type="submit"
  name= "Change Password"
  />
    </form>
  </div></div>
  )
}
export default Profile