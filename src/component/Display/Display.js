import propTypes from 'prop-types';
import styles from './Display.module.css';

const Display = ({ total }) => (
  <h1 className={styles.h1}>
    {' '}
    {total}
    {' '}
  </h1>
);

Display.propTypes = {
  total: propTypes.string,
};

Display.defaultProps = {
  total: '0',
};

export default Display;
