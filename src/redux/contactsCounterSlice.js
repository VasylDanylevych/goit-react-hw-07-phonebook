import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './thunk';

const defaultStatus = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const customArr = [fetchContactsThunk, addContactThunk, deleteContactThunk];

const fn = status => customArr.map(el => el[status]);

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
};

const handleFulfilledDelete = (state, { payload }) => {
  console.log('payload: ', payload);
  state.items = state.items.filter(item => item.id !== payload.id);
};

const handleFulfilledAdd = (state, { payload }) => {
  state.items.push(payload);
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactsCounterSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)

      .addMatcher(isAnyOf(...fn(defaultStatus.fulfilled)), handleFulfilled)
      .addMatcher(isAnyOf(...fn(defaultStatus.pending)), handlePending)
      .addMatcher(isAnyOf(...fn(defaultStatus.rejected)), handleRejected);
  },
});
