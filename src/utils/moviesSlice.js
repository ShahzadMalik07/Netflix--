import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        movieTrailer:null,
        PopularMovies:null,
        TrendingMovies:null,
        UpcomingMovies:null
    },
    reducers:{
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies:(state, action)=>{
            state.PopularMovies = action.payload
        },
        addTrendingMovies:(state, action)=>{
            state.TrendingMovies = action.payload
        },
        addUpcomingMovies:(state, action)=>{
            state.UpcomingMovies = action.payload
        },
        addMovieTrailer:(state, action)=>{
            state.movieTrailer = action.payload

        }
    }
})


export const {addNowPlayingMovies, addMovieTrailer, addPopularMovies, addTrendingMovies,  addUpcomingMovies} = moviesSlice.actions
export default moviesSlice.reducer