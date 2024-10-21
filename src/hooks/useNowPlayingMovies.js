import { useDispatch, useSelector } from "react-redux"
import { options } from "../utils/constant"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { useCallback, useEffect } from "react"

const NowPlayingMovies = ()=>{
    const dispatch = useDispatch()
    const stopNowPlayingMovies = useSelector((store=>store.movies.nowPlayingMovies))
  

    const nowPlayingMovies = useCallback( async ()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing", options)
    const json = await data.json()
    // console.log(json.results)
    dispatch(addNowPlayingMovies(json.results))
    },[dispatch])
    
    useEffect(()=>{
      console.log('useEffect called');
    if(!stopNowPlayingMovies){
      console.log('Fetching nowplaying movies...');
      nowPlayingMovies()
    } else {
      console.log('Using cached nowplayin movies');
  }
    },[stopNowPlayingMovies, nowPlayingMovies])
}

export default NowPlayingMovies