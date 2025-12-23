// src/pages/SkillsPage.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSkills, removeSkills } from '../features/skillsSlice';

const SkillsPage = () => {
  const dispatch = useDispatch();
  const skillsList = useSelector((state) => state.skills); // array of { id, skill }

  const [inputValue, setInputValue] = useState(''); // local state for input

  const handleAddSkill = () => {
    if (inputValue.trim()) {
      dispatch(addSkills(inputValue.trim()));
      setInputValue(''); // clear input
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#666' }}>Add your Skills</h2>

      <div style={{ marginBottom: '40px' }}>
        <input
          type="text"
          name="skill"
          placeholder="e.g., React, JavaScript, Python"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()} // optional: add on Enter
          style={{
            width: '70%',
            padding: '15px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '6px',
          }}
        />

        <button
          id="add_skill"
          onClick={handleAddSkill}
          style={{
            padding: '15px 30px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            marginLeft: '10px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          ADD SKILL
        </button>
      </div>

      {/* Display added skills */}
      {skillsList.length > 0 && (
        <div>
          <h3>Your Skills:</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {skillsList.map((item) => (
              <li
                key={item.id}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#e9ecef',
                  padding: '10px 15px',
                  margin: '8px',
                  borderRadius: '30px',
                  fontSize: '16px',
                }}
              >
                {item.skill}
                <button
                  onClick={() => dispatch(removeSkills(item.id))}
                  style={{
                    marginLeft: '10px',
                    background: 'none',
                    border: 'none',
                    color: '#dc3545',
                    cursor: 'pointer',
                    fontSize: '18px',
                  }}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SkillsPage;