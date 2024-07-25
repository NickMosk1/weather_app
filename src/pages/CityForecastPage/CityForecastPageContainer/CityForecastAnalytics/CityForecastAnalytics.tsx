import { Paper } from '@mui/material';
import City from '../../../../types/City';
import TodayScreen from './CityForecastChipScreens/TodayScreen/TodayScreen';
import ThreeDaysScreen from './CityForecastChipScreens/ThreeDaysScreen/ThreeDaysScreen';
import WeekScreen from './CityForecastChipScreens/WeekScreen/WeekScreen';
import TwoWeeksScreen from './CityForecastChipScreens/TwoWeeksScreen/TwoWeeksScreen';
import { useEffect, useState } from 'react';
import MyChipBar from '../../../../components/other/MyChipBar/MyChipBar';
import { useNavigate } from 'react-router-dom';
import JournalDataStore from '../../../../components/stores/JournalDataStore/JournalDataStore';

interface CityForecastAnalyticsProps {
  weatherData: City;
  todayDate: string;
}

interface ChipData {
  label: string;
  value: string;
}

const CityForecastAnalytics: React.FC<CityForecastAnalyticsProps> = ({ weatherData, todayDate }) => {
  
  const [selectedOption, setSelectedOption] = useState<string>('today');
  const navigate = useNavigate();
  
  useEffect(() => {
    const cityName = weatherData.name;
    JournalDataStore.fetchData(cityName);
    if (selectedOption === 'weatherJournal' && JournalDataStore.weatherData !== null) {
      navigate(`/cityJournal`, { state: { cityName } });
    }
    if (selectedOption === 'weatherJournal' && JournalDataStore.weatherData === null){
      navigate(`/error`, { state: { cityName, errorType: "cityIsNotFound" }}); //вот тут поправить тип ошибки надо
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
          {selectedOption === 'today' && <TodayScreen weatherData={weatherData} todayDate={todayDate} />}
          {selectedOption === 'threeDays' && <ThreeDaysScreen weatherData={weatherData} todayDate={todayDate} />}
          {selectedOption === 'week' && <WeekScreen weatherData={weatherData} todayDate={todayDate} />}
          {selectedOption === 'twoWeek' && <TwoWeeksScreen weatherData={weatherData} todayDate={todayDate} />}
        </>
      </Paper>
    </>
  );
};

export default CityForecastAnalytics;