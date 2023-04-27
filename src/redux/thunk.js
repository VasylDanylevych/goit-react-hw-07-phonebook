import { createAsyncThunk } from '@reduxjs/toolkit';
import ContactsApi from 'services/contactsApi';
const contactsApi = new ContactsApi();

export const fetchContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  contactsApi.fetchContacts()
);

export const addContactThunk = createAsyncThunk('contacts/addContact', data =>
  contactsApi.addContact(data)
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => contactsApi.deleteContact(id)
);
