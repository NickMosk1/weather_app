import { useContext } from "react";
import DateInput from "../../../forms/Inputs/DateInput/DateInput";
import WeatherStore from "../../../stores/WeatherStore/WeatherStore";
import classes from './RangeDateInputContainer.module.css';
import { ThemeContext } from "../../../themes/ThemeContext/ThemeContext";

interface RangeDateInputContainerProps{
    startDate: string;
    setStartDate: (key: string) => void;
    endDate: string;
    setEndDate: (key: string) => void;
}

const RangeDateInputContainer: React.FC<RangeDateInputContainerProps> = ({startDate, setStartDate, endDate, setEndDate}) => {

    const {weatherData} = WeatherStore;
    const {darkMode} = useContext(ThemeContext);

    return(
        <div className={classes.rangeDateInputContainer}>
            <div className={classes.choosenDateTitle}>
                Погода в {weatherData !== null && weatherData.name} с {startDate} по {endDate}:
            </div>
            <div className={`${classes.choosenDateTitleDetails} ${darkMode && classes['choosenDateTitleDetails--dark']}`}>
                Откройте для себя новые возможности и узнайте, как изменилась погода за последние дни, месяцы или даже годы. 
                С помощью нашего инструмента вы можете выбрать любой период времени и анализировать погодные данные по вашему усмотрению. 
            </div>
            <div className={classes.dateInputContainer}>
                <DateInput choosenDate={startDate} setChoosenDate={setStartDate}/>
                <DateInput choosenDate={endDate} setChoosenDate={setEndDate}/>
            </div>
        </div>
    )
}

export default RangeDateInputContainer;