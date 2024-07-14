import React from 'react';
import City from '../../../../../types/City';
import classes from './WeatherDataItemColumn.module.css';
import WeatherDataItem from './WeatherDataItem/WeatherDataItem';

interface WeatherDataItemColumnProps {
  weatherData: City;
  items: string[];
  todayDate: string; 
}

const WeatherDataItemColumn: React.FC<WeatherDataItemColumnProps> = ({ weatherData, items, todayDate }) => {

  const todayWeather = weatherData.days.find(day => day.datetime === todayDate);

  if (!todayWeather) {
    return <div> Данные о погоде на текущую дату не найдены </div>; 
  }

  return (
    <div className={classes.weatherDataItemColumn}>
      {items.map(item => (
        <WeatherDataItem key={item} title={item} data={String(todayWeather[item])} />
      ))}
    </div>
  );
};

export default WeatherDataItemColumn;