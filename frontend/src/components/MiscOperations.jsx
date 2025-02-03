import React from 'react'
import "../styles/Card.css"

const MiscOperations = () => {
  return (
    <div>
        <div className="card">
      <div className="card-header">
        <h2>Miscellaneous Operations</h2>
        <button className="btn-secondary">New</button>
      </div>
      <div className="card-content">
        <p className="card-description">Never miss a tax deadline.</p>
        <div className="operations-list">
          <div className="operation-item">
            <span>Set Company Data</span>
            <span className="highlight">GSTR-1 (IN): January 2025</span>
          </div>
          <div className="operation-item">
            <span>Set Periods</span>
            <span className="date">07/02/2025</span>
          </div>
          <div className="operation-item">
            <span>Review Chart of Accounts</span>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default MiscOperations
