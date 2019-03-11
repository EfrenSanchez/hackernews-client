//Dependencies
import React from 'react';
import PropTypes from 'prop-types';

const SaveBtn = ({ onClick, className = '', children, }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      type="submit"
    >
      {children}
    </button>
  );
}

SaveBtn.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SaveBtn;