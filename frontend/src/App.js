import React, { useState, useEffect } from 'react';
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

  // Wake-up ping to backend on initial load
  useEffect(() => {
    fetch('https://digit-recognizer-lfo8.onrender.com/ping')
      .then(() => console.log("🔋 Backend wake-up ping sent"))
      .catch(err => console.log("⚠️ Backend might still be sleeping", err));
  }, []);

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
        <div className="main-content">
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

        <div className="model-details">
          <h2>Model Details</h2>
          <p>
            This Convolutional Neural Network (CNN) processes handwritten digits through:
          </p>
          <ul>
            <li>First Conv2D layer (32 filters) → MaxPooling2D</li>
            <li>Second Conv2D layer (64 filters) → MaxPooling2D</li>
            <li>Flatten layer</li>
            <li>Dense layer (64 neurons)</li>
            <li>Output Dense layer (10 neurons, one for each digit)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;