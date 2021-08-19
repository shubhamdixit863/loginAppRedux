import { createSlice } from "@reduxjs/toolkit";
import {fetchUserByUserName} from "../thunks"

const initialState={

value :0,
success:false,
erro:false


}


const authenticationSlice=createSlice({
    name:"authentication",
    initialState,
    reducers:{

      login:()=>{


      }

    },

    extraReducers: (builder) => {


         builder.addCase(fetchUserByUserName.fulfilled, (state, action) => {
           
      // Add user to the state array
      state.success=true;
      state.error=false;
      localStorage.setItem("token",action.payload.token);

   
    }).addCase(fetchUserByUserName.rejected,(state,action)=>{


    }).addCase(fetchUserByUserName.pending,(state,action)=>{

   

    })
       
      },



})

export const {login} =authenticationSlice.actions;

export default authenticationSlice.reducer;