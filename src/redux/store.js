import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsCounterSlice = createSlice({
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

const filterCounterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact(state, action) {
      return action.payload;
    },
  },
});

const reducer = combineReducers({
  contacts: contactsCounterSlice.reducer,
  filter: filterCounterSlice.reducer,
});

const persistConfig = {
  key: 'contactsList',
  storage: storage,
  whitelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export const { addContact, deleteContact } = contactsCounterSlice.actions;
export const { filterContact } = filterCounterSlice.actions;
