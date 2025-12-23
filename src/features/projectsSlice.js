// src/features/projectSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = []; // ← Empty array — you got it!

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject(state) {
      state.push({
        id: Date.now(),
        projectName: '',
        techStack: '',
        description: '',
      });
    },

    updateProject(state, action) {
      const { id, field, value } = action.payload;
      const project = state.find((p) => p.id === id);
      if (project) {
        project[field] = value;
      }
    },

    removeProject(state, action) {
      const id = action.payload; // ← Just id — clean!
      return state.filter((p) => p.id !== id);
    },
  },
});

export const { addProject, updateProject, removeProject } = projectSlice.actions;
export default projectSlice.reducer;