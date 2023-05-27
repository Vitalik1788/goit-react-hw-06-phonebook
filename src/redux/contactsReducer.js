import { createSlice } from "@reduxjs/toolkit";


const contactsReducer = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addUserContact(state, action) {
      state.push(action.payload)
    },
    removeUserContact(state, action) {
      return state.filter(contact => contact.id !== action.payload)
    }
  }
});

export const { addUserContact, removeUserContact } = contactsReducer.actions;

export default contactsReducer.reducer;