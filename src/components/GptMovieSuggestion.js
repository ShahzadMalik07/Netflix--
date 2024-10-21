import React from 'react'
import { useSelector } from 'react-redux'
import Card_2 from './Card_2'

const GptMovieSuggestion = () => {
const GptMovies = useSelector((store)=>store?.Gpt?.gptMovies)

  return (
    <>
        {GptMovies && (
        <div className={`bg-black w-full  flex flex-col justify-center items-center`}>
          <h3>Search Results:</h3>
          <div className='  flex gap-3'>
            <div className=' flex gap-4 flex-wrap justify-center items-center mb-2'>
            {GptMovies.map((movie) =><div className=''><Card_2 poster_path={movie.poster_path} /></div> )}
            </div>
            
          </div>
        </div>
      )}
    </>
  )
}

export default GptMovieSuggestion
