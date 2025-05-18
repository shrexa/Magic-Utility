import React from 'react';

const banks = [
  {
    name: "Axis Bank Limited",
    excel: "/forms/axis-excel.xlsx",
    pdf: "/forms/axis-form.pdf",
  },
  {
    name: "Bank of Baroda",
    excel: "/forms/bob-excel.xlsx",
    pdf: "/forms/bob-form.pdf",
  },
  {
    name: "Canara Bank",
    excel: "/forms/canara-excel.xlsx",
    pdf: "/forms/canara-form.pdf",
  },
  // Add more banks here...
];

const RTGSForms = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>RTGS / NEFT Forms</h2>
      {banks.map((bank, idx) => (
        <div key={idx} style={{ margin: '1.5rem 0' }}>
          <h3>{bank.name}</h3>
          <ul>
            <li><a href={bank.excel} download>📥 Excel File Auto Utilities</a></li>
            <li><a href={bank.pdf} download>📄 PDF Form</a></li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RTGSForms;
