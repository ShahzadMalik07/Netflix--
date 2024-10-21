import { useEffect } from "react"
import { options } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { addMovieTrailer } from "../utils/moviesSlice"

const useMovieTrailer = (movie_id)=>{
    // const [trailerId, setTrailerid] = useState(null)

    const dispatch = useDispatch()

    const stopMovieTrailer = useSelector((store=>store.movies.movieTrailer))

    const getMovie = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/'+ movie_id +'/videos?language=en-US', options)
    const json = await data.json()
    
    const filterData = json.results.filter((video)=>video.type==="Trailer")
    const trailer = filterData[0]

   // setTrailerid(trailer.key)
    dispatch(addMovieTrailer(trailer))
    
    }
    
    useEffect(()=>{
      if(!stopMovieTrailer){
         getMovie()}
     
    },[stopMovieTrailer, getMovie])
}

export default useMovieTrailer