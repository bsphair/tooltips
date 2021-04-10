import React from 'react';
import PropTypes from 'prop-types';
import 'components/button.css';

const Button = ({ buttonText, tooltipText }) => {
  return (
    <button
      onClick={() => {}}
      className="custom-button"
      tooltiptext={tooltipText}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  tooltipText: PropTypes.string,
}

export default Button;
