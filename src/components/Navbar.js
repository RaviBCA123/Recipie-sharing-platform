import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.appName}>
        <Link to="/" style={styles.appNameLink}>RecipeLub</Link>
      </div>
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/register" style={styles.link}>Register</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        <Link to="/about" style={styles.link}>About</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '40px 20px',
    backgroundColor: '#333',
    color: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  appName: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  appNameLink: {
    textDecoration: 'none',
    color: '#fff',
    fontSize:'50px'
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '30px',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#007bff',
  },
};

export default Navbar;