import React, { useState } from 'react';
import Header from './components/Header';
import Instructions from './components/Instructions';
import DigitCanvas from './components/DigitCanvas';
import PredictionResult from './components/PredictionResult';
import { predictDigit } from './services/api';
import './App.css';

function App() {
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageCapture = async (imageBlob) => {
    setIsLoading(true);
    setPrediction(null);
    setError(null);

    try {
      const result = await predictDigit(imageBlob);
      
      if (result.error) {
        setError(result.error);
      } else {
        setPrediction(result.prediction);
      }
    } catch (err) {
      setError('Failed to connect to the prediction service.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <Header />
        <Instructions />
        <DigitCanvas onImageCapture={handleImageCapture} />
        
        {(isLoading || prediction !== null || error) && (
          <div className="result-container">
            <PredictionResult 
              prediction={prediction} 
              error={error}
              isLoading={isLoading}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;