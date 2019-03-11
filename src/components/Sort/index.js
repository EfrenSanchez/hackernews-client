//Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//Components
import { SaveBtn } from '../Buttons';

const Sort = ({ sortKey, onSort, children, activeSortKey}) => {
  const sortClass = classNames(
    'button-inline',
    { 'button-inline--active': sortKey === activeSortKey }
  );

  return (
    <SaveBtn 
      onClick={() => onSort(sortKey)}
      className={sortClass} 
    > {children} </SaveBtn>
  );
}
Sort.protoTypes = {
  sortKey: PropTypes.string.isRequired,
  children: PropTypes.node,
  onSort: PropTypes.func.isRequired,
  activeSortKey: PropTypes.string.isRequired
}

export default Sort;