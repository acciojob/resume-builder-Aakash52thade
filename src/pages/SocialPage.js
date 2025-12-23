// src/pages/SocialPage.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSocial, removeSocial } from '../features/socialSlice';

const SocialPage = () => {
  const dispatch = useDispatch();
  const socialList = useSelector((state) => state.social);

  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      dispatch(addSocial(inputValue.trim()));
      setInputValue('');
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}>
      <h2 style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
        Add social links like linkedin, github etc
      </h2>

      {/* Input Card */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        padding: '40px',
        marginBottom: '40px',
      }}>
        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
          Social Links *
        </label>
        <input
          type="text"
          name="Social"
          placeholder="e.g., https://linkedin.com/in/yourname or GitHub: username"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            marginBottom: '20px',
          }}
        />

        <div style={{ textAlign: 'center' }}>
          <button
            style={{
              padding: '12px 30px',
              backgroundColor: '#f8f9fa',
              border: '1px solid #ccc',
              borderRadius: '6px',
              marginRight: '20px',
              cursor: 'pointer',
            }}
          >
            DELETE SOCIAL
          </button>
          <button
            id="add_social"
            onClick={handleAdd}
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
            ADD SOCIAL
          </button>
        </div>
      </div>

      {/* Display Added Links */}
      {socialList.length > 0 && (
        <div>
          <h3 style={{ marginBottom: '20px' }}>Your Social Links:</h3>
          <ul style={{ paddingLeft: '20px' }}>
            {socialList.map((item) => (
              <li key={item.id} style={{ margin: '15px 0', fontSize: '18px' }}>
                <a
                  href={item.link.startsWith('http') ? item.link : `https://${item.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#007bff', textDecoration: 'none' }}
                >
                  {item.link}
                </a>
                <button
                  onClick={() => dispatch(removeSocial(item.id))}
                  style={{
                    marginLeft: '15px',
                    background: 'none',
                    border: 'none',
                    color: '#dc3545',
                    cursor: 'pointer',
                    fontSize: '20px',
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

export default SocialPage;