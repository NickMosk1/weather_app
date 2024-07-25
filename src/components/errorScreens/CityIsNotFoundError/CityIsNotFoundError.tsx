import { useContext } from 'react';
import CityIsNotFoundErrorImage from './CityIsNotFoundErrorImage/CityIsNotFoundErrorImage.png';
import classes from './CityIsNotFoundError.module.css';
import { ThemeContext } from '../../themes/ThemeContext/ThemeContext';

interface CityIsNotFoundErrorProps{
    additionalData: string;
}

const CityIsNotFoundError: React.FC<CityIsNotFoundErrorProps> = ({additionalData}) => {

    const {darkMode} = useContext(ThemeContext);

    return(
        <div className={classes.cityIsNotFoundError}>
            <div className={classes.errorMessage}> Упс... Кажется, данных о погоде <br/> в городе {additionalData} у нас нет! </div>
            <img src={CityIsNotFoundErrorImage} alt="CityNotFound" className={classes.errorImage}/>
            <div className={`${classes.errorMessageDetails} ${darkMode && classes['errorMessageDetails--dark']}`}> Возможно, такого города не существует. <br/> Попробуйте исправить поисковой запрос. </div>
        </div>
    );
}

export default CityIsNotFoundError;