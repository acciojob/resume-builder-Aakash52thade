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
      <h2>Profile Details</h2>

      <div style={{ marginBottom: '15px' }}>
        <label>First Name</label>
        <input
          type="text"
          name="fname"
          value={profile.fname}
          onChange={handleChange}
          placeholder="Enter first name"
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Last Name</label>
        <input
          type="text"
          name="lname"
          value={profile.lname}
          onChange={handleChange}
          placeholder="Enter last name"
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Address</label>
        <textarea
          name="address"
          value={profile.address}
          onChange={handleChange}
          placeholder="Enter address"
          rows="3"
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Profile Image URL</label>
        <input
          type="text"
          name="url"
          value={profile.url}
          onChange={handleChange}
          placeholder="https://example.com/photo.jpg"
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
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