import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    fname: '',
    lname: '',
    phone: '',
    address: '',
    url: '', //profile img
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
   
    reducers: {
        updateProfile : (state, action) => {
           const {field, value} = action.payload;
           state[field] = value;

        },

        resetProfile : () => {
          return initialState;
        }
    }
})

export const {updateProfile, resetProfile} = profileSlice.actions;
export default profileSlice.reducer;