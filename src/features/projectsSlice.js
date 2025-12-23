// src/features/projectsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  // Pre-add one empty entry
  {
    id: Date.now(),
    projectName: '',
    techStack: '',
    description: '',
  }
];

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
      const id = action.payload;
      return state.filter((p) => p.id !== id);
    },
  },
});

export const { addProject, updateProject, removeProject } = projectSlice.actions;
export default projectSlice.reducer;