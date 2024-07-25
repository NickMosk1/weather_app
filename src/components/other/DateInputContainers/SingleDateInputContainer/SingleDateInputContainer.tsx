import WeatherStore from "../../../stores/JournalDataStore/JournalDataStore";
import DateInput from "../../../forms/Inputs/DateInput/DateInput";
import classes from './SingleDateInputContainer.module.css';
import { useContext } from "react";
import { ThemeContext } from "../../../themes/ThemeContext/ThemeContext";

interface SingleDateInputContainerProps {
    choosenDate: string;
    setChoosenDate: (key: string) => void;
}

const SingleDateInputContainer: React.FC<SingleDateInputContainerProps> = ({choosenDate, setChoosenDate}) => {

    const {journalData} = WeatherStore;
    const {darkMode} = useContext(ThemeContext);
    
    return(
        <div className={classes.singleDateInputContainer}>
            <div className={classes.choosenDateTitle}>
                Погода в {journalData !== null && journalData.name} на {choosenDate}:
            </div>
            <div className={`${classes.choosenDateTitleDetails} ${darkMode && classes['choosenDateTitleDetails--dark']}`}>
                Откройте для себя новые возможности и узнайте, как изменилась погода за последние дни, месяцы или даже годы. 
                С помощью нашего инструмента вы можете выбрать любой период времени и анализировать погодные данные по вашему усмотрению. 
            </div>
            <div className={classes.dateInputContainer}>
                <DateInput choosenDate={choosenDate} setChoosenDate={setChoosenDate}/>
            </div>
        </div>
    )
}

export default SingleDateInputContainer;