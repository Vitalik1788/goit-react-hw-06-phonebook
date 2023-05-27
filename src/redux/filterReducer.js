import { createSlice } from '@reduxjs/toolkit';

const filterReducer = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filteredUserContact(state, action) {
      return state = action.payload
    }   
  },
});

export const { filteredUserContact } = filterReducer.actions;
export default filterReducer.reducer;
