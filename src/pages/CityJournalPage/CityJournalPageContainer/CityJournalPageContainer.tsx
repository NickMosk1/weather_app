import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import MyChipBar from "../../../components/other/MyChipBar/MyChipBar";
import JournalRangeScreen from "./JournalScreens/JournalRangeScreen";
import SingleDayScreen from "./JournalScreens/SingleDayScreen";
import JournalDataStore from "../../../components/stores/JournalDataStore/JournalDataStore";
import { observer } from "mobx-react";
import LinearPageLoader from "../../../components/pageLoaders/LinearPageLoader/LinearPageLoader";
import styled from "@emotion/styled";

interface ChipData {
    label: string;
    value: string;
}

const CityJournalPageContainer = observer(() => {
    
    const [selectedOption, setSelectedOption] = useState<string>('singleDay');
    const {journalData, clearJournalData} = JournalDataStore;
    const navigate = useNavigate();
    
    useEffect(() => {
        if (selectedOption === 'backToForecast') {
            const cityName = journalData?.name;
            clearJournalData();
            navigate(`/cityForecast`, {state: {cityName}});
        }
    }, [selectedOption]);

    const chips: ChipData[] = [
        { label: 'Данные конкретной даты', value: 'singleDay' },
        { label: 'Аналитика диапазона', value: 'journalRange' },
        { label: 'Обратно к прогнозу', value: 'backToForecast' }
    ];
    
    if (!journalData) {return (<LinearPageLoader/>);} 

    return (
        <CityJournalPageContainerWrapper>
            <Paper style={{ backgroundColor: 'unset', boxShadow: 'unset', textAlign: 'center' }}>
                <MyChipBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} chips={chips} />
                <>
                    {selectedOption === 'singleDay' && <SingleDayScreen/>}
                    {selectedOption === 'journalRange' && <JournalRangeScreen/>}
                </>
            </Paper>
        </CityJournalPageContainerWrapper>
    );
});

export default CityJournalPageContainer;

const CityJournalPageContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 70%;
    padding-top: 45px;
    padding-bottom: 45px;
`;