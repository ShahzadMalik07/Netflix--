import React, { useEffect } from 'react'
import Logo from "../utils/Netflix_Logo_PMS.png"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/GptSlice';
import { IoIosSearch } from "react-icons/io";
// import appstore from '../utils/appStore';

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const user = useSelector((store) => store.user)
  const showGptText = useSelector(store=>store.Gpt.showGptSearch)
  


  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")


    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))

        navigate("/browse")

      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
      return () => unsubscribe
    });
  }, [])

  const handleGptSearch = ()=>{
    dispatch(toggleGptSearchView())
  }


  return (<>

    <div className='absolute z-20 w-full flex flex-col gap-4 md:flex-row items-center justify-between  '>
      <img  className={`${user?"ml-4":"ml-40"} w-[190px] h-[85]`} src={Logo} alt="" />
      {user && <div className='flex items-center gap-5 mr-3'>
        <button onClick={handleGptSearch} className={`${showGptText?"bg-pink-600 text-xl":"bg-transparent text-4xl ml-2"} px-3 py-2  text-white  rounded-md`}>{showGptText?"Homepage":<IoIosSearch/>}</button>
        <img className='w-10 h-10 bg-black rounded-md ' src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="img" />
        <button onClick={handleSignout} className='text-white px-3 py-2 bg-[#E50914] rounded-md'>Sign Out</button>
      </div>}

    </div>

  </>
  )
}

export default Header
