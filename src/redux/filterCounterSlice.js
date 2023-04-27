import { createSlice } from '@reduxjs/toolkit';

export const filterCounterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact(state, action) {
      return action.payload;
    },
  },
});

export const { filterContact } = filterCounterSlice.actions;
