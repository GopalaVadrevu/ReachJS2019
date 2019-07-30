import React from 'react';

import './SearchBox.Styles.css';


const SearchBox = ({placeholder,handleChange}) => (
    <input type='search'
          className='search'
          placeholder={placeholder}
          onChange={handleChange}
          />

);
export default SearchBox;
