import React from 'react';

function Education() {
  return (
    <div style={styles.card}>
      <h3>Education</h3>
      <p><strong>National University of Sciences and Technology (NUST)</strong></p>
      <p>Bachelor of Science in Software Engineering</p>
      <p>2022 - 2026</p>
    </div>
  );
}

const styles = {
  card: {
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    marginBottom: '20px',
  },
};

export default Education;
