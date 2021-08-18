import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// First, create the thunk
export const fetchUserByUserName = createAsyncThunk(
    'authentication/fetchUserByUserName',
    async (data) => {
        /// Our api 
 const response= await  axios.post("http://localhost:8080/login",data);
 return response.data;
    
    }
  )

