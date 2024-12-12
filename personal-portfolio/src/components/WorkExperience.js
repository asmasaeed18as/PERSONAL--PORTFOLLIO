import React from 'react';

function WorkExperience() {
  return (
    <div style={styles.card}>
      <h3>Work Experience</h3>
      <p><strong>Internship at ONT LAB</strong> (June 2024 - August 2024)</p>
      <p>Worked on network-related problems, contributed to SONic architecture.</p>
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

export default WorkExperience;
