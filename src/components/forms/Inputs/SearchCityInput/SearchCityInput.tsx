import React, { ChangeEvent } from 'react';

import classes from './SearchCityInput.module.css';

interface SearchCityInputProps {

  placeholder: string;

//   value: string;

//   onChange: (event: ChangeEvent<HTMLInputElement>) => void;

}

const SearchCityInput: React.FC<SearchCityInputProps> = ({ placeholder }) => (

  <div>

    <input

      type="text"

      name="searchCityInput"

      placeholder={placeholder}

      className={classes.searchCityInput}

    />

  </div>

);

export default SearchCityInput;