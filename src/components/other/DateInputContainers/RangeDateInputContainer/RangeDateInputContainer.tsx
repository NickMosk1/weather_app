import { useContext } from "react";
import DateInput from "../../../forms/Inputs/DateInput/DateInput";
import WeatherStore from "../../../../stores/JournalDataStore/JournalDataStore";
import { ThemeContext } from "../../../themes/ThemeContext/ThemeContext";
import styled from "@emotion/styled";

interface RangeDateInputContainerProps{
    startDate: string;
    setStartDate: (key: string) => void;
    endDate: string;
    setEndDate: (key: string) => void;
}

const RangeDateInputContainer: React.FC<RangeDateInputContainerProps> = ({startDate, setStartDate, endDate, setEndDate}) => {

    const {journalData} = WeatherStore;
    const {darkMode} = useContext(ThemeContext);

    return(
        <RangeDateInputContainerWrapper>
            <ChoosenDateTitle>
                Погода в {journalData !== null && journalData.name} с {startDate} по {endDate}:
            </ChoosenDateTitle>
            <ChoosenDateTitleDetails darkMode={darkMode}>
                Откройте для себя новые возможности и узнайте, как изменилась погода за последние дни, месяцы или даже годы. 
                С помощью нашего инструмента вы можете выбрать любой период времени и анализировать погодные данные по вашему усмотрению. 
            </ChoosenDateTitleDetails>
            <DateInputContainer>
                <DateInput choosenDate={startDate} setChoosenDate={setStartDate}/>
                <DateInput choosenDate={endDate} setChoosenDate={setEndDate}/>
            </DateInputContainer>
        </RangeDateInputContainerWrapper>
    )
}

export default RangeDateInputContainer;


const RangeDateInputContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ChoosenDateTitle = styled.div`
    color: #007bff;
    font-weight: 900;
    font-size: 200%;
    text-align: center;
    margin-top: 80px;
    margin-bottom: 40px;
`;

const ChoosenDateTitleDetails = styled.div<{darkMode: boolean}>`
    color: ${(props) => (props.darkMode ? "#bbbbbb" : "#333")};
    font-weight: 100;
    font-size: 130%;
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: center;
`;

const DateInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 15%;
    padding-right: 15%;
    margin-top: 40px;
    margin-bottom: 40px;
`;