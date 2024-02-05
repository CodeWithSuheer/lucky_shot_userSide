import { configureStore } from "@reduxjs/toolkit";
import placeBetSlice from "../features/placeBetSlice";

export const store = configureStore({
    reducer: {
        betData: placeBetSlice,
    },
});