import React from 'react';
import beneficiaryList from '../assets/ICICIBankRTGSNEFTDemo/Beneficiary List.pdf';
import remitterList from '../assets/ICICIBankRTGSNEFTDemo/Remitter List.pdf';
import fillDetails from '../assets/ICICIBankRTGSNEFTDemo/Fill Details.pdf';
import stepsToUse from '../assets/ICICIBankRTGSNEFTDemo/Steps to use the file.pdf';
import formPage1 from '../assets/ICICIBankRTGSNEFTDemo/Form 1 Page.pdf';
import formPage2 from '../assets/ICICIBankRTGSNEFTDemo/Form 2 Page.pdf';
import chequePrint from '../assets/ICICIBankRTGSNEFTDemo/cheque print.png';
import excelFile from '../assets/ICICIBankRTGSNEFTDemo/ICICI Bank RTGS NEFT Application Form New Upload.xlsm';

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'Segoe UI, sans-serif',
    color: '#2c3e50'
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 600,
    marginBottom: '20px'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '1.2rem',
    marginBottom: '40px',
    color: '#555'
  },
  section: {
    marginBottom: '40px'
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 500,
    marginBottom: '10px',
    borderBottom: '2px solid #3498db',
    paddingBottom: '5px'
  },
  list: {
    listStyle: 'disc',
    paddingLeft: '20px',
    color: '#333'
  },
  downloadLink: {
    display: 'inline-block',
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px 20px',
    marginTop: '10px',
    marginRight: '10px',
    borderRadius: '6px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease'
  },
  image: {
    maxWidth: '100%',
    borderRadius: '10px',
    marginTop: '20px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.1)'
  },
  fileGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    marginTop: '15px'
  }
};

const ICICI = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>ICICI Bank RTGS/NEFT Form Utility</h1>
      <p style={styles.subtitle}>Generate, customize, and print your ICICI RTGS/NEFT form with ease.</p>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🔧 How It Works</h2>
        <ul style={styles.list}>
          <li>Fill remitter and beneficiary details in the provided Excel tool.</li>
          <li>Generate RTGS/NEFT form automatically.</li>
          <li>Print the form and attach a cheque if needed.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>📁 Downloads</h2>
        <div style={styles.fileGroup}>
          <a href={excelFile} download style={styles.downloadLink}>Download Excel Tool</a>
          <a href={fillDetails} download style={styles.downloadLink}>Fill Details Guide</a>
          <a href={stepsToUse} download style={styles.downloadLink}>Steps to Use (PDF)</a>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>📄 Sample Form Pages</h2>
        <div style={styles.fileGroup}>
          <a href={formPage1} download style={styles.downloadLink}>Form Page 1</a>
          <a href={formPage2} download style={styles.downloadLink}>Form Page 2</a>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>👥 Sample Data Files</h2>
        <div style={styles.fileGroup}>
          <a href={beneficiaryList} download style={styles.downloadLink}>Beneficiary List</a>
          <a href={remitterList} download style={styles.downloadLink}>Remitter List</a>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🖨️ Cheque Print Sample</h2>
        <img src={chequePrint} alt="Cheque Print Sample" style={styles.image} />
      </div>
    </div>
  );
};

export default ICICI;
