import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies", // for all the categories of movies not only for one like now playing.
    initialState:{
      nowPlaying:null,
    },
    reducers :{
        addnowPlaying : (state,action)=>{
            state.nowPlaying=action.payload
        }
    }
})

export const {addnowPlaying} =moviesSlice.actions
export default moviesSlice.reducer;