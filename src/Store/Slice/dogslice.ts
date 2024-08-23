import { createSlice ,PayloadAction} from "@reduxjs/toolkit";

import {State} from '../../Types/type'



const initialState:State={
    breed: "all",
    subBreed: "all",
    number: 1,
    imageResults: 0,
    error: false,

}
 const dogSlice= createSlice({
    name:"dogs",
    initialState,
    
    reducers:{
        setBreed:(state,action:PayloadAction<string>)=>{
            state.breed=action.payload
        },
        setSubBreed:(state,action:PayloadAction<string>)=>{
            state.subBreed=action.payload;
        },
        setNumber:(state,action:PayloadAction<number>)=>{
            state.number=action.payload;
        },
        setImages:(state,action:PayloadAction<number>)=>{
            state.imageResults=action.payload;
        }
    ,
    setError:(state,action:PayloadAction<boolean>)=>{
        state.error=action.payload;
    },
    reset: (state) => {
        state.breed = initialState.breed;
        state.subBreed = initialState.subBreed;
        state.number = initialState.number;
        state.imageResults = initialState.imageResults;
        state.error = initialState.error;
      },

    }
});

export const  {setBreed, setSubBreed, setNumber, setImages, setError, reset }= dogSlice.actions

export default dogSlice.reducer;