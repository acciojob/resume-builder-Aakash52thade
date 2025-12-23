// src/features/skillsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    addSkills(state, action) {
      const newSkill = action.payload.trim();
      if (newSkill) {
        state.push({
          id: Date.now(),
          skill: newSkill,
        });
      }
    },
    removeSkills(state, action) {
      const id = action.payload;
      return state.filter((s) => s.id !== id);
    },
  },
});

export const { addSkills, removeSkills } = skillsSlice.actions;
export default skillsSlice.reducer;