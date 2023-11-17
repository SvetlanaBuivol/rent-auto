// import { createSlice } from '@reduxjs/toolkit';
// import { addToFavoritesAsync, fetchFavoritesAsync } from './favoritesOperations';


// const favoritesSlice = createSlice({
//   name: 'favorites',
//   initialState: {
//       favorites: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: builder => {
//     builder
//         .addCase(fetchFavoritesAsync.pending, (state) => {
//             state.loading = true;
//         })
//         .addCase(fetchFavoritesAsync.fulfilled, (state, action) => {
//             state.favorites = action.payload;
//             state.loading = false;
//         })
//         .addCase(fetchFavoritesAsync.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message;
//         })
//         .addCase(addToFavoritesAsync.pending, (state) => {
//             state.loading = true;
//         })
//       .addCase(addToFavoritesAsync.fulfilled, (state, action) => {
//             state.favorites = action.payload;
//             state.loading = false;
//         })
//   },
// });

// export const favoritesReducer = favoritesSlice.reducer;