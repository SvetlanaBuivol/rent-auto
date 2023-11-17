// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchFavoritesAsync = createAsyncThunk(
//   'favorites/fetchFavorites',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/favorites');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addToFavoritesAsync = createAsyncThunk(
//   'favorites/addToFavorites',
//   async (advert, thunkAPI) => {
//     try {
//       const response = await axios.post('/favorites', advert);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteFromFavoritesAsync = createAsyncThunk(
//     'favorites/deleteFromFavorites',
//     async (advertId, thunkAPI) => {
//         try {
//             const response = await axios.delete('/favorites', advertId);
//             return response.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );