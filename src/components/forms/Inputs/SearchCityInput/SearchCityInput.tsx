import { useState, ChangeEvent, KeyboardEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import ForecastDataStore from '../../../stores/ForecastDataStore/ForecastDataStore';
import { ThemeContext } from '../../../themes/ThemeContext/ThemeContext';
import styled from '@emotion/styled';

interface SearchCityInputProps {
    placeholder: string;
}

const SearchCityInput: React.FC<SearchCityInputProps> = ({ placeholder }) => {

    const [cityName, setCityName] = useState('');
    const {darkMode} = useContext(ThemeContext);
    const {fetchForecastData} = ForecastDataStore;
    const navigate = useNavigate(); 

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCityName(event.target.value);
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
            (async () => {
                try {
                    await fetchForecastData(cityName);
                    if (ForecastDataStore.forecastData !== null){
                        saveInputToLocalStorage(cityName);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        navigate(`/cityForecast`, {state: {cityName}});
                        setCityName('');
                    }
                    else{
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        navigate(`/error`, {state: {additionalData: cityName, errorType: "cityIsNotFound"}});
                        setCityName('');
                    }
                } catch (error) {
                    console.error('Ошибка при получении данных на моменте обращения к стору форкаста из инпута:', error);
                    navigate(`/error`, {state: {additionalData: cityName, errorType: "cityIsNotFound"}});
                } 
            })();
        }
    };

    return (
        <>
            <SearchCityInputWrapper
                type="text"
                name="searchCityInput"
                darkMode={darkMode}
                placeholder={placeholder}
                value={cityName}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
        </>
    );
};

export default SearchCityInput;

const SearchCityInputWrapper = styled.input<{darkMode: boolean}>`
    color: #007bff;
    text-emphasis-color: #007bff;
    background-color: ${(props) => (props.darkMode ? "#333" : "#fff")};
    padding: 10px 15px;
    border: 1.7px solid #007bff; 
    border-radius: 15px;
    font-size: 120%;
    font-weight: 100;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
    cursor: pointer;
    transition: box-shadow 0.3s ease, transform 0.3s ease;

    &: hover{
        box-shadow: 0 6px 12px rgba(0, 123, 255, 0.3);
        transform: scale(1.1);
    }

    &: focus{
        outline: none; 
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
        transform: scale(1.1);
    }
`;