import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from './feature/countries/countriesSlice';

const store = configureStore({
  reducer: {
    countries: countriesSlice,
  },
});

export default store;
