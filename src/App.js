import React from 'react';
import { useSelector } from 'react-redux';
import ProfilePage from './pages/ProfilePage';
import NavigationButtons from './components/NavigationButtons';
import EducationPage  from './pages/EducationPage.js'
import SkillsPage from './pages/SkillsPage.js'
import ProjectsPage from './pages/ProjectsPage.js'
import ResumeOutputPage from './pages/ResumeOutputPage.js'

const App = () => {
  const currentStep = useSelector((state) => state.navigation.currentStep);

  const renderCurrentPage = () => {
   switch (currentStep) {
      case 0:
        return <ProfilePage />;
      case 1:
        return <EducationPage />
      case 2:
        return <SkillsPage />
      case 3:
        return <ProjectsPage/>
      case 4:
        return <ResumeOutputPage />;
      case 5:
        return <div><h2>Final Resume Preview</h2></div>;
      default:
        return <ProfilePage />;
    }
  }
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Resume Builder</h1>
      <p style={{ textAlign: 'center' }}>Step {currentStep + 1} of 6</p>

      {renderCurrentPage()}

      <NavigationButtons />
    </div>
  )
}

export default App
