import { Paper } from '@mui/material';
import City from '../../../../types/City';
import TodayScreen from './MyWeatherChipScreens/TodayScreen/TodayScreen';
import { useEffect, useState } from 'react';
import MyChipBar from '../../../../components/other/MyChipBar/MyChipBar';
import classes from './CityWeatherAnalytics.module.css';
import ThreeDaysScreen from './MyWeatherChipScreens/ThreeDaysScreen/ThreeDaysScreen';
import WeekScreen from './MyWeatherChipScreens/WeekScreen/WeekScreen';
import TwoWeeksScreen from './MyWeatherChipScreens/TwoWeeksScreen/TwoWeeksScreen';
import { useNavigate } from 'react-router-dom';
import WeatherStore from '../../../../components/stores/WeatherStore/WeatherStore';

interface CityWeatherAnalyticsProps {
  weatherData: City;
  todayDate: string;
}

interface ChipData {
  label: string;
  value: string;
}

const CityWeatherAnalytics: React.FC<CityWeatherAnalyticsProps> = ({ weatherData, todayDate }) => {
  
  const [selectedOption, setSelectedOption] = useState<string>('today');

  const navigate = useNavigate();
  
  useEffect(() => {
    const cityName = weatherData.name;
    WeatherStore.fetchData(cityName);
    if (selectedOption === 'weatherJournal' && WeatherStore.weatherData !== null) {
      navigate(`/cityJournal`, { state: { cityName } });
    }
    if (selectedOption === 'weatherJournal' && WeatherStore.weatherData === null){
      navigate(`/error`, { state: { cityName, errorType: "cityIsNotFound" }});
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
        <div className={classes.selectedOption}>
          {selectedOption === 'today' && <TodayScreen weatherData={weatherData} todayDate={todayDate} />}
          {selectedOption === 'threeDays' && <ThreeDaysScreen weatherData={weatherData} todayDate={todayDate} />}
          {selectedOption === 'week' && <WeekScreen weatherData={weatherData} todayDate={todayDate} />}
          {selectedOption === 'twoWeek' && <TwoWeeksScreen weatherData={weatherData} todayDate={todayDate} />}
        </div>
      </Paper>
    </>
  );
};

export default CityWeatherAnalytics;