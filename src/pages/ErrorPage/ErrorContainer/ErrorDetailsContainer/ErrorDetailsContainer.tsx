import ErrorImage from './ErrorImage/ErrorImage';
import classes from './ErrorDetailsContainer.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../../../components/themes/ThemeContext/ThemeContext';

type ErrorDetailsContainerProps = {
    cityName: string;
    errorType: string;
};

type ErrorTypes = 'cityIsNotFound' | 'dateDataIsNotFound';

const ErrorDetailsContainer: React.FC<ErrorDetailsContainerProps> = ({ errorType, cityName }) => {

    const {darkMode} = useContext(ThemeContext);

    return (
        <>
            <div className={classes.errorMessage}> Упс... Кажется, данных о погоде <br/> в городе {cityName} у нас нет. </div>
            <ErrorImage/>
            <div className={`${classes.errorMessageDetails} ${darkMode && classes['errorMessageDetails--dark']}`}> Возможно, такого города не существует. <br/> Попробуйте исправить поисковой запрос. </div>
        </>
    );
};
  
export default ErrorDetailsContainer;