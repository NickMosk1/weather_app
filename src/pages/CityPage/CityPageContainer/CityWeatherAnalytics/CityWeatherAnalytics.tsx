import { Paper } from '@mui/material';
import City from '../../../../types/City';
import TodayScreen from './MyWeatherChipScreens/TodayScreen/TodayScreen';
import { useState } from 'react';
import MyChipBar from '../../../../components/other/MyChipBar/MyChipBar';
import classes from './CityWeatherAnalytics.module.css';
import ThreeDaysScreen from './MyWeatherChipScreens/ThreeDaysScreen/ThreeDaysScreen';
import WeekScreen from './MyWeatherChipScreens/WeekScreen/WeekScreen';
import TwoWeeksScreen from './MyWeatherChipScreens/TwoWeeksScreen/TwoWeeksScreen';

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
    { label: 'На три дня', value: 'threeDays' },
    { label: 'На неделю', value: 'week' },
    { label: 'На две недели', value: 'twoWeek' }
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
