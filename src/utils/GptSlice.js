import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "Gpt",
    initialState: {
        showGptSearch: false,
        gptMovies:null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addgptMovies:(state, action)=>{
            state.gptMovies = action.payload

        }
    }
})


export const {toggleGptSearchView, addgptMovies} = GptSlice.actions
export default GptSlice.reducer