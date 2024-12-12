import React from 'react';

function ProjectCard({ project, onClick }) {
  return (
    <div style={styles.card} onClick={onClick}>
      <h4>{project.title}</h4>
      <p>{project.description}</p>
    </div>
  );
}

const styles = {
  card: {
    padding: '20px',
    backgroundColor: '#f1f1f1',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '15px',
    cursor: 'pointer',
  },
};

export default ProjectCard;
