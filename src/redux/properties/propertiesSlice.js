import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProperties = createAsyncThunk(
  'properties/fetchProperties',
  async () => {
    const response = await fetch('http://127.0.0.1:4000/api/v1/properties');
    const data = await response.json();
    return data;
  },
);

const propertiesSlice = createSlice({
  name: 'properties',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchProperties.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        data: action.payload,
      }))
      .addCase(fetchProperties.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

// export const { actions: propertiesActions } = propertiesSlice;
export default propertiesSlice.reducer;
export const selectProperties = (state) => state.properties;
