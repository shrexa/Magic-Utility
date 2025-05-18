import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/logo.png" alt="Logo" className="logo" />
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/rtgs-neft" className="nav-link">RTGS/NEFT Forms</Link></li>
        {/* Add more links as needed */}
      </ul>

      {/* Internal CSS */}
      <style jsx>{`
        /* Navbar Container */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: blue;
          color: white;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        /* Logo Styling */
        .logo {
          height: 35px;
          width: auto;
          // color:#fff;
        }

        /* Navigation Links */
        .nav-links {
          list-style: none;
          display: flex;
          margin: 0;
        }

        .nav-link {
          text-decoration: none;
          color: white;
          padding: 0.5rem 1rem;
          font-size: 1.1rem;
          font-weight: 500;
          transition: background-color 0.3s;
        }

        /* Hover Effect on Links */
        .nav-link:hover {
          background-color: #007bff;
          border-radius: 5px;
        }

        /* Media Queries for Responsiveness */
        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            align-items: flex-start;
            padding: 1rem;
          }

          .nav-links {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .nav-link {
            padding: 0.8rem 1.5rem;
            width: 100%;
            text-align: left;
            border-top: 1px solid #444;
          }

          .nav-link:first-child {
            border-top: none;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
