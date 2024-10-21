import React from 'react'
import { useSelector } from 'react-redux'
import Title from './Title'
import VideoPlayback from './VideoPlayback'
import { splitedText } from '../utils/textSplit'

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies)
    if(movies===null) return

    const mainMovie = movies[17]
    const {original_title, overview, id} = mainMovie
    // console.log(mainMovie)

    const splitedOverview = splitedText(overview, 25)
  
    

   
  return (
    <div className=''>
      <Title title={original_title} overview={splitedOverview}/>
      <VideoPlayback movie_id={id}/>
    </div>
  )
}

export default MainContainer
