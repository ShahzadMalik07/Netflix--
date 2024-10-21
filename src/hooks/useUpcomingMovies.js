import { useDispatch, useSelector } from "react-redux"
import { options } from "../utils/constant"
import { addUpcomingMovies } from "../utils/moviesSlice"
import { useEffect, useCallback } from "react"

const UpcomingMovies = ()=>{
    const dispatch = useDispatch()
    const stopUpcominMovies = useSelector((store=>store.movies.UpcomingMovies))
  

    const UpcomingMovies = useCallback( async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    const json = await data.json()
    // console.log(json.results)
    dispatch(addUpcomingMovies(json.results))
    },[dispatch])
    
    useEffect(()=>{
     !stopUpcominMovies && UpcomingMovies()
    },[])
}

export default UpcomingMovies