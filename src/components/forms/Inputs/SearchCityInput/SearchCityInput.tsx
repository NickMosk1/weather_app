import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

import { useNavigate } from 'react-router-dom'; 

import classes from './SearchCityInput.module.css';

interface SearchCityInputProps {

  placeholder: string;

}

const SearchCityInput: React.FC<SearchCityInputProps> = ({ placeholder }) => {

  const [cityName, setCityName] = useState('');

  const navigate = useNavigate(); 

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {

    setCityName(event.target.value);

  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {

    if (event.key === 'Enter') {

      navigate(`/city`); 

    }

  };

  return (

    <div>

      <input

        type="text"

        name="searchCityInput"

        placeholder={placeholder}

        className={classes.searchCityInput}

        value={cityName}

        onChange={handleInputChange}

        onKeyDown={handleKeyDown}

      />

    </div>

  );

};

export default SearchCityInput;