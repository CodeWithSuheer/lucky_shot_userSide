import { configureStore } from "@reduxjs/toolkit";
import placeBetSlice from "../features/placeBetSlice";
import getAccountsSlice from "../features/getAccountsSlice";

export const store = configureStore({
    reducer: {
        betData: placeBetSlice,
        accounts: getAccountsSlice
    },
});