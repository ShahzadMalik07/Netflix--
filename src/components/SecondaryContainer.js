import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movieData = useSelector(store=>store.movies)
  // console.log(movieData)
  
  return (
    movieData.nowPlayingMovies
    &&
    <div className='bg-black  text-white'>
      <div className='mt-0 xl:-mt-4 relative z-20'>
     <MovieList title={"Now Playing"} movies={movieData.nowPlayingMovies}/>
     <MovieList title={"Trending"} movies={movieData.TrendingMovies}/>
     <MovieList title={"Popular"} movies={movieData.PopularMovies}/>
     <MovieList title={"Upcoming Movies"} movies={movieData.UpcomingMovies}/>
     </div>
    </div>
  )
}

export default SecondaryContainer
