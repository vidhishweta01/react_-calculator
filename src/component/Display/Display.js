import propTypes from 'prop-types';

const Display = ({ total }) => (
  <h1>
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
