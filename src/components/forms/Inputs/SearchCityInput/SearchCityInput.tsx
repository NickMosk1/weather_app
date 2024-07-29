import { useState, useEffect, ChangeEvent, KeyboardEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import classes from './SearchCityInput.module.css';
import City from '../../../../types/City';
import ForecastDataStore from '../../../stores/ForecastDataStore/ForecastDataStore';
import { ThemeContext } from '../../../themes/ThemeContext/ThemeContext';

interface SearchCityInputProps {
  placeholder: string;
}

const SearchCityInput: React.FC<SearchCityInputProps> = ({ placeholder }) => {

    const [cityName, setCityName] = useState('');
    const [availableCities, setAvailableCities] = useState<string[]>([]);
    const {darkMode} = useContext(ThemeContext);
    const {fetchForecastData} = ForecastDataStore;
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

    const saveInputToLocalStorage = (inputData: string) => {
        let prevInputs = JSON.parse(localStorage.getItem("prevInputs") || "[]");
        const index = prevInputs.indexOf(inputData);
        if (index !== -1) {
            prevInputs.splice(index, 1);
        }
        prevInputs.unshift(inputData);
        if (prevInputs.length > 5) { 
            prevInputs = prevInputs.slice(0, 5);
        }
        localStorage.setItem("prevInputs", JSON.stringify(prevInputs));
    }
    
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
        if (cityDataIsLoaded(event.currentTarget.value)) {
            saveInputToLocalStorage(cityName);
            fetchForecastData(cityName);
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
        <>
            <input
                type="text"
                name="searchCityInput"
                placeholder={placeholder}
                className={`${classes.searchCityInput} ${darkMode && classes['searchCityInput--dark']}`}
                value={cityName}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
        </>
    );
};

export default SearchCityInput;