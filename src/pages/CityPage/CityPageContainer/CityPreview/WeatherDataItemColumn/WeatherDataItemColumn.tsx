import React from 'react';
import Day from '../../../../../types/Day';
import classes from './WeatherDataItemColumn.module.css';
import WeatherDataItem from './WeatherDataItem/WeatherDataItem';

interface WeatherDataItemColumnProps {
  todayWeather: Day;
  items: string[];
}

const WeatherDataItemColumn: React.FC<WeatherDataItemColumnProps> = ({ todayWeather, items }) => {
  return (
    <div className={classes.weatherDataItemColumn}>
      {items.map(item => (<WeatherDataItem title={item} data={String(todayWeather[item])} />))}
    </div>
  );
};

export default WeatherDataItemColumn;