import { createSlice } from '@reduxjs/toolkit';
import { fetchAllAdvertssAsync } from './advertsOperations';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
      adverts: [],
    favorites: [],
    currentPage: 1,
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
      },
      incrementPage: (state) => {
        state.currentPage += 1;
        console.log('Increment: ', state.currentPage)
      }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllAdvertssAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllAdvertssAsync.fulfilled, (state, action) => {
        state.loading = false;
        action.payload.forEach(newAdvert => {
          if (!state.adverts.some(advert => advert.id === newAdvert.id)) {
            state.adverts.push(newAdvert)
          }
        })
      })
      .addCase(fetchAllAdvertssAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export const { toggleFavorites, incrementPage } = advertsSlice.actions;
export default advertsSlice.reducer;