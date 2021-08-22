import propTypes from 'prop-types';
import styles from './Display.module.css';

const Display = ({ total, next, operation }) => (
  <h1 className={styles.h1}>
    {next || total || operation || '0'}
  </h1>
);

Display.propTypes = {
  total: propTypes.string,
  next: propTypes.string,
  operation: propTypes.string.isRequired,
};

Display.defaultProps = {
  total: '0',
  next: '0',
};

export default Display;
