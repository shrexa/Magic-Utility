import React, { useRef } from 'react';
import ICICIImage from '../assets/bankingforms/ICICI.jpg';
import ICICIPDF from '../assets/bankingforms/ICICI-RTGSpdf.pdf';

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative'
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#2c3e50'
  },
  sliderContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden'
  },
  scroller: {
    display: 'flex',
    overflowX: 'auto',
    gap: '20px',
    padding: '20px 0',
    scrollBehavior: 'smooth'
  },
  card: {
    minWidth: '300px',
    background: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexShrink: 0
  },
  imageContainer: {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    borderRadius: '5px',
    marginBottom: '15px'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  formTitle: {
    margin: '10px 0',
    textAlign: 'center',
    color: '#34495e'
  },
  downloadBtn: {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  navButton: {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    fontSize: '20px',
    cursor: 'pointer',
    position: 'absolute',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftButton: {
    left: '10px'
  },
  rightButton: {
    right: '10px'
  }
};

const BankingForms = () => {
  const scrollerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Banking Forms</h2>
      <div style={styles.sliderContainer}>
        <button style={{ ...styles.navButton, ...styles.leftButton }} onClick={scrollLeft}>{'<'}</button>
        <div style={styles.scroller} ref={scrollerRef}>
          <div style={styles.card}>
            <div style={styles.imageContainer}>
              <img src={ICICIImage} alt="ICICI Form Preview" style={styles.image} />
            </div>
            <h3 style={styles.formTitle}>ICICI RTGS Form</h3>
            <a href={ICICIPDF} download="ICICI-RTGSpdf.pdf">
              <button style={styles.downloadBtn}>Download PDF</button>              
            </a>
            <a href="/BankingForms/ICICI">
              <button style={styles.downloadBtn}>xlsx</button>              
            </a>
          </div>

          {/* Add more cards here later... */}

        </div>
        <button style={{ ...styles.navButton, ...styles.rightButton }} onClick={scrollRight}>{'>'}</button>
      </div>
    </div>
  );
};

export default BankingForms;
