import { createSlice } from '@reduxjs/toolkit';

//  const filterSlice = createSlice({
//   name: 'filter',
//   initialState: { filteredAdverts: [] },
//   reducers: {
//     setFilter(state, action) {
//       state.filteredAdverts = action.payload;
//     },
//   },
// });

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    make: null,
    rentalPrice: null,
    mileage: {from: '', to: ''},
  },
  reducers: {
    setMake: (state, action) => {
      state.make = action.payload;
    },
    setRentalPrice: (state, action) => {
      state.rentalPrice = action.payload;
    },
    setMileage: (state, action) => {
      state.mileage = action.payload
    },
    resetFilter: (state) => {
      state.make = null;
      state.rentalPrice = null;
      state.mileage  = {from: '', to: ''}
    }
  }
})

// export const { setFilter } = filterSlice.actions;
export const { setMake, setRentalPrice, setMileage, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;