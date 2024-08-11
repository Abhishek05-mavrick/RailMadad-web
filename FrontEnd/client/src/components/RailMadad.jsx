import React from 'react';
import './RailMadad.css';

const RailMadad = () => {
  return (
    <div className="grievance-container">
      <div className="form-section">
        <h2 className="grievance-title">Grievance Detail</h2>
        <input type="text" placeholder="Enter your PNR *" className="input-field" />
        <div className="date-time">
          <input type="date" className="input-field date-picker" placeholder="Choose a date" />
          <select className="input-field time-picker">
            <option>10:00</option>
            <option>11:00</option>
            <option>12:00</option>
            {/* Additional time options can be added */}
          </select>
        </div>
        <button className="upload-button">+ Upload</button>
      </div>

      <div className="chat-section">
        <div className="chat-header">
          <div className="chat-info">
            <img src="rail-logo.png" alt="Rail Assist" className="rail-logo" />
            <span className="chat-title">Rail Assist</span>
          </div>
          <span className="uniq-id">uniq id:123456</span>
        </div>
        <div className="chat-body">
          <p>Hi! How can I help you?</p>
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Explain your Complaint..." className="input-field chat-text" />
          <div className="chat-actions">
            <button className="icon-button">🎙️</button>
            <button className="icon-button">📷</button>
            <button className="icon-button send-button">➤</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RailMadad;
