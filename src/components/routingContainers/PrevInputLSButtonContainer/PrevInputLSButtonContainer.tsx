import classes from './PrevInputLSButtonContainer.module.css';
import { useContext, useState } from "react";
import { ThemeContext } from "../../themes/ThemeContext/ThemeContext";
import PrevInputLSButtonContainerRow from "./PrevInputLSButtonContainerRow/PrevInputLSButtonContainerRow";

interface PrevInputLSButtonContainerProps{
    recordShown: number;
}

const getLastRecords = (recordShown: number) => {
    const prevInputs = JSON.parse(localStorage.getItem("prevInputs") || "[]");
    const lastRecords = prevInputs.slice(0, recordShown);
    return lastRecords;
}

const PrevInputLSButtonContainer: React.FC<PrevInputLSButtonContainerProps> = ({recordShown}) => {

    const {darkMode} = useContext(ThemeContext);
    const [lastRecords, setLastRecords] = useState<string[]>(getLastRecords(recordShown));

    const deleteLastRecords = () => {
        localStorage.removeItem("prevInputs"); // тут все очищаем при нажатии на ведро мусорное
        setLastRecords([]);
    }

    return(
        <div className={classes.prevInputLSButtonContainer}>
            {lastRecords.length? 
                (
                <>
                    <div className={`${classes.recordsTitle} ${darkMode && classes['recordsTitle--dark']}`}> 
                        Ваши сохраненные запросы: 
                    </div>
                    <PrevInputLSButtonContainerRow lastRecords={lastRecords} deleteLastRecords={deleteLastRecords}/>
                </>
                )
                :
                (
                <>
                    <div className={`${classes.recordsNotFoundWarning} ${darkMode && classes['recordsNotFoundWarning--dark']}`}> 
                        Сохраненных запросов пока нет. <br/> Введите название города и мы запомним его для Ваших будущих посещений сайта! 
                    </div>
                </>
                )
            }
        </div>
    ) 
}

export default PrevInputLSButtonContainer;