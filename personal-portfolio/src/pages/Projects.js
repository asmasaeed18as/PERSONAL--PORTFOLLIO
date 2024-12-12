import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, title: 'Pong Game with Improved Features', description: 'A modern version of the classic game Pong with new challenges.' },
    { id: 2, title: 'Secure Banking System', description: 'A secure system for online banking with enhanced authentication protocols.' },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div style={styles.container}>
      <h1>Projects</h1>
      <div>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <div style={styles.projectDetails}>
          <h3>{selectedProject.title}</h3>
          <p>{selectedProject.description}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
  },
  projectDetails: {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ddd',
  },
};

export default Projects;
