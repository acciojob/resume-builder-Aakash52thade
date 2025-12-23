// src/features/educationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  // Start with empty array. User will add entries.
  // You can pre-add one empty entry if you want to show a form immediately
];

const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    // Add a new empty education entry
    addEducation(state) {
      state.push({
        id: Date.now(), // simple unique ID (good enough for this project)
        courseName: '',
        completionYear: '',
        college: '',
        percentage: '',
      });
    },

    // Update a specific field in a specific education entry
    updateEducation(state, action) {
      const { id, field, value } = action.payload;
      const entry = state.find((edu) => edu.id === id);
      if (entry) {
        entry[field] = value;
      }
    },

    // Delete an education entry by id
    deleteEducation(state, action) {
      const id = action.payload;
      return state.filter((edu) => edu.id !== id);
    },
  },
});

export const { addEducation, updateEducation, deleteEducation } = educationSlice.actions;
export default educationSlice.reducer;