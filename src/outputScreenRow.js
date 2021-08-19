// Import React (Mandatory Step).
import React from 'react';
import styles from './component.module.css';

const OutputScreenRow = () => (
  <div className={styles.screenrow}>
    <input type="text" readOnly />
  </div>
);

// Export Output Screen Row.
export default OutputScreenRow;
