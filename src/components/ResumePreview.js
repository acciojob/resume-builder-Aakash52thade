// src/components/ResumePreview.js
import React from 'react';
import { useSelector } from 'react-redux';

const ResumePreview = () => {
  const profile = useSelector((state) => state.profile);
  const educationList = useSelector((state) => state.education);
  const skillsList = useSelector((state) => state.skills);
  const projectsList = useSelector((state) => state.projects);
  const socialList = useSelector((state) => state.social);

  return (
    <div style={{ maxWidth: '1000px', margin: '20px auto', padding: '40px', backgroundColor: '#fff', boxShadow: '0 0 20px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
      <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
        {/* Left: Photo */}
        <div style={{ flex: '0 0 200px', textAlign: 'center' }}>
          {profile.url ? (
            <img
              src={profile.url}
              alt="Profile"
              style={{
                width: '200px',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              }}
              onError={(e) => (e.target.src = 'https://via.placeholder.com/200')}
            />
          ) : (
            <div style={{
              width: '200px',
              height: '200px',
              backgroundColor: '#f0f0f0',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#aaa',
            }}>
              No Photo
            </div>
          )}
        </div>

        {/* Right: Content */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h1 style={{ fontSize: '42px', margin: '0 0 15px 0' }}>
            {profile.fname || 'First'} {profile.lname || 'Last'}
          </h1>

          {profile.address && <p><strong>Address :</strong> {profile.address}</p>}
          {profile.phone && <p><strong>Phone :</strong> {profile.phone}</p>}

          <hr style={{ margin: '30px 0' }} />

          {/* Skills */}
          {skillsList.length > 0 && (
            <>
              <h2>Skills</h2>
              <ul style={{ columns: 2, paddingLeft: '20px' }}>
                {skillsList.map((s) => (
                  <li key={s.id}>• {s.skill}</li>
                ))}
              </ul>
            </>
          )}

          {/* Education */}
          {educationList.length > 0 && (
            <>
              <h2>Education</h2>
              {educationList.map((edu) => (
                <div key={edu.id} style={{ marginBottom: '20px' }}>
                  <h3>{edu.college}</h3>
                  <p>Year: {edu.completionYear}</p>
                  <p>Course: {edu.courseName}</p>
                  <p>Percentage: {edu.percentage}</p>
                </div>
              ))}
            </>
          )}

          {/* Projects */}
          {projectsList.length > 0 && (
            <>
              <h2>Mini Projects</h2>
              {projectsList.map((proj) => (
                <div key={proj.id} style={{ marginBottom: '20px' }}>
                  <h3>{proj.projectName}</h3>
                  <p>{proj.description}</p>
                  <p><em>Tech Stack: {proj.techStack}</em></p>
                </div>
              ))}
            </>
          )}

          {/* Social Links */}
          {socialList.length > 0 && (
            <>
              <h2>Social Links</h2>
              <ul>
                {socialList.map((item) => (
                  <li key={item.id}>
                    <a href={item.link.startsWith('http') ? item.link : `https://${item.link}`} target="_blank" rel="noopener noreferrer">
                      {item.link}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;