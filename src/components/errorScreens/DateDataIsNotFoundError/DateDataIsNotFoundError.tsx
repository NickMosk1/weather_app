import { useContext } from 'react';
import DateDataIsNotFoundErrorImage from './DateDataIsNotFoundErrorImage/DateDataIsNotFoundErrorImage.png';
import classes from './DateDataIsNotFoundErrorImage.module.css';
import { ThemeContext } from '../../themes/ThemeContext/ThemeContext';

interface DateDataIsNotFoundErrorProps{
    additionalData: string;
}

const DateDataIsNotFoundError: React.FC<DateDataIsNotFoundErrorProps> = ({additionalData}) => {

    const {darkMode} = useContext(ThemeContext);

    return(
        <div className={classes.dateDataIsNotFoundError}>
            <div className={classes.errorMessage}> Упс... Кажется, данных о погоде <br/> за выбранный период у нас нет! </div>
            <img src={DateDataIsNotFoundErrorImage} alt="DateDataIsNotFound" className={classes.errorImage}/>
            <div className={`${classes.errorMessageDetails} ${darkMode && classes['errorMessageDetails--dark']}`}> В скором времени постараемся <br/> снабдить вас погодными данными {additionalData}. </div>
        </div>
    );
}

export default DateDataIsNotFoundError;