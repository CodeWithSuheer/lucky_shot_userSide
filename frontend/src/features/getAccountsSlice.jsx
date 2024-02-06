import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//API URL
const getAccountsUrl = "http://localhost:8080/api/accounts/getFilterdAccounts";
const updatetAccountsUrl = "http://localhost:8080/api/accounts/updateAccountLimit";


// getAccountsAsync
export const getAccountsAsync = createAsyncThunk("accounts/getAccounts", async (formData) => {
    try {
        const response = await axios.post(getAccountsUrl, formData);
        // console.log(response.data);
        return response.data;

    } catch (error) {
        console.log(error.response.data.msg)
    }
});

// updateAccountsAsync
export const updateAccountLimitAsync = createAsyncThunk("accounts/updateAccounts", async (id) => {
    try {
        const response = await axios.post(updatetAccountsUrl, { id });
        console.log(response.data);
        return response.data;

    } catch (error) {
        console.log(error.response.data.msg)
    }
});


// INITIAL STATE
const initialState = {
    loading: false,
    allAccounts: [],
};

const getAccountsSlice = createSlice({
    name: "getAccountsSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // getAccountsAsync
            .addCase(getAccountsAsync.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAccountsAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.allAccounts = action.payload;
            })
    }
})

export default getAccountsSlice.reducer;

