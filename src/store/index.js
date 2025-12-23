// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/profileSlice';      // ← Wrong import (was navigationSlice)
import navigationReducer from '../features/navigationSlice'; // ← Add correct name
import educationReducer from '../features/educationSlice';
import skillsReducer from '../features/skillsSlice';
import projectReducer from '../features/projectsSlice'
import socialReducer from '../features/socialSlice';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    navigation: navigationReducer,
    education: educationReducer,
    skills: skillsReducer,    // ← Typo: "sills" → "skills"
    projects: projectReducer,
    social: socialReducer,
  },
});

export default store;