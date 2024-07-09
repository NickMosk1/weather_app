
import Preference from './Preference/Preference';

import classes from './HomePageContainer.module.css';

import data from './PreferenceImages/data.png';

import forecast from './PreferenceImages/forecast.png';

import journal from './PreferenceImages/journal.png';

import comfort from './PreferenceImages/comfort.png';

import SearchCityInput from '../../../components/forms/Inputs/SearchCityInput/SearchCityInput';


const HomePageContainer = () => {

    return (

        <>

            <div className={classes.welcomeQuote}>

                Добро пожаловать в MyMeteo!

            </div>

            <div className={classes.aboutAppQuoteContainer}>

                <div className={classes.aboutAppQuote}>

                    MyMeteo - ваш источник актуальной информации о погоде! 
                    Узнайте прогноз погоды для вашего города, получите подробную информацию о температуре, осадках, ветре и других погодных условиях. 
                    Мы предлагаем точные и надежные данные, чтобы помочь вам планировать свои действия и быть готовыми к любым изменениям погоды. 

                </div>

            </div>
  
            <div className={classes.preferencesContainer}>

                <Preference image={data} text={'Точные данные'}/>

                <Preference image={forecast} text={'Детальные прогнозы'}/>

                <Preference image={journal} text={'Журнал погоды'}/>

                <Preference image={comfort} text={'Удобный интерфейс'}/>

            </div>

            <div className={classes.aboutAppQuoteContainer}>

                <div className={classes.aboutAppQuote}>

                    Начните пользоваться уже сейчас! Бесплатно!

                </div>

            </div>

            <div className={classes.searchCityInputContainer}>

                <SearchCityInput

                    placeholder="Введите название города"

                />

            </div>

        </>
  
    );
  
  };
  
  export default HomePageContainer;