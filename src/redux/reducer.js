import { combineReducers } from '@reduxjs/toolkit';
import { contactsCounterSlice } from './contactsCounterSlice';
import { filterCounterSlice } from './filterCounterSlice';

export const reducer = combineReducers({
  contacts: contactsCounterSlice.reducer,
  filter: filterCounterSlice.reducer,
});
