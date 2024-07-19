import { useContext } from 'react';
import SearchCityInput from '../../forms/Inputs/SearchCityInput/SearchCityInput';
import classes from './CityRoutingContainer.module.css';
import { ThemeContext } from '../../themes/ThemeContext/ThemeContext';

const CityRoutingContainer = () => {

  const {darkMode} = useContext(ThemeContext);

  return (
    <div className={classes.cityRoutingContainer}>
      <div className={classes.cityRoutingContainerTitle}>
        Хотите узнать, какая погода в других уголках мира?
      </div>
      <div className={`${classes.cityRoutingContainerDetails} ${darkMode && classes['cityRoutingContainerDetails--dark']}`}>
        Не упустите возможность исследовать погоду в самых интересных городах планеты! <br/>
        Узнайте, как одеваться в Лондоне, планируйте отпуск в Париже или просто посмотрите, как солнечно в Дубае. <br/>
        Введите название города в поисковую строку и отправляйтесь в увлекательное путешествие по погодным условиям разных городов! <br/>
        Попробуйте прямо сейчас! <br/>
        Бесплатно!
      </div>
      <SearchCityInput placeholder="Введите название города" darkMode={darkMode}/>
    </div>
  );
};

export default CityRoutingContainer;