// src/pages/ProfilePage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../features/profileSlice';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateProfile({ field: name, value }));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
        Add your profile details
      </h2>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          First Name *
        </label>
        <input
          type="text"
          name="fname"
          value={profile.fname}
          onChange={handleChange}
          placeholder="Enter first name"
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Last Name *
        </label>
        <input
          type="text"
          name="lname"
          value={profile.lname}
          onChange={handleChange}
          placeholder="Enter last name"
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Phone *
        </label>
        <input
          type="text"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Address *
        </label>
        <textarea
          name="address"
          value={profile.address}
          onChange={handleChange}
          placeholder="Enter address"
          rows="3"
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Profile Image URL
        </label>
        <input
          type="text"
          name="url"
          value={profile.url}
          onChange={handleChange}
          placeholder="Enter profile image URL"
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>

      {profile.url && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <img
            src={profile.url}
            alt="Profile preview"
            style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%' }}
            onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
          />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;