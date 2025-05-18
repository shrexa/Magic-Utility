import React, { useRef, useEffect, useState } from 'react';
import { saveAs } from 'file-saver';

const BankingForms = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollAmount = 320; // Width of card + gap

  // Sample form data
  const forms = [
    {
      id: 1,
      title: "RTGS Form",
      image: "RTGS_FORM_small.jpg",
      pdfUrl: "/pdfs/rtgs-form.pdf"
    },
    {
      id: 2,
      title: "Account Inquiry",
      image: "AI.jpg",
      pdfUrl: "/pdfs/account-inquiry.pdf"
    },
    {
      id: 3,
      title: "ICICI Bank Form",
      image: "ICICI.jpg",
      pdfUrl: "/pdfs/icici-form.pdf"
    },
    // {
    //   id: 4,
    //   title: "NEFT Form",
    //   image: "NEFT_FORM.jpg",
    //   pdfUrl: "/pdfs/neft-form.pdf"
    // },
    // {
    //   id: 5,
    //   title: "Cheque Book Request",
    //   image: "CHEQUE_FORM.jpg",
    //   pdfUrl: "/pdfs/cheque-request.pdf"
    // }
  ];

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % forms.length;
      setCurrentIndex(nextIndex);
      scrollToIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, forms.length]);

  const scrollToIndex = (index) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleDownload = (pdfUrl, title) => {
    saveAs(pdfUrl, `${title}.pdf`);
  };

  const scrollLeft = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const scrollRight = () => {
    setCurrentIndex(prev => Math.min(forms.length - 1, prev + 1));
  };

  // Internal CSS
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
      scrollBehavior: 'smooth',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
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
      objectFit: 'cover'
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
      transition: 'background-color 0.3s',
      '&:hover': {
        backgroundColor: '#2980b9'
      }
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
      justifyContent: 'center',
      '&:hover': {
        backgroundColor: '#2980b9'
      }
    },
    leftButton: {
      left: '10px'
    },
    rightButton: {
      right: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Banking Forms</h1>
      
      <div style={styles.sliderContainer}>
        <button 
          style={{ ...styles.navButton, ...styles.leftButton }} 
          onClick={scrollLeft}
        >
          &lt;
        </button>
        
        <div style={styles.scroller} ref={sliderRef}>
          {forms.map((form) => (
            <div key={form.id} style={styles.card}>
              <div style={styles.imageContainer}>
                <img 
                  src={require(`../assets/BankingForms/${form.image}`)} 
                  alt={form.title} 
                  style={styles.image}
                />
              </div>
              <h3 style={styles.formTitle}>{form.title}</h3>
              <button
                onClick={() => handleDownload(form.pdfUrl, form.title)}
                style={styles.downloadBtn}
              >
                Download PDF
              </button>
            </div>
          ))}
        </div>
        
        <button 
          style={{ ...styles.navButton, ...styles.rightButton }} 
          onClick={scrollRight}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default BankingForms;