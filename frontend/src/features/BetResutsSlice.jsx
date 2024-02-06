

import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//API URL
const getBetResultsUrl = "http://localhost:8080/api/bets/getBetWinners";

// createBetAsync
export const getBetResultsAsync = createAsyncThunk("bet/getBetWinners", async () => {
    try {
        const response = await axios.post(getBetResultsUrl);
        console.log(response);
        // Store data in local storage
        localStorage.setItem("betResults", JSON.stringify(response.data));
        // Remove data after 30 minutes
        setTimeout(() => {
            localStorage.removeItem("betResults");
        },  1 * 60 * 1000); // 30 minutes in milliseconds
        return response.data;
    } catch (error) {
        console.log(error.response.data.msg)
    }
});

const getBetResultsFromLocalStorage = () => {
    const betResults = localStorage.getItem("betResults");
    if (betResults) {
        return JSON.parse(betResults);
    } else {
        return null;
    }
};

// INITIAL STATE
const initialState = {
    loading: false,
    AllBetResults:  getBetResultsFromLocalStorage() || [],
};


const BetResults = createSlice({
    name: "BetResults",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // createProductAsync
            .addCase(getBetResultsAsync.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getBetResultsAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.AllBetResults = action.payload;
            })
    }
})

export default BetResults.reducer;



