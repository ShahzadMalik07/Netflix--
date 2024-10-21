import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from "./userSlice"
import moviesReducer from "./moviesSlice"
import GptReducer from "./GptSlice"

const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    Gpt:GptReducer
  }
})

export default appstore