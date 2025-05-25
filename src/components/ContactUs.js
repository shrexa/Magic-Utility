import React, { useState } from 'react';

const ContactUs = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Google Form URL (replace with your own Google Form URL)
  const googleFormUrl = "https://docs.google.com/forms/d/18J9hA_UITZOKQ1sUnELk9nIJgXLWL_TTIJ_9titErNE/formResponse";
   

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission to Google Forms
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct form data for Google Forms
    const formDataEncoded = new FormData();
    // formDataEncoded.append("entry.123456789", formData.name); // Replace with your field IDs
    // formDataEncoded.append("entry.987654321", formData.email);
    // formDataEncoded.append("entry.192837465", formData.message);
    formDataEncoded.append("entry.189234234", formData.name);
formDataEncoded.append("entry.209384738", formData.email);
formDataEncoded.append("entry.302948203", formData.message);


    // Submit to Google Forms
    fetch(googleFormUrl, {
      method: "POST",
      body: formDataEncoded,
      mode: "no-cors" // Important for Google Forms
    })
    .then(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error submitting the form. Please try again.');
    });
  };

  // Internal CSS
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    title: {
      textAlign: 'center',
      color: '#2c3e50',
      marginBottom: '30px'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px'
    },
    label: {
      fontWeight: 'bold',
      color: '#34495e'
    },
    input: {
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '16px'
    },
    textarea: {
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '16px',
      minHeight: '150px',
      resize: 'vertical'
    },
    button: {
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      padding: '12px 20px',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      '&:hover': {
        backgroundColor: '#2980b9'
      }
    },
    successMessage: {
      backgroundColor: '#d4edda',
      color: '#155724',
      padding: '15px',
      borderRadius: '4px',
      textAlign: 'center',
      marginTop: '20px'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      
      {submitted ? (
        <div style={styles.successMessage}>
          Thank you for your message! We'll get back to you soon.
        </div>
      ) : (
        <form 
          style={styles.form} 
          onSubmit={handleSubmit}
          action={googleFormUrl}
          method="POST"
        >
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="name">Name:</label>
            <input
              style={styles.input}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="email">Email:</label>
            <input
              style={styles.input}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="message">Message:</label>
            <textarea
              style={styles.textarea}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      )}
      
      {/* Alternative: Mailto link */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <p>Or email us directly at: </p>
        <a href="mailto:shriya.choudhary9876@gmail.com" style={{ color: '#3498db' }}>
          shriya.choudhary9876@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactUs;