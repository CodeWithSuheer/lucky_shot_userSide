import { configureStore } from "@reduxjs/toolkit";
import placeBetSlice from "../features/placeBetSlice";
import BetResutsSlice from "../features/BetResutsSlice";
import getAccountsSlice from "../features/getAccountsSlice";


export const store = configureStore({
    reducer: {
        betData: placeBetSlice,
        betResults : BetResutsSlice,
        accounts: getAccountsSlice.
    },
});