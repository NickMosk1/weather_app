import { Paper } from '@mui/material';
import TodayScreen from './CityForecastChipScreens/TodayScreen/TodayScreen';
import ThreeDaysScreen from './CityForecastChipScreens/ThreeDaysScreen/ThreeDaysScreen';
import WeekScreen from './CityForecastChipScreens/WeekScreen/WeekScreen';
import TwoWeeksScreen from './CityForecastChipScreens/TwoWeeksScreen/TwoWeeksScreen';
import { useEffect, useState } from 'react';
import MyChipBar from '../../../../components/other/MyChipBar/MyChipBar';
import { useNavigate } from 'react-router-dom';
import JournalDataStore from '../../../../components/stores/JournalDataStore/JournalDataStore';
import { observer } from 'mobx-react';
import ForecastDataStore from '../../../../components/stores/ForecastDataStore/ForecastDataStore';
import CityRoutingContainer from '../../../../components/routingContainers/CityRoutingContainer/CityRoutingContainer';

interface ChipData {
  label: string;
  value: string;
}

const CityForecastAnalytics = observer(() => {
  
    const [selectedOption, setSelectedOption] = useState<string>('today');
    const navigate = useNavigate();
    const {forecastData} = ForecastDataStore;
    const {fetchJournalData} = JournalDataStore;
    const cityName = forecastData ? forecastData.name : "error";

    useEffect(() => {
        if (selectedOption === 'weatherJournal') {
            (async () => {
                try {
                    await fetchJournalData(cityName);
                    if (JournalDataStore.journalData !== null){
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        navigate(`/cityJournal`, {state: {cityName}});
                    }
                    else{
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        navigate(`/error`, {state: {additionalData: " за все время", errorType: "dateDataIsNotFound"}});
                    }
                } catch (error) {
                    console.error('Ошибка при получении данных о погоде:', error);
                    navigate(`/error`, {state: {additionalData: " за все время", errorType: "dateDataIsNotFound"}});
                } 
            })();
        }
    }, [selectedOption]);

    const chips: ChipData[] = [
        { label: 'Сегодня', value: 'today' },
        { label: 'На три дня', value: 'threeDays' },
        { label: 'На неделю', value: 'week' },
        { label: 'На две недели', value: 'twoWeek' },
        { label: 'Журнал погоды', value: 'weatherJournal' }
    ];

    return (
        <>
            <Paper style={{ backgroundColor: 'unset', boxShadow: 'unset', textAlign: 'center' }}>
                <MyChipBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} chips={chips} />
                <>
                    {selectedOption === 'today' && <TodayScreen/>}
                    {selectedOption === 'threeDays' && <ThreeDaysScreen />}
                    {selectedOption === 'week' && <WeekScreen/>}
                    {selectedOption === 'twoWeek' && <TwoWeeksScreen/>}
                </>
            </Paper>
            <CityRoutingContainer/>
        </>
    );
});

export default CityForecastAnalytics;