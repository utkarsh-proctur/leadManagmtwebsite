import React from 'react';
import './Process.css';

const Process = () => {
  return (
    <div className="process-container-img">
        <h1 className="process-title">Process</h1>
        <div className="process-container">
      <div className="process-steps">
        <div className="process-step">
          <div className="process-step-circle">01</div>
          <div className="process-step-text">Register</div>
        </div>
        <div className="process-step">
          <div className="process-step-circle">02</div>
          <div className="process-step-text">Basic Information</div>
        </div>
        <div className="process-step">
          <div className="process-step-circle">03</div>
          <div className="process-step-text">Educational Details</div>
        </div>
        <div className="process-step">
          <div className="process-step-circle">04</div>
          <div className="process-step-text">Document Upload</div>
        </div>
        <div className="process-step">
          <div className="process-step-circle">05</div>
          <div className="process-step-text">Fees Payment</div>
        </div>
        <div className="process-step">
          <div className="process-step-circle">06</div>
          <div className="process-step-text">Final Submission</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Process;