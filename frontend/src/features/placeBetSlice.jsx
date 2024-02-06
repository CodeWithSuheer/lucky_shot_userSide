import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

//API URL
const createBetUrl = "http://localhost:8080/api/bets/createBet";


// createBetAsync
export const createBetAsync = createAsyncThunk("bet/createBet", async (formData) => {
    try {
        const response = await axios.post(createBetUrl, formData);
        console.log(response.data);
        // toast.success(response.data.msg);
        return response.data;

    } catch (error) {
        console.log(error.response.data.message)
        // toast.success(error.response.data.message)
    }
});



// INITIAL STATE
const initialState = {
    loading: false,
    createBet: null,
};


const placeBetSlice = createSlice({
    name: "placeBetSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // createProductAsync
            .addCase(createBetAsync.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(createBetAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.createBet = action.payload;
            })
    }
})

export default placeBetSlice.reducer;



