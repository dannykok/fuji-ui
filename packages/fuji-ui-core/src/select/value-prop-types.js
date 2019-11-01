import PropTypes from 'prop-types';

export default PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
});
