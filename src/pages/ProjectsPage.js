// src/pages/ProjectsPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProject,
  updateProject,
  removeProject,
} from '../features/projectsSlice';

const ProjectsPage = () => {
  const dispatch = useDispatch();
  const projectsList = useSelector((state) => state.projects);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
        Add your Mini Projects
      </h2>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <button
          id="add_project"
          onClick={() => dispatch(addProject())}
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
          ADD PROJECT
        </button>
      </div>

      {projectsList.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888', fontStyle: 'italic' }}>
          No projects added yet. Click "ADD PROJECT" to start.
        </p>
      ) : (
        projectsList.map((proj) => (
          <div
            key={proj.id}
            style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              padding: '30px',
              marginBottom: '30px',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Project Name *
                </label>
                <input
                  type="text"
                  name="projectName"
                  value={proj.projectName}
                  onChange={(e) =>
                    dispatch(
                      updateProject({
                        id: proj.id,
                        field: 'projectName',
                        value: e.target.value,
                      })
                    )
                  }
                  placeholder="e.g., E-Commerce Website"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ccc',
                    borderRadius: '6px',
                    fontSize: '16px',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Tech Stack *
                </label>
                <input
                  type="text"
                  name="techStack"
                  value={proj.techStack}
                  onChange={(e) =>
                    dispatch(
                      updateProject({
                        id: proj.id,
                        field: 'techStack',
                        value: e.target.value,
                      })
                    )
                  }
                  placeholder="e.g., React, Node.js, MongoDB"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ccc',
                    borderRadius: '6px',
                    fontSize: '16px',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Description *
                </label>
                <textarea
                  name="description"
                  value={proj.description}
                  onChange={(e) =>
                    dispatch(
                      updateProject({
                        id: proj.id,
                        field: 'description',
                        value: e.target.value,
                      })
                    )
                  }
                  placeholder="Brief description of the project..."
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ccc',
                    borderRadius: '6px',
                    fontSize: '16px',
                    resize: 'vertical',
                  }}
                />
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button
                id="delete"
                onClick={() => dispatch(removeProject(proj.id))}
                style={{
                  padding: '10px 30px',
                  backgroundColor: '#f8f9fa',
                  border: '1px solid #ccc',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                DELETE
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectsPage;