import React from 'react';
import PropTypes from 'prop-types';
const Button = ({ color, text, btnClick }) => {
  return (
    <button
      onClick={btnClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: 'steelblue',
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  btnClick: PropTypes.func,
};
export default Button;
