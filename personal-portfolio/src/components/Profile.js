import React from 'react';

function Profile() {
  return (
    <div style={styles.profileContainer}>
      <img src="CV_PROFILE.jpg" alt="Profile" style={styles.profileImage} />
      <h1>Asma Saeed</h1>
      <h2>Software Engineer</h2>
      <div style={styles.contactInfo}>
        <h3>Contact</h3>
        <p>Email: asahmed.bese22seecs@seecs.edu.pk</p>
        <p>Phone: 03042839119</p>
        <p>Address: Zainab Hostel, NUST Islamabad</p>
      </div>
    </div>
  );
}

const styles = {
  profileContainer: {
    width: '30%',
    backgroundColor: '#343a40',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '10px',
  },
  profileImage: {
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    marginBottom: '15px',
    border: '4px solid white',
  },
  contactInfo: {
    marginTop: '20px',
  },
};

export default Profile;
