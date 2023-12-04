import customerSlice from "./reducers/customerSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        customers: customerSlice,
    },
});

export default store;