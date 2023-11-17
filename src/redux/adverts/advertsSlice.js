import { createSlice } from '@reduxjs/toolkit';
import { fetchAllAdvertssAsync } from './advertsOperations';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
      adverts: [],
      favorites: [],
    loading: false,
    error: null,
  },
    reducers: {
        toggleFavorites: (state, { payload }) => {
            const index = state.favorites.findIndex(advert => advert.id === payload.id)

            if (index !== -1) {
                state.favorites = state.favorites.filter(advert => advert.id !== payload.id)
            } else {
                
            state.favorites = [...state.favorites, payload]}
      }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllAdvertssAsync.pending, state => {
        state.loading = true;
      })
      .addCase(fetchAllAdvertssAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.adverts = action.payload;
      })
      .addCase(fetchAllAdvertssAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export const { toggleFavorites } = advertsSlice.actions;
export default advertsSlice.reducer;