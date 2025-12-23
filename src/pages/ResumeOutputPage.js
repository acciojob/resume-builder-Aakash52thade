// src/pages/ResumeOutputPage.js
import React from 'react';
import ResumePreview from '../components/ResumePreview';

const ResumeOutputPage = () => {
  return (
    <div>
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h2>All steps completed - your resume is ready!!</h2>
        <div style={{ margin: '20px 0' }}>
          <button style={{ margin: '0 10px', padding: '10px 20px' }}>RESET</button>
          <button style={{ margin: '0 10px', padding: '10px 20px' }}>EDIT</button>
        </div>
        <button style={{ padding: '15px 50px', backgroundColor: '#e91e63', color: 'white', border: 'none', fontWeight: 'bold' }}>
          DOWNLOAD / PREVIEW
        </button>
      </div>

      <ResumePreview />
    </div>
  );
};

export default ResumeOutputPage;