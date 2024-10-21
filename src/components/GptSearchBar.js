import React, { useRef, useState } from 'react'
// import openai from '../utils/openai'
import { options } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { addgptMovies } from '../utils/GptSlice';

const GptSearchBar = () => {
  // const [movieData, setMovieData] = useState(null);
  const searchText = useRef()
  const dispatch = useDispatch()




  const tmdbMovie = async () => {

    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}&include_adult=false&language=en-US&page=1`, options)
    const json = await data.json()
    // console.log(json)

    try {
      if (json.results && json.results.length > 0) {
        // Filter results based on relevance criteria
        const filteredResults = json.results.filter(movie =>
          movie.title.toLowerCase().includes(searchText.current.value.toLowerCase()) ||
          (movie.overview && movie.overview.toLowerCase().includes(searchText.current.value.toLowerCase()))
        );
        dispatch(addgptMovies(filteredResults))
        console.log(filteredResults)

      } else {

      }
    } catch (error) {
      console.log("error fetching data")
    }

  }

  const handleGptSearch = () => {
    tmdbMovie()
  }
  return (
    <>
      <div className='flex justify-center items-center pt-[40%] md:pt-[10%] sm:pt-[20%]'>
        <form className='bg-black w-full md:w-1/2 grid grid-cols-12' action="" onSubmit={(e) => e.preventDefault()}>
          <input ref={searchText} type="text" className='p-2 m-3 col-span-9' placeholder='What Would You Like to Watch Today?' />
          <button onClick={handleGptSearch} className='px-2 py-1 m-3 bg-red-600 rounded-md col-span-3 text-white'>Search</button>
        </form>

      </div>

    </>

  )
}

export default GptSearchBar
