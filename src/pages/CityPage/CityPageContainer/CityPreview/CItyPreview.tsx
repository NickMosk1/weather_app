import React from 'react';
import City from '../../../../types/City';
import classes from './CityPreview.module.css';
import CityInfo from './CityInfo/CityInfo';
import WeatherDataItemColumn from './WeatherDataItemColumn/WeatherDataItemColumn';

interface CityPreviewProps {
  weatherData: City;
  todayDate: string;
}

const CityPreview: React.FC<CityPreviewProps> = ({ weatherData, todayDate }) => {
  return (
    <div className={classes.cityPreview}> 
      <WeatherDataItemColumn weatherData={weatherData} items={["tempmax", "temp", "tempmin"]} todayDate={todayDate} />
      <CityInfo weatherData={weatherData} />
      <WeatherDataItemColumn weatherData={weatherData} items={["pressure", "humidity", "windgust"]} todayDate={todayDate} />
    </div>
  );
};

export default CityPreview;