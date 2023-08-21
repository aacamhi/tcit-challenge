import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        value: ''
    },
    reducers: {
      change: (state, action) => {
        state.value = action.payload;
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { change } = filterSlice.actions
  
  export default filterSlice.reducer