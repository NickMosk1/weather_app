import { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import classes from './SearchCityInput.module.css';
import City from '../../../../types/City';
import ForecastDataStore from '../../../stores/ForecastDataStore/ForecastDataStore';

interface SearchCityInputProps {
  placeholder: string;
  darkMode: boolean;
}

const SearchCityInput: React.FC<SearchCityInputProps> = ({ placeholder, darkMode }) => {

  const [cityName, setCityName] = useState('');
  const [availableCities, setAvailableCities] = useState<string[]>([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchAvailableCities = async () => {
      try {
        const response = await axios.get('http://localhost:8000/citiesForecastData');
        if (response.data) {
          setAvailableCities(response.data.map((city: City) => city.name));
        }
      } catch (error) {
        console.error('Ошибка при получении списка городов:', error);
      }
    };
    fetchAvailableCities();
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCityName(event.target.value);
  };

  const cityDataIsLoaded = (cityName: string) => {
    return availableCities.includes(cityName);
  };
  
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (cityDataIsLoaded(event.currentTarget.value)) {
        ForecastDataStore.fetchData(cityName);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(`/cityForecast`, { state: { cityName } });
        setCityName('');
      } else {
        const additionalData = cityName;
        navigate(`/error`, { state: { additionalData, errorType: "cityIsNotFound" }});
        setCityName('');
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        name="searchCityInput"
        placeholder={placeholder}
        className={`${classes.searchCityInput} ${darkMode && classes['searchCityInput--dark']}`}
        value={cityName}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchCityInput;