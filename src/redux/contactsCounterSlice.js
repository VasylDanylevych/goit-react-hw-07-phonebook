import { createSlice } from '@reduxjs/toolkit';

export const contactsCounterSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      return [...state, { ...action.payload }];
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsCounterSlice.actions;
