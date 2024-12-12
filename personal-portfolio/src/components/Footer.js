// components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>Follow me on:</p>
      <div style={styles.socialLinks}>
        <a href="https://facebook.com" style={styles.link} target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://linkedin.com" style={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com" style={styles.link} target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    textAlign: 'center',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
  },
};

export default Footer;