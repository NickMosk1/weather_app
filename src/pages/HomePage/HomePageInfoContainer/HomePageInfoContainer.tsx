import classes from './HomePageInfoContainer.module.css';
import SearchCityInput from '../../../components/forms/Inputs/SearchCityInput/SearchCityInput';
import PreferencesContainer from './PreferenceContainer/PreferencesContainer';
import { useContext } from 'react';
import { ThemeContext } from '../../../components/themes/ThemeContext/ThemeContext';
import PrevInputLSButtonContainer from '../../../components/routingContainers/PrevInputLSButtonContainer/PrevInputLSButtonContainer';

const HomePageInfoContainer = () => {
    
    const {darkMode} = useContext(ThemeContext);

    return (
        <>
            <div className={classes.welcomeQuote}> Добро пожаловать в MyMeteo! </div> 
            <div className={`${classes.homePageInfoDetails} ${darkMode && classes['homePageInfoDetails--dark']}`}>
                MyMeteo - ваш источник актуальной информации о погоде! 
                Узнайте прогноз погоды для вашего города, получите подробную информацию о температуре, осадках, ветре и других погодных условиях. 
                Мы предлагаем точные и надежные данные, чтобы помочь вам планировать свои действия и быть готовыми к любым изменениям погоды.
            </div>
            <PreferencesContainer/>
            <div className={`${classes.homePageInfoDetails} ${darkMode && classes['homePageInfoDetails--dark']}`}>
                Начните пользоваться уже сейчас! Бесплатно!
            </div>
            <div className={classes.searchCityInputContainer}>
                <SearchCityInput placeholder="Введите название города"/>
            </div>
            <PrevInputLSButtonContainer recordShown={3}/> {/* можно регулировать количество готовых ссылок */}
        </>
    );
};
  
export default HomePageInfoContainer;