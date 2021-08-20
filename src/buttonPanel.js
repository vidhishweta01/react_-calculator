import React from 'react';
import Button from './button';

const buttonPanel = () => (
  <div className="mainCalc">
      <div className="button-row">
        <Button label="AC" />
        <Button label="<" />
        <Button label="." />
        <Button label="÷" />
      </div>
      <div className="button-row">
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="X" />
      </div>
      <div className="button-row">
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" />
      </div>
      <div className="button-row">
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" />
      </div>
      <div className="button-row">
        <Button label="0" />
        <Button label="=" />
      </div>
    </div>
);

// Export Calculator Component.
export default buttonPanel;
