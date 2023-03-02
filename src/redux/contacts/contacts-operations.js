import { createAsyncThunk } from '@reduxjs/toolkit';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import * as contactsApi from '../../shared/services/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const data = await contactsApi.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await contactsApi.deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = await contactsApi.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  },
  {
    condition: ({ name }, { getState }) => {
      const {
        contacts: { contacts },
      } = getState();
      if (
        contacts.find(
          contact => name.toLowerCase() === contact.name.toLowerCase()
        )
      ) {
        NotificationManager.info(`${name} is already in contacts.`);
        return false;
      }
    },
  }
);
