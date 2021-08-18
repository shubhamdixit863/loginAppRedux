import { configureStore } from "@reduxjs/toolkit";
import authentication from "../slices/authenticationSlice";

const store=configureStore({

    reducer:{

authentication
    }
})


export default store;