// src/features/educationSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Start with ONE empty entry so the form is visible immediately
const initialState = [
  {
    id: Date.now(),
    courseName: '',
    completionYear: '',
    college: '',
    percentage: '',
  }
];

const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    addEducation(state) {
      state.push({
        id: Date.now(),
        courseName: '',
        completionYear: '',
        college: '',
        percentage: '',
      });
    },

    updateEducation(state, action) {
      const { id, field, value } = action.payload;
      const entry = state.find((edu) => edu.id === id);
      if (entry) {
        entry[field] = value;
      }
    },

    deleteEducation(state, action) {
      const id = action.payload;
      return state.filter((edu) => edu.id !== id);
    },
  },
});

export const { addEducation, updateEducation, deleteEducation } = educationSlice.actions;
export default educationSlice.reducer;