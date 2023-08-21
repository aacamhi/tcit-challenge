import { createSlice } from "@reduxjs/toolkit";

export const newPostSlice = createSlice({
    name: 'newPost',
    initialState: {
      value: {
        name: '',
        description: ''
      },
    },
    reducers: {
      setName: (state, action) => {
        state.value.name = action.payload;
      },
      setDescription: (state, action) => {
        state.value.description = action.payload
      }

    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setName, setDescription } = newPostSlice.actions
  
  export default newPostSlice.reducer