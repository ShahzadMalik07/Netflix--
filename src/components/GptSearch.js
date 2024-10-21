import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from "./GptMovieSuggestion"
import Img from "../utils/BackgroundImg.jpg"

const GptSearch = () => {
  return (
    <div>
      <div className=' Image fixed -z-20'>
        <img className='md:h-full h-screen  md:w-full object-cover' src={Img} alt="" />
      </div>
      <div className='h-[100vh]'> <GptSearchBar /></div>

      <div className="md:-mt-[25%] -mt-[80%] sm:-mt-[40%] p-4  m-5 min-h-[100vh] "><GptMovieSuggestion /></div>
    </div>
  )
}

export default GptSearch
