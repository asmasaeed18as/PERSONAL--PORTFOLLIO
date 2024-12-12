import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../components/Profile';
import Education from '../components/Education';
import WorkExperience from '../components/WorkExperience';
import Certifications from '../components/Certifications';

function Home() {
  return (
    <div style={styles.container}>
      <Profile />
      <div style={styles.rightColumn}>
        <Education />
        <WorkExperience />
        <Certifications />
      </div>
      
      
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
  rightColumn: {
    marginLeft: '30px',
    width: '70%',
  },
  projectsLinkContainer: {
    marginTop: '20px',
  },
  button: {
    backgroundColor: '#343a40',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default Home;
