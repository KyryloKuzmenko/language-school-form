import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронное действие для отправки формы
export const submitForm = createAsyncThunk(
  'form/submitForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/users', formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data || 'Ошибка при отправке данных'
      );
    }
  }
);

const formSlice = createSlice({
  name: 'form',
  initialState: {
    submitted: false,
    loading: false,
    error: null,
  },
  reducers: {
    hideForm(state) {
      state.submitted = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(submitForm.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitForm.fulfilled, state => {
        state.loading = false;
        state.submitted = true;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { hideForm } = formSlice.actions;

export default formSlice.reducer;
