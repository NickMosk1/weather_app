import React from 'react';
import City from '../../../../../../types/City';
import CustomLineChart from './CustomLineChart/CustomLineChart';
import classes from './TodayScreen.module.css';

interface TodayScreenProps {
  weatherData: City;
  todayDate: string;
}

const TodayScreen: React.FC<TodayScreenProps> = ({ weatherData, todayDate }) => {
  const todayWeather = weatherData.days.find(day => day.datetime === todayDate);

  if (!todayWeather) {
    return <div>Данные о погоде на текущую дату не найдены</div>;
  }

  const tempData = todayWeather.hours.map(hour => ({
    time: hour.datetime.slice(0, -3),
    value: hour.temp, // Изменено на number
  }));

  const windData = todayWeather.hours.map(hour => ({
    time: hour.datetime.slice(0, -3),
    value: hour.windspeed, // Изменено на number
  }));

  const humidityData = todayWeather.hours.map(hour => ({
    time: hour.datetime.slice(0, -3),
    value: hour.humidity, // Изменено на number
  }));

  return (
    <>
      <div className={classes.chartColumn}>
        <CustomLineChart data={tempData} chartName="Температура" />
        <CustomLineChart data={windData} chartName="Ветер" />
        <CustomLineChart data={humidityData} chartName="Влажность" />
      </div>
    </>
  );
};

export default TodayScreen;