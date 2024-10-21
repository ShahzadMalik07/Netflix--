import { useDispatch, useSelector } from "react-redux"
import { options } from "../utils/constant"
import {addTrendingMovies } from "../utils/moviesSlice"
import { useEffect} from "react"

const TrendingMovies = ()=>{
    const dispatch = useDispatch()
    const stopTrendingMovies = useSelector((store=>store.movies.TrendingMovies))
  

    const TrendingMovies =  async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    const json = await data.json()
    // console.log(json.results)
    dispatch(addTrendingMovies(json.results))
    }
    
    useEffect(()=>{
      console.log("trending effect")
      !stopTrendingMovies && TrendingMovies()
    },[])
}

export default TrendingMovies