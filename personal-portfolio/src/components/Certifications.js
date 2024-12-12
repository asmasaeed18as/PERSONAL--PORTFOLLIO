import React from 'react';

function Certifications() {
  return (
    <div style={styles.card}>
      <h3>Certifications</h3>
      <ul>
        <li>Certified C++ Developer</li>
        <li>Machine Learning Coursera Course 1</li>
      </ul>
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

export default Certifications;
