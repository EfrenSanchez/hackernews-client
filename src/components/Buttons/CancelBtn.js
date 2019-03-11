//Dependencies
import React from 'react';
import PropTypes from 'prop-types';

const CancelBtn = ({ onClick, className = '', children, }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      type="button"
    >
      {children}
    </button>
  );
}

CancelBtn.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default CancelBtn;