import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  aboutYou: '',
};

export const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFormData: (state) => {
      return initialState;
    },
  },
});

export const { updateFormData, resetFormData } = formDataSlice.actions;

export const selectFormData = (state) => state.formData;

export default formDataSlice.reducer;
