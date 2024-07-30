import { useCallback, useEffect, useState } from "react";
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
    const [lastJournalRecords, setLastJournalRecords] = useState<string[]>(getLastJournalRecords(2)); //вот тут число кнопок регулируем
    const navigate = useNavigate();
    
    const redirectToJournal = useCallback((itemData: string) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(`/cityJournal`, { state: { cityName: itemData } });
    }, [navigate]); 

    const deleteLastJournalRecords = () => {
        localStorage.removeItem("prevJournalInputs"); 
        setLastJournalRecords([]);
    }
    
    useEffect(() => {
        if (journalData === null) {
            fetchJournalData(cityName)
        } else {
            if (cityName !== journalData.name) {
                fetchJournalData(cityName)
            }
        }
        const millisRemainTillNextHour = (60 - new Date().getMinutes()) * 60 * 1000 - new Date().getSeconds() * 1000 - new Date().getMilliseconds();
        const timeoutId = setTimeout(() => { 
            fetchJournalData(cityName);
            setInterval(() => {fetchJournalData(cityName)}, 60 * 60 * 1000);
        }, millisRemainTillNextHour);
        return () => clearTimeout(timeoutId); 
    }, [cityName]);
    
    useEffect(() => {
        if (selectedOption === 'backToForecast') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate(`/cityForecast`, {state: {cityName}});
        }
    }, [selectedOption]);

    const chips: ChipData[] = [
        { label: 'Данные конкретной даты', value: 'singleDay' },
        { label: 'Аналитика диапазона', value: 'journalRange' },
        { label: 'Обратно к прогнозу в ' + cityName, value: 'backToForecast' }
    ];

    return (
        <>
            {!journalData && isLoading && <LinearPageLoader/>}
            {!journalData && !isLoading && (navigate(`/error`, { state: { additionalData: " за все время", errorType: 'dateDataIsNotFound' } }))}
            {journalData && isLoading && <LinearPageLoader/>}
            {journalData && !isLoading && (
                <CityJournalPageContainerWrapper>
                    <Paper style={{ backgroundColor: 'unset', boxShadow: 'unset', textAlign: 'center', marginBottom: '40px'}}>
                        <MyChipBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} chips={chips} />
                        <>
                            {selectedOption === 'singleDay' && <SingleDayScreen/>}
                            {selectedOption === 'journalRange' && <JournalRangeScreen/>}
                        </>
                    </Paper>
                    <PrevInputLSButtonContainer 
                        buttonData={lastJournalRecords} 
                        deleteFunc={deleteLastJournalRecords} 
                        redirectToPage={redirectToJournal}
                    />
                </CityJournalPageContainerWrapper>
            )}
        </>
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