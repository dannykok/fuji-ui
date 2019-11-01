import React from 'react';
import PropTypes from 'prop-types';

const Form = props => {
  return <form {...props} />;
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
