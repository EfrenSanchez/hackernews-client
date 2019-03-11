//Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Components
import { SubmitBtn } from '../Buttons';

const Search = ({ value, onChange, onSubmit, children }) =>
  <form onSubmit={onSubmit}>
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
    <SubmitBtn className="button">
      {children}
    </SubmitBtn>
  </form>

Search.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  children: PropTypes.string.isRequired
}

export default Search;