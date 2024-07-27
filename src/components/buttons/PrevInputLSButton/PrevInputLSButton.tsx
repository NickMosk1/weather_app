import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../themes/ThemeContext/ThemeContext';
import ForecastDataStore from '../../stores/ForecastDataStore/ForecastDataStore';
import classes from './PrevInputLSButton.module.css';

interface PrevInputLSButtonProps{
    itemData: string;
}

const PrevInputLSButton: React.FC<PrevInputLSButtonProps> = ({itemData}) => {

    const {darkMode} = useContext(ThemeContext);

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        ForecastDataStore.fetchData(itemData);
    };
    
    return (
        <>
            {itemData !== "notFound"? 
            <button onClick={buttonHandler} className={`${classes.prevInputLSButton} ${darkMode && classes['prevInputLSButton--dark']}`}>
                <Link className={classes.prevInputLSButtonText} to="/cityForecast" state={{ cityName: itemData }}> {itemData} </Link>
            </button>
            : 
            <></>} 
        </>
    )
}
  

export default PrevInputLSButton;