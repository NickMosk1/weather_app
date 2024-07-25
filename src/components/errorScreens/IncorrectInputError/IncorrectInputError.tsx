import { useContext } from 'react';
import IncorrectInputErrorImage from './IncorrectInputErrorImage/IncorrectInputErrorImage.png';
import classes from './IncorrectInputError.module.css';
import { ThemeContext } from '../../themes/ThemeContext/ThemeContext';

interface IncorrectInputErrorProps{
    additionalData: string;
}

const IncorrectInputError: React.FC<IncorrectInputErrorProps> = ({additionalData}) => {

    const {darkMode} = useContext(ThemeContext);

    return(
        <div className={classes.incorrectInputError}>
            <div className={classes.errorMessage}> Чел ааа, данные ввода некорректны! </div>
            <img src={IncorrectInputErrorImage} alt="IncorrectInput" className={classes.errorImage}/>
            <div className={`${classes.errorMessageDetails} ${darkMode && classes['errorMessageDetails--dark']}`}> 
                Время не может идти вспять. <br/> 
                Перепроверьте точность выбранных границ диапазона {additionalData}. 
            </div>
        </div>
    );
}

export default IncorrectInputError;