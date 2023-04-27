import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './thunk';

const handlePending = state => {
  state.isLoading = true;
};

// const handleFulfilled = state => {
//   state.isLoading = false;
//   state.error = null;
// };

const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
};

const handleFulfilledDelete = (state, { payload }) => {
  state.items.filter(contact => contact.id !== payload);
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
      .addCase(fetchContactsThunk.pending, handlePending)
      .addCase(fetchContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(fetchContactsThunk.rejected, handleRejected)

      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
      .addCase(addContactThunk.rejected, handleRejected)

      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      .addCase(deleteContactThunk.rejected, handleRejected);
  },
});

export const { addContact, deleteContact } = contactsCounterSlice.actions;
