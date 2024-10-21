import React from 'react'
import { IMG_URL } from '../utils/constant'

const Card = ({poster_path}) => {
  return (
    <div className='w-24 pr-3 cursor-pointer'>
      <img src={IMG_URL + poster_path} alt="movie card" />
    </div>
  )
}

export default Card
