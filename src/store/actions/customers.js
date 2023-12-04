import httpService from "@/services/httpService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCustomers = createAsyncThunk(
    "fetchAllCustomers",
    async ({ page }, { rejectWithValue }) => {
        try {
            const response = await httpService({
                url: `users?page=${page}`
            })
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);