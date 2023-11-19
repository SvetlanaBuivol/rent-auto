import { createSlice } from '@reduxjs/toolkit';

 const filterSlice = createSlice({
  name: 'filter',
  initialState: { filteredAdverts: [] },
  reducers: {
    setFilter(state, action) {
      state.filteredAdverts = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;