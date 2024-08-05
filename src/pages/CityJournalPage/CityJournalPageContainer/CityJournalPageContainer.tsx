import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import MyChipBar from "../../../components/other/MyChipBar/MyChipBar";
import JournalRangeScreen from "./JournalScreens/JournalRangeScreen";
import SingleDayScreen from "./JournalScreens/SingleDayScreen";
import JournalDataStore from "../../../stores/JournalDataStore/JournalDataStore";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
import LinearPageLoader from "../../../components/pageLoaders/LinearPageLoader/LinearPageLoader";
import PrevInputLSButtonContainer from "../../../components/routingContainers/PrevInputLSButtonContainer/PrevInputLSButtonContainer";

interface ChipData {
    label: string;
    value: string;
}

interface CityJournalPageContainerProps{
    cityName: string;
}

const getLastJournalRecords = (recordShown: number) => {
    const prevJournalInputs = JSON.parse(localStorage.getItem("prevJournalInputs") || "[]");
    const lastJournalRecords = prevJournalInputs.slice(0, recordShown);
    return lastJournalRecords;
}

const CityJournalPageContainer: React.FC<CityJournalPageContainerProps> = observer(({cityName}) => {
    
    const [selectedOption, setSelectedOption] = useState<string>('singleDay');
    const {journalData, isLoading, fetchJournalData} = JournalDataStore;
    const [lastJournalRecords, setLastJournalRecords] = useState<string[]>(getLastJournalRecords(2)); 
    const navigate = useNavigate();
    const fetchJournalDataRef = useRef(fetchJournalData);
    
    const redirectToJournal = useCallback((itemData: string) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(`/cityJournal`, { state: { cityName: itemData } });
    }, [navigate]); 

    const deleteLastJournalRecords = useCallback(() => {
        localStorage.removeItem("prevJournalInputs"); 
        setLastJournalRecords([]);
    }, []);

    useEffect(() => {
        fetchJournalDataRef.current(cityName);
        const millisRemainTillNextHour = (60 - new Date().getMinutes()) * 60 * 1000 - new Date().getSeconds() * 1000 - new Date().getMilliseconds();
        const timeoutId = setTimeout(() => { 
            fetchJournalDataRef.current(cityName);
            setInterval(() => {fetchJournalDataRef.current(cityName)}, 60 * 60 * 1000);
        }, millisRemainTillNextHour);
        return () => clearTimeout(timeoutId); 
    }, [cityName, journalData]);
    
    useEffect(() => {
        if (selectedOption === 'backToForecast') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate(`/cityForecast`, {state: {cityName}});
        }
    }, [selectedOption, navigate, cityName]);

    const chips: ChipData[] = [
        { label: 'Данные конкретной даты', value: 'singleDay' },
        { label: 'Аналитика диапазона', value: 'journalRange' },
        { label: 'Обратно к прогнозу в ' + cityName, value: 'backToForecast' }
    ];

    if(isLoading) {
        return <LinearPageLoader/>;
    } else {
        if(!journalData){
            navigate(`/error`, { state: { additionalData: " за все время", errorType: 'dateDataIsNotFound' } });
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return null;
        }
    }

    return (
        <CityJournalPageContainerWrapper>
            <StyledPaper>
                <MyChipBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} chips={chips} />
                {selectedOption === 'singleDay' && <SingleDayScreen/>}
                {selectedOption === 'journalRange' && <JournalRangeScreen/>}
            </StyledPaper>
            <PrevInputLSButtonContainer 
                buttonData={lastJournalRecords} 
                deleteFunc={deleteLastJournalRecords} 
                redirectToPage={redirectToJournal}
            />
        </CityJournalPageContainerWrapper>
    );
});

export default CityJournalPageContainer;

const CityJournalPageContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 70%;
    margin-top: 80px;
`;

const StyledPaper = styled(Paper)`
    background-color: unset;
    box-shadow: unset;
    text-align: center;
    margin-bottom: 40px;
`;