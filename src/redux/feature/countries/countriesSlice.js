import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from '../../../services/apiService';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const response = await getRequest();
    return response || {};
  },
);

const initialState = {
  countriesbyregion: {},
  loading: false,
  countriesInProcess: null,
  error: null,
  fetched: false,
  countryfocused: {},
  sortbyregion: [],
  worldpopulation: 0,
  countries: [],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    getcountry(state, action) {
      state.countryfocused = state.countries.find(
        (country) => country.id === action.payload,
      );
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        console.log(action.payload, 'PAYLOAD');
        const countriesByContinent = {};

        action.payload.forEach((country) => {
          if (!countriesByContinent[country.region]) {
            countriesByContinent[country.region] = {};
            countriesByContinent[country.region].countries = [];
          }

          countriesByContinent[country.region].countries.push(country);
        });
        Object.keys(countriesByContinent).forEach((continent) => {
          const { countries } = countriesByContinent[continent];
          countriesByContinent[continent].countries = countries
            .sort((a, b) => b.population - a.population)
            .slice(0, 5);
        });
        Object.keys(countriesByContinent).forEach((continent) => {
          const { countries } = countriesByContinent[continent];
          countriesByContinent[continent].countries = countries
            .sort((a, b) => b.population - a.population)
            .slice(0, 5);
          if (
            Object.prototype.hasOwnProperty.call(
              countriesByContinent,
              continent,
            )
          ) {
            const { countries } = countriesByContinent[continent];
            const continentPopulation = countries.reduce(
              (acc, country) => acc + country.population,
              0,
            );
            countriesByContinent[continent].continentpopulation = continentPopulation;
            state.worldpopulation
              += countriesByContinent[continent].continentpopulation;
          }
        });

        state.countriesbyregion = countriesByContinent;
        state.loading = false;
        state.error = null;
        state.fetched = true;
      })
      .addCase(fetchCountries.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetchc ountries from the API.';
      });
  },
});

export const { getcountry } = countriesSlice.actions;
export default countriesSlice.reducer;
