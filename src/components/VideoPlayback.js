import { useSelector } from "react-redux"
import useMovieTrailer from "../hooks/useMovieTrailer"

const VideoPlayback = ({ movie_id }) => {
  const trailer = useSelector(store => store.movies?.movieTrailer)
  useMovieTrailer(movie_id)


  return (
    <div className=' relative md:pt-0 bg-black w-[100vw] h-[100vh] top-0 bottom-0 '>
      <iframe className="w-screen aspect-video"
    
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&playlist=${trailer?.key}&loop=1&mute=1&vq=hd1080`}
        title="YouTube video player"
        allow="accelerometer; loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen"
        allowFullScreen
        >
         
        </iframe>
    </div>
  )
}

export default VideoPlayback
