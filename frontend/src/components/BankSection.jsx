import React from 'react'
import '../styles/Card.css'

const BankSection = () => {
    const banks = ["HDFC BANK", "ICICI Bank", "Kotak Bank", "Axis Bank", "State Bank of India", "Yes Bank"]
  return (
    <div>
        <div className="card">
      <div className="card-header">
        <h2>Bank</h2>
        <button className="btn-secondary">Search over 26,000 banks</button>
      </div>
      <div className="card-content">
        <p className="card-description">Connect your bank. Match invoices automatically.</p>
        <div className="bank-grid">
          {banks.map((bank) => (
            <div key={bank} className="bank-box">
              {bank}
            </div>
          ))}
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default BankSection
