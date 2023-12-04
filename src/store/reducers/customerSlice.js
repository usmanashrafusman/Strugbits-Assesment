import { createSlice, current } from "@reduxjs/toolkit";
import { fetchCustomers } from "../actions/customers";
import { generateRandomId } from "@/utils";
const initialState = {
  entities: [],
  pagination: 0,
  status: "idle",
};

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addItem(state, action) {
      const { entities } = JSON.parse(JSON.stringify(current(state)))
      if (action.payload) {
        const [first_name = "", last_name = ""] = action.payload?.name?.split(" ");
        const email = action.payload.email;
        const avatar = action.payload?.avatar;
        const id = generateRandomId()
        entities.push({ id, first_name, last_name, email, avatar });
      };
      state.entities = entities;
      localStorage.setItem('customers', entities);
    },
    deleteItem(state, action) {
      const { entities } = JSON.parse(JSON.stringify(current(state)))
      const newEntities = entities.filter((item) => item.id !== action.payload);
      state.entities = newEntities;
      localStorage.setItem('customers', newEntities);
    },
    updateItem(state, action) {
      const { entities } = JSON.parse(JSON.stringify(current(state)));
      const itemIndex = entities.findIndex((obj) => obj.id === action.payload.id);
      const avatar = action.payload?.avatar;
      let item = null;
      if (itemIndex !== -1) {
        item = JSON.parse(JSON.stringify(entities[itemIndex]))
      }
      if (item && action.payload) {
        const [first_name = "", last_name = ""] = action.payload?.name?.split(" ");
        const email = action.payload.email;
        if (first_name) {
          item.first_name = first_name
        }
        if (last_name) {
          item.last_name = last_name
        }
        if (email) {
          item.email = email;
        }
        if (avatar) {
          item.avatar = avatar;
        }
      }
      entities[itemIndex] = item;
      state.entities = entities;
      localStorage.setItem('customers', entities);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCustomers.pending, (state, action) => {
      state.status = "pending";
    }),
      builder.addCase(fetchCustomers.rejected, (state, action) => {
        state.status = "error";
      }),
      builder.addCase(fetchCustomers.fulfilled, (state, action) => {
        const entities = action.payload?.data?.data;
        state.entities = entities;
        state.status = "success";
      });
  },
});

export const { addItem, setEntites, deleteItem, updateItem } = customersSlice.actions;
export default customersSlice.reducer;