import { useDispatch, useSelector  } from "react-redux"
import { options } from "../utils/constant"
import {  addPopularMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const PopularMovies = ()=>{
    const dispatch = useDispatch()
    const stopPopularMovies = useSelector((store=>store.movies.PopularMovies))
  

    const PopularMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    const json = await data.json()
    // console.log(json.results)
    dispatch(addPopularMovies(json.results))
    }
    
    useEffect(()=>{
        console.log('useEffect called');
        if( !stopPopularMovies){
            console.log('Fetching popular movies...');
            PopularMovies()
        }else{console.log('Using cached popular movies');

        }
    
    },[])
}

export default PopularMovies