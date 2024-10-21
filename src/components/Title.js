import React from 'react'

const Title = ({title,overview}) => {
    
  return (
    <div className='z-10  w-screen aspect-video pt-20 xl:pt-72 px-6 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='xl:text-5xl text-2xl w-1/4 font-semibold mb-2 xl:mt-16'>{title}</h1>
      <p className='hidden md:inline-block text-[16px] my-4 w-[30%] '>{overview}</p>
      <div className='flex gap-6'>
        <button className='xl:px-4 xl:py-3 px-2 py-1 bg-white text-black rounded-md text-sm '>▶️ Play Now</button>
        <button className='hidden xl:inline-block xl:px-4 xl:py-2 bg-gray-600 text-white rounded-md text-sm'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default Title
