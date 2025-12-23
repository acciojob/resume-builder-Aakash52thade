// src/features/socialSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = []; // array of { id, link }

const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    addSocial(state, action) {
      const link = action.payload.trim();
      if (link) {
        state.push({
          id: Date.now(),
          link: link,
        });
      }
    },
    removeSocial(state, action) {
      const id = action.payload;
      return state.filter((s) => s.id !== id);
    },
  },
});

export const { addSocial, removeSocial } = socialSlice.actions;
export default socialSlice.reducer;