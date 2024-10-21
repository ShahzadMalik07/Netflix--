import React, { useRef, useState } from 'react'
import Img from "../utils/BackgroundImg.jpg"
import Header from './Header'
import { checkvaliddata } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/Firebase"
import { useNavigate } from 'react-router-dom';
import {  updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_PHOTO } from '../utils/constant';


const Login = () => {
  const dispatch = useDispatch()
  const [isSignIn, setisSignIn] = useState(true)
  const [errorMessage, seterrorMessage] = useState("")

  const name = useRef(null)
  const Email = useRef(null)
  const Password = useRef(null)

  const toggleForm = (e) => {
   e.preventDefault()
    setisSignIn(!isSignIn)
  }

  const handleButtonClick =()=>{
    if (!Email.current || !Password.current || (!isSignIn && !name.current)) {
      seterrorMessage("Input references are not properly assigned.");
      return;
    }
  
   const messsage = checkvaliddata(Email.current.value, Password.current.value, name.current?.value || '',isSignIn)
   
   seterrorMessage(messsage)
   if(messsage) return
   
   if(!isSignIn){
    //sign up logic
    createUserWithEmailAndPassword(auth, Email.current.value, Password.current.value)
  .then((userCredential) => {
  
    const user = userCredential.user;

    updateProfile(auth.currentUser, {
      displayName: name.current.value, photoURL: USER_PHOTO
    }).then(() => {
      // Profile updated!
      const {uid, email, displayName, photoURL} = auth.currentUser
      dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL: photoURL}))
     
    }).catch((error) => {
      seterrorMessage(error.message)
    });

    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode + "-"+ errorMessage)
  });

   }else{
    //sign in logic
    signInWithEmailAndPassword(auth, Email.current.value, Password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(Email.current.value)
      
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      seterrorMessage(errorCode +"-"+ errorMessage)
    });
   }
  }
  return (
    <div className='h-full w-full'>
      <Header />
      <div className='Image absolute'>
        <img className='h-screen md:h-full w-full object-cover' src={Img} alt="" />
      </div>


      <form onSubmit={(e)=>e.preventDefault()} className='absolute w-full md:w-[30%] h-screen p-3 bg-black bg-opacity-85 my-24 md:mx-auto right-0 left-0 flex flex-col items-center' action="">
        <h1 className='absolute left-[55px] text-white text-3xl font-bold mt-12'>{isSignIn ? "Sign In":"Sign Up"}</h1>
       {!isSignIn && <input ref={name} className=' p-3 mt-32 mb-3 rounded-sm bg-transparent border border-white  text-white w-[80%]' type="text" placeholder='Fullname' />}
         <input ref={Email} className={`${isSignIn? "mt-32" : "mt-2"} mb-3 p-3 rounded-sm bg-transparent border border-white  text-white w-[80%]`} type="text" placeholder='Email or mobile number' />
        <input ref={Password} className='p-3 mt-2 rounded-sm bg-transparent border border-white  text-white w-[80%]' type="password" placeholder='Password' />
        <p className='text-red-400 text-sm mt-1'>{errorMessage}</p>
        <button onClick={handleButtonClick} className='mt-3 text-white bg-red-600 py-2 px-[76px] rounded-sm w-[80%]'>{isSignIn ? "Sign In":"Sign Up"}</button>
        <button onClick={toggleForm} className='py-2 px-1 mt-5 text-[16px] bg-white bg-opacity-25 text-white w-[80%] rounded-sm mb-4'>{isSignIn ? "New to Netflix? Sign up now.":"Already a member? Sign in"}</button>
      </form>
    </div>
  )
}

export default Login
