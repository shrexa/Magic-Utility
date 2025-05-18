import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import ContactUs from '../components/ContactUs';

const Home = () => {
  return (
    <div className="home-container">
      <ImageSlider />
      <div className="content-container">
      <h2 className="heading">Purpose of the Site</h2>
        <ul className="feature-list">
          <li className="feature-item">
            <Link to="/BankingForms">📄 Banking Forms / Tools</Link>
          </li>
          <li className="feature-item">
            <Link to="/cheque-printing">🖨️ Cheque Printing Tools</Link>
          </li>
          <li className="feature-item">
            <Link to="/invoice-formats">🧾 Invoice Formats</Link>
          </li>
          <li className="feature-item">
            <Link to="/salary-slip">💰 Salary Slip Format</Link>
          </li>
          <li className="feature-item">
            <Link to="/balance-sheet">📊 Balance Sheet Format</Link>
          </li>
          <li className="feature-item">
            <Link to="/tally-guide">📘 Tally Guide</Link>
          </li>
        </ul>
      </div>
      <ContactUs/>

      <style jsx>{`
        /* Home Component Styles */
        .home-container {
          width: 100%;
          padding: 3rem 2rem;
          background-color: #f9f9f9;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Content Section */
        .content-container {
          max-width: 900px;
          width: 100%;
          background-color: #fff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding: 2rem;
          margin-top: 2rem;
          transition: all 0.3s ease;
        }

        .content-container:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          transform: translateY(-5px);
        }

        /* Heading */
        .heading {
          font-size: 2rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          color: #333;
          margin-bottom: 1rem;
          text-align: center;
        }

        /* List Styles */
        .feature-list {
          list-style-type: none;
          padding: 0;
          font-family: 'Roboto', sans-serif;
        }

        .feature-item {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #555;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          padding-left: 1rem;
          border-left: 4px solid transparent;
        }

        /* Hover Effect on List Items */
        .feature-item:hover {
          color: #007bff;
          cursor: pointer;
          border-left: 4px solid #007bff;
          transform: translateX(5px);
        }

        /* Adding subtle box shadow to the slider */
        .slider-container {
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          overflow: hidden;
        }

        /* Media Queries */
        @media (max-width: 768px) {
          .content-container {
            padding: 1.5rem;
          }

          .heading {
            font-size: 1.8rem;
          }

          .feature-item {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;

