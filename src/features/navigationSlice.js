import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
       currentStep:  0,  //0 = profile, 1= education;
    },
    
    reducers: {

        nextStep:(state) => {
          state.currentStep += 1;
        },
        prevStep:(state) => {
          if(state.currentStep > 0){
            state.currentStep -=1
          } 
        },

        goToStep : (state, action) => {
           state.currentStep = action.payload;
        }
    }
})

export const {nextStep, prevStep, goToStep} = navigationSlice.actions;
export default navigationSlice.reducer;