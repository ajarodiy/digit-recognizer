import React from 'react';
import { PenLine } from 'lucide-react';
import './Instructions.css';

const Instructions = () => {
  return (
    <div className="instructions">
      <PenLine className="instructions-icon" />
      <p className="instructions-text">Please write a digit between 0 and 9 below:</p>
    </div>
  );
};

export default Instructions;