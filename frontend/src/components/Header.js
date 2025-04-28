import React from 'react';
import { Brain } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-title-container">
        <Brain className="header-icon" />
        <h1 className="header-title">
          Simple Convolutional Neural Network Digit Recognizer
        </h1>
      </div>
      <p className="header-subtitle">
        This model is trained on the MNIST dataset to recognize handwritten digits between 0 and 9.
      </p>
    </header>
  );
};

export default Header;