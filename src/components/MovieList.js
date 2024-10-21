import React from 'react'
import Card from './Card'


const MovieList = ({ title, movies }) => {
    // console.log(movies)
    return (
        <div className='px-7'>
            <h1 className='text-lg font-semibold py-2'>{title}</h1>
            <div id='scroll' className='flex overflow-x-auto'>

                <div className='flex mb-2'>
                    {movies?.map((movie) => <Card key={movie.id} poster_path={movie?.poster_path} />)}


                </div>
            </div>
        </div>
    )
}

export default MovieList
