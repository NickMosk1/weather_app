import classes from './HomePageInfoContainer.module.css';
import SearchCityInput from '../../../components/forms/Inputs/SearchCityInput/SearchCityInput';
import PreferencesContainer from './PreferenceContainer/PreferencesContainer';
import HomePageInfoDetails from './HomePageInfoDetails/HomePageInfoDetails';

const HomePageInfoContainer = () => {
    return (
        <>
            <div className={classes.welcomeQuote}> Добро пожаловать в MyMeteo! </div> 
            <HomePageInfoDetails textDetails={"MyMeteo - ваш источник актуальной информации о погоде! Узнайте прогноз погоды для вашего города, получите подробную информацию о температуре, осадках, ветре и других погодных условиях. Мы предлагаем точные и надежные данные, чтобы помочь вам планировать свои действия и быть готовыми к любым изменениям погоды."}/>
            <PreferencesContainer/>
            <HomePageInfoDetails textDetails={"Начните пользоваться уже сейчас! Бесплатно"}/>
            <div className={classes.searchCityInputContainer}>
                <SearchCityInput placeholder="Введите название города"/>
            </div>
        </>
    );
};
  
export default HomePageInfoContainer;