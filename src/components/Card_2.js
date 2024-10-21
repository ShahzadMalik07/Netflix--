import React from 'react'
import { IMG_URL } from '../utils/constant'

const Card_2 = ({poster_path}) => {
  if(!poster_path) return null
  return (
    <div className='md:w-44 w-32 pr-3'>
      <img src={IMG_URL + poster_path} alt="movie card" />
    </div>
  )
}

export default Card_2
