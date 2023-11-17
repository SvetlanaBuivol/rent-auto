import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64d7ebd65f9bf5b879ce0da2.mockapi.io';

export const fetchAllAdvertssAsync = createAsyncThunk(
  'adverts/fetchAdverts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

