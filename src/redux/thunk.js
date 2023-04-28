import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'services/contactsApi';

export const fetchContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  fetchContacts()
);

export const addContactThunk = createAsyncThunk('contacts/addContact', data =>
  addContact(data)
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => deleteContact(id)
);
