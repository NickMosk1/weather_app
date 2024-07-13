import { Paper } from '@mui/material';
import City from '../../../../types/City';
import TodayScreen from './MyWeatherChipScreens/TodayScreen/TodayScreen';
import { useState } from 'react';
import MyChipBar from '../../../../components/other/MyChipBar/MyChipBar';
import classes from './CityWeatherAnalytics.module.css';
import ThreeDaysScreen from './MyWeatherChipScreens/ThreeDaysScreen/ThreeDaysScreen';

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

  const chips: ChipData[] = [
    { label: 'Сегодня', value: 'today' },
    { label: 'На 3 дня', value: 'threeDays' },
    { label: 'На неделю', value: 'week' }
  ];

  return (
    <>
      <Paper style={{ backgroundColor: 'unset', boxShadow: 'unset', padding: '16px', textAlign: 'center' }}>
        <MyChipBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} chips={chips} />
        <div className={classes.selectedOption}>
          {selectedOption === 'today' && <TodayScreen weatherData={weatherData} todayDate={todayDate} />}
          {selectedOption === 'threeDays' && <ThreeDaysScreen weatherData={weatherData} todayDate={todayDate} />}
          {selectedOption === 'week' && <div>Аналитика погоды на неделю вперед</div>}
        </div>
      </Paper>
    </>
  );
};

export default CityWeatherAnalytics;
