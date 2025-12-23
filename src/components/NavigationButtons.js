// src/components/NavigationButtons.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, prevStep } from '../features/navigationSlice';

const NavigationButtons = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.navigation.currentStep);

  const isFirstStep = currentStep === 0;

  return (
    <div style={{ marginTop: '30px', textAlign: 'center' }}>
      <button
        id="back"
        onClick={() => dispatch(prevStep())}
        disabled={isFirstStep}
        style={{ marginRight: '10px', padding: '10px 20px' }}
      >
        Back
      </button>

      <button
        id="save_continue"
        onClick={() => dispatch(nextStep())}
        style={{ marginRight: '10px', padding: '10px 20px' }}
      >
        Save & Continue
      </button>

      <button
        id="next"
        onClick={() => dispatch(nextStep())}
        style={{ padding: '10px 20px' }}
      >
        Next
      </button>
    </div>
  );
};

export default NavigationButtons;