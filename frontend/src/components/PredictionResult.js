import React, { useEffect, useState } from 'react';
import './PredictionResult.css';

const PredictionResult = ({ prediction, error, isLoading }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (prediction !== null && prediction !== undefined) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [prediction]);

  if (isLoading) {
    return (
      <div className="result-box loading-result">
        <div className="loading-spinner"></div>
        <p className="loading-text">Processing...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="result-box error-result">
        <div className="result-icon error-icon">!</div>
        <p className="error-message">Unable to recognize the digit.</p>
        <p className="error-details">{error}</p>
      </div>
    );
  }

  if (prediction !== null && prediction !== undefined) {
    return (
      <div className="result-box success-result">
        <div className="result-label">
          <div className="success-icon">✓</div>
          <h2 className="prediction-label">Predicted Digit:</h2>
        </div>
        <div className={`prediction-digit ${animate ? 'animate-prediction' : ''}`}>
          {prediction}
        </div>
      </div>
    );
  }

  return null;
};

export default PredictionResult;