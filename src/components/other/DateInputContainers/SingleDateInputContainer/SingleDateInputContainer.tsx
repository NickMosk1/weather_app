import WeatherStore from "../../../../stores/JournalDataStore/JournalDataStore";
import DateInput from "../../../forms/Inputs/DateInput/DateInput";
import { useContext } from "react";
import { ThemeContext } from "../../../themes/ThemeContext/ThemeContext";
import styled from "@emotion/styled";

interface SingleDateInputContainerProps {
    choosenDate: string;
    setChoosenDate: (key: string) => void;
}

const SingleDateInputContainer: React.FC<SingleDateInputContainerProps> = ({choosenDate, setChoosenDate}) => {

    const {journalData} = WeatherStore;
    const {darkMode} = useContext(ThemeContext);
    
    return(
        <SingleDateInputContainerWrapper>
            <ChoosenDateTitle>
                Погода в {journalData !== null && journalData.name} на {choosenDate}:
            </ChoosenDateTitle>
            <ChoosenDateTitleDetails darkMode={darkMode}>
                Откройте для себя новые возможности и узнайте, как изменилась погода за последние дни, месяцы или даже годы. 
                С помощью нашего инструмента вы можете выбрать любой период времени и анализировать погодные данные по вашему усмотрению. 
            </ChoosenDateTitleDetails>
            <DateInputContainer>
                <DateInput choosenDate={choosenDate} setChoosenDate={setChoosenDate}/>
            </DateInputContainer>
        </SingleDateInputContainerWrapper>
    )
}

export default SingleDateInputContainer;

const SingleDateInputContainerWrapper = styled.div`
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
    justify-content: center;
    padding-left: 15%;
    padding-right: 15%;
    margin-top: 40px;
    margin-bottom: 40px;
`;