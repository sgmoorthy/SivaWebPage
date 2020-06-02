import React from 'react';
import './index.css';

export default function Answer({ children }) {
  return (
    <p className="has-medium-font-size">
    <strong>Sivapithan: </strong>
    {children}
    </p>
  );
}
