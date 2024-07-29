import SearchCityInput from '../../../components/forms/Inputs/SearchCityInput/SearchCityInput';
import { useContext } from 'react';
import { ThemeContext } from '../../../components/themes/ThemeContext/ThemeContext';
import PrevInputLSButtonContainer from '../../../components/routingContainers/PrevInputLSButtonContainer/PrevInputLSButtonContainer';
import data from './PreferenceContainer/PreferenceImages/data.png';
import forecast from './PreferenceContainer/PreferenceImages/forecast.png';
import journal from './PreferenceContainer/PreferenceImages/journal.png';
import comfort from './PreferenceContainer/PreferenceImages/comfort.png';
import styled from '@emotion/styled';
import PreferencesContainer from './PreferenceContainer/PreferencesContainer';

type preferenceData = {
    text: string,
    image: string,
}

const HomePageInfoContainer = () => {
    
    const {darkMode} = useContext(ThemeContext);

    const preferenceDataArray: preferenceData[] = [
        {text: "Точные данные", image: data}, 
        {text: "Детальные прогнозы", image: forecast}, 
        {text: "Журнал погоды", image: journal}, 
        {text: "Удобный интерфейс", image: comfort}
    ];

    return (
        <>
            <WelcomeQuote> Добро пожаловать в MyMeteo! </WelcomeQuote> 
            {darkMode ? 
            <DarkModeHomePageInfoDetails>
                MyMeteo - ваш источник актуальной информации о погоде! 
                Узнайте прогноз погоды для вашего города, получите подробную информацию о температуре, осадках, ветре и других погодных условиях. 
                Мы предлагаем точные и надежные данные, чтобы помочь вам планировать свои действия и быть готовыми к любым изменениям погоды.
            </DarkModeHomePageInfoDetails>
            :
            <HomePageInfoDetails>
                MyMeteo - ваш источник актуальной информации о погоде! 
                Узнайте прогноз погоды для вашего города, получите подробную информацию о температуре, осадках, ветре и других погодных условиях. 
                Мы предлагаем точные и надежные данные, чтобы помочь вам планировать свои действия и быть готовыми к любым изменениям погоды.
            </HomePageInfoDetails>
            }
            <PreferencesContainer preferenceDataArray={preferenceDataArray}/>
            {darkMode ? 
            <DarkModeHomePageInfoDetails> Начните пользоваться уже сейчас! Бесплатно!</DarkModeHomePageInfoDetails>
            :
            <HomePageInfoDetails> Начните пользоваться уже сейчас! Бесплатно! </HomePageInfoDetails>
            }
            <SearchCityInputContainer>
                <SearchCityInput placeholder="Введите название города"/>
            </SearchCityInputContainer>
            <PrevInputLSButtonContainer recordShown={3}/>
        </>
    );
};
  
export default HomePageInfoContainer;

const WelcomeQuote = styled.div`
    color: #007bff;
    font-weight: 900;
    font-size: 300%;
    height: 10%;
    width: 100%;
    text-align: center;
    margin-top: 80px;
`;

const HomePageInfoDetails = styled.div`
    color: #333;
    font-weight: 100;
    font-size: 130%;
    width: 70%;
    margin-top: 80px;
    text-align: center;
`;

const DarkModeHomePageInfoDetails = styled(HomePageInfoDetails)`
    color: #bbbbbb;
`;

const SearchCityInputContainer = styled.div`
    margin-top: 80px;
`;