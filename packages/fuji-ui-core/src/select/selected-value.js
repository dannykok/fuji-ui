import React from 'react';
import PropTypes from 'prop-types';
import valuePropTypes from './value-prop-types';

const SelectedValue = ({ value, placeholder }) => {
  if (value) return <span>{value.label}</span>;
  return <span className="placeholder">{placeholder}</span>;
};

SelectedValue.propTypes = {
  value: valuePropTypes,
  placeholder: PropTypes.string,
};

export default SelectedValue;
