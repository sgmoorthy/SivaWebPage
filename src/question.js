import React from 'react';
import './index.css';

export default function Question({ children }) {
  return (
    <p class="has-medium-font-size">
    <em>
    <strong>Questioner: </strong>
    {children}
    </em>
    </p>
  );
}
