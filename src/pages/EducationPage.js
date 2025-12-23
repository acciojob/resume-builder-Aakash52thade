// src/pages/EducationPage.js (Updated to match your reference UI)
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addEducation,
  updateEducation,
  deleteEducation,
} from '../features/educationSlice';

const EducationPage = () => {
  const dispatch = useDispatch();
  const educationList = useSelector((state) => state.education);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      {/* Title */}
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
        Add your Education Details
      </h2>

      {/* Add Education Button at Top - Required for Cypress */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <button
          id="add_education"
          onClick={() => dispatch(addEducation())}
          style={{
            padding: '12px 30px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          ADD EDUCATION
        </button>
      </div>

      {/* Education Entries */}
      {educationList.map((edu, index) => (
        <div
          key={edu.id}
          style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            padding: '30px',
            marginBottom: '30px',
          }}
        >
          {/* 2x2 Grid Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Course Name *
              </label>
              <input
                type="text"
                name="courseName"
                value={edu.courseName}
                onChange={(e) =>
                  dispatch(updateEducation({
                    id: edu.id,
                    field: 'courseName',
                    value: e.target.value,
                  }))
                }
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '6px',
                  fontSize: '16px',
                }}
                placeholder="e.g., B.Tech in Computer Science"
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Completion Year *
              </label>
              <input
                type="text"
                name="completionYear"
                value={edu.completionYear}
                onChange={(e) =>
                  dispatch(updateEducation({
                    id: edu.id,
                    field: 'completionYear',
                    value: e.target.value,
                  }))
                }
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '6px',
                  fontSize: '16px',
                }}
                placeholder="e.g., 2023"
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                College/School *
              </label>
              <input
                type="text"
                name="college"
                value={edu.college}
                onChange={(e) =>
                  dispatch(updateEducation({
                    id: edu.id,
                    field: 'college',
                    value: e.target.value,
                  }))
                }
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '6px',
                  fontSize: '16px',
                }}
                placeholder="e.g., Delhi University"
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Percentage *
              </label>
              <input
                type="text"
                name="percentage"
                value={edu.percentage}
                onChange={(e) =>
                  dispatch(updateEducation({
                    id: edu.id,
                    field: 'percentage',
                    value: e.target.value,
                  }))
                }
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '6px',
                  fontSize: '16px',
                }}
                placeholder="e.g., 85%"
              />
            </div>
          </div>

          {/* Buttons: DELETE and (optional) another ADD */}
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button
              onClick={() => dispatch(deleteEducation(edu.id))}
              style={{
                padding: '10px 25px',
                backgroundColor: '#f8f9fa',
                border: '1px solid #ccc',
                borderRadius: '6px',
                marginRight: '15px',
                cursor: 'pointer',
              }}
            >
              DELETE
            </button>

            {/* Optional: Add another one here if you want ADD inside card */}
            {/* <button style={{...blue style...}}>ADD EDUCATION</button> */}
          </div>
        </div>
      ))}

      {/* Message if no education */}
      {educationList.length === 0 && (
        <p style={{ textAlign: 'center', color: '#888', fontStyle: 'italic' }}>
          Click "ADD EDUCATION" to add your qualifications.
        </p>
      )}
    </div>
  );
};

export default EducationPage;