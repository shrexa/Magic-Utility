import React, { useState } from 'react';
import beneficiaryList from '../assets/ICICIBankRTGSNEFTDemo/Beneficiary List.pdf';
import remitterList from '../assets/ICICIBankRTGSNEFTDemo/Remitter List.pdf';
import fillDetails from '../assets/ICICIBankRTGSNEFTDemo/Fill Details.pdf';
import stepsToUse from '../assets/ICICIBankRTGSNEFTDemo/Stepstousethefile.pdf';
import formPage1 from '../assets/ICICIBankRTGSNEFTDemo/Form 1 Page.pdf';
import formPage2 from '../assets/ICICIBankRTGSNEFTDemo/Form 2 Page.pdf';
import chequePrint from '../assets/ICICIBankRTGSNEFTDemo/cheque print.png';
import excelFile from '../assets/ICICIBankRTGSNEFTDemo/ICICI Bank RTGS NEFT Application Form New Upload.xlsm';
import form1Preview from '../assets/ICICIBankRTGSNEFTDemo/form1-preview.jpg';
import form2Preview from '../assets/ICICIBankRTGSNEFTDemo/form2-preview.jpg';
import step1Img from '../assets/ICICIBankRTGSNEFTDemo/ICICIstep1.png';
import step2Img from '../assets/ICICIBankRTGSNEFTDemo/ICICIstep2.png';
import step3Img from '../assets/ICICIBankRTGSNEFTDemo/ICICIstep3.png';
import step4Img from '../assets/ICICIBankRTGSNEFTDemo/ICICIstep4.png';
import step5Img from '../assets/ICICIBankRTGSNEFTDemo/ICICIstep5.png';


const styles = {
    container: {
        padding: '40px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        fontFamily: 'Segoe UI, sans-serif',
        color: '#2c3e50',
        lineHeight: 1.6,
    },
    title: {
        textAlign: 'center',
        fontSize: '2.8rem',
        fontWeight: 700,
        marginBottom: '10px',
        color: '#1a1a1a',
    },
    subtitle: {
        textAlign: 'center',
        fontSize: '1.1rem',
        color: '#555',
        marginBottom: '40px',
    },
    section: {
        marginBottom: '50px',
    },
    sectionTitle: {
        fontSize: '1.6rem',
        fontWeight: 600,
        marginBottom: '15px',
        borderBottom: '2px solid #3498db',
        paddingBottom: '5px',
        color: '#2c3e50',
    },
    list: {
        listStyle: 'disc',
        paddingLeft: '20px',
        color: '#333',
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
        transition: 'background-color 0.3s ease',
    },
    previewImg: {
        width: '100%',
        maxWidth: '500px',
        marginBottom: '10px',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    },
    paragraph: {
        marginBottom: '10px',
    },
    formItem: {
        flex: '1 1 48%',
        maxWidth: '48%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    fileGroup: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '20px',
    },
    stepContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
    },

    stepItem: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '20px',
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
    },

    stepText: {
        flex: '1 1 60%',
        minWidth: '280px',
    },

    stepImg: {
        width: '100%',
        maxWidth: '200px',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
   modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        overflow: 'auto',
        padding: '20px',
    },

    modalContent: {
        position: 'relative',
        maxWidth: '90vw',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    fullImage: {
        maxWidth: '100%',
        maxHeight: '80vh',
        objectFit: 'contain',
        borderRadius: '8px',
        boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
    },

    closeButton: {
        position: 'absolute',
        top: '-15px',
        right: '-15px',
        background: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        fontSize: '24px',
        cursor: 'pointer',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1001,
    },
};

const ICICI = () => {
   const [selectedImage, setSelectedImage] = useState(null);
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>ICICI Bank RTGS/NEFT Form Excel Utility Demo</h1>
            <p style={styles.subtitle}>A powerful Excel utility for RTGS/NEFT form generation, cheque printing, and transaction management.</p>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>✨ Features Overview</h2>
                <ul style={styles.list}>
                    <li>Supports up to <strong>500 beneficiaries</strong> and maintains <strong>approx. 3000 transactions</strong> in one file.</li>
                    <li><strong>No need to re-enter</strong> remitter or beneficiary details repeatedly.</li>
                    <li>Abbreviated data selection makes filling transaction details fast and error-free.</li>
                    <li>Bank and branch selection is <strong>automated</strong> in the Beneficiaries List Sheet.</li>
                    <li>Print <strong>cheques</strong> and RTGS/NEFT application forms together.</li>
                    <li>This dynamic Excel file helps save <strong>valuable time</strong> with <strong>zero errors</strong>.</li>
                    <li>Long-term storage and record maintenance of your transactions.</li>
                </ul>

                <p style={styles.paragraph}><strong>यह फाइल किसी भी उद्योग, व्यक्तिगत, कंपनी, फर्म के लिए बहुत उपयोगी है:</strong></p>
                <ul style={styles.list}>
                    <li>500 लाभार्थियों को जोड़ने और लगभग 3000 लेनदेन का रिकॉर्ड रखने की क्षमता।</li>
                    <li>प्रेषक और लाभार्थी विवरण को बार-बार जोड़ने की आवश्यकता नहीं।</li>
                    <li>सभी विवरण संक्षिप्त नाम में उपलब्ध – शीट में सीधे चयन करें।</li>
                    <li>बैंक और शाखा नाम स्वतः चयनित होते हैं।</li>
                    <li>NEFT/RTGS आवेदन पत्र के साथ संबंधित चेक भी प्रिंट कर सकते हैं।</li>
                    <li>शून्य त्रुटियों और अधिक समय बचत के साथ डायनेमिक फ़ाइल।</li>
                    <li>लेन-देन का रिकॉर्ड लंबे समय तक सुरक्षित रखा जा सकता है।</li>
                </ul>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>📄 Sample Form Pages</h2>
                <div style={styles.fileGroup}>
                    <div style={styles.formItem}>
                        <img
                            src={form1Preview}
                            alt="Form Page 1 Preview"
                            style={styles.previewImg}
                            onClick={() => setSelectedImage(form1Preview)}
                        />
                        <a href={formPage1} download style={styles.downloadLink}>Download Form Page 1</a>
                    </div>
                    <div style={styles.formItem}>
                        <img
                            src={form2Preview}
                            alt="Form Page 2 Preview"
                            style={styles.previewImg}
                            onClick={() => setSelectedImage(form2Preview)}
                        />

                        <a href={formPage2} download style={styles.downloadLink}>Download Form Page 2</a>
                    </div>
                </div>
            </div>

            <div style={styles.section}>
                
                <div style={styles.stepContainer}>

                    <div style={styles.section}>
                <h2 style={styles.sectionTitle}>📝 Steps to Follow</h2>
                <div style={styles.stepContainer}>
                    <div style={styles.stepItem}>
                        <img 
                            src={step1Img} 
                            alt="Step 1" 
                            style={styles.stepImg} 
                            onClick={() => setSelectedImage(step1Img)} 
                        />
                        <div style={styles.stepText}>
                            <strong>Step 1:</strong> Fill your own ICICI Bank details (Remitter). You can use more than one account.<br />
                            <strong>स्टेप 1:</strong> अपना खुद का आईसीआईसीआई बैंक विवरण (प्रेषक) भरें, एक से अधिक खाता उपयोग कर सकते हैं।
                        </div>
                    </div>

                    <div style={styles.stepItem}>
                        <img 
                            src={step2Img} 
                            alt="Step 2" 
                            style={styles.stepImg} 
                            onClick={() => setSelectedImage(step2Img)} 
                        />
                        <div style={styles.stepText}>
                            <strong>Step 2:</strong> Fill your parties/vendors and their bank details (Beneficiary) only once. Fill IFSC code first.<br />
                            <strong>स्टेप 2:</strong> पार्टियों/वेंडर और उनके बैंक विवरण (लाभार्थी) को केवल एक बार भरें, पहले IFSC कोड भरें।
                        </div>
                    </div>

                    <div style={styles.stepItem}>
                        <img 
                            src={step3Img} 
                            alt="Step 3" 
                            style={styles.stepImg} 
                            onClick={() => setSelectedImage(step3Img)} 
                        />
                        <div style={styles.stepText}>
                            <strong>Step 3:</strong> Type RTGS/NEFT Date, select Remitter & Beneficiary abbreviation. Fill details from the list, move cursor via the button to print.<br />
                            <strong>स्टेप 3:</strong> RTGS/NEFT दिनांक टाइप करें, प्रेषक और लाभार्थी संक्षिप्त नाम चुनें, सूची अनुसार विवरण भरें, प्रिंट करने हेतु बटन से कर्सर मूव करें।
                        </div>
                    </div>

                    <div style={styles.stepItem}>
                        <img 
                            src={step4Img} 
                            alt="Step 4" 
                            style={styles.stepImg} 
                            onClick={() => setSelectedImage(step4Img)} 
                        />
                        <div style={styles.stepText}>
                            <strong>Step 4:</strong> Print the cheque first before the form.<br />
                            <strong>स्टेप 4:</strong> फॉर्म से पहले चेक प्रिंट करें।
                        </div>
                    </div>

                    <div style={styles.stepItem}>
                        <img 
                            src={step5Img} 
                            alt="Step 5" 
                            style={styles.stepImg} 
                            onClick={() => setSelectedImage(step5Img)} 
                        />
                        <div style={styles.stepText}>
                            <strong>Step 5:</strong> Fill cheque number in the sheet named "Fill RTGS NEFT Details" and print the form.<br />
                            <strong>स्टेप 5:</strong> "Fill RTGS NEFT Details" शीट में चेक नंबर भरें और फॉर्म प्रिंट करें।
                        </div>
                    </div>
                </div>
            </div>                

                </div>
            </div>


            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>🖨️ Cheque Print Sample</h2>
                <img src={chequePrint} alt="Cheque Print Sample" style={styles.previewImg}  onClick={() => setSelectedImage(chequePrint)}/>
                <a href={chequePrint} download style={styles.downloadLink}>Download Cheque Sample</a>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>📥 Download Utility & Guides</h2>
                <div style={styles.fileGroup}>
                    <a href={excelFile} download style={styles.downloadLink}>Download Excel Utility</a>
                    <a href={fillDetails} download style={styles.downloadLink}>Fill Details Guide (PDF)</a>
                    <a href={stepsToUse} download style={styles.downloadLink}>Steps to Use (PDF)</a>
                </div>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>👥 Sample Data Files</h2>
                <div style={styles.fileGroup}>
                    <a href={beneficiaryList} download style={styles.downloadLink}>Beneficiary List (PDF)</a>
                    <a href={remitterList} download style={styles.downloadLink}>Remitter List (PDF)</a>
                </div>
            </div>
 {selectedImage && (
                <div style={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
                    <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button style={styles.closeButton} onClick={() => setSelectedImage(null)}>×</button>
                        <img 
    src={selectedImage} 
    alt="Full View" 
    style={styles.fullImage}
/>

                    </div>
                </div>
            )}
        </div>

    );
};

export default ICICI;
