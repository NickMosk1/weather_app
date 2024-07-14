import React, { useEffect, useState } from 'react';
import axios from 'axios';
import City from '../../../types/City';
import classes from './CityPageContainer.module.css';
import CityWeatherAnalytics from './CityWeatherAnalytics/CityWeatherAnalytics';
import CityPreview from './CityPreview/CItyPreview';

interface CityPageContainerProps {
  cityName: string;
}

const calculateCityDate = (tzoffset: number): string => {
  const localTime = new Date();
  const utcTime = localTime.getTime() + localTime.getTimezoneOffset() * 60000;
  const cityTime = new Date(utcTime + tzoffset * 3600000);
  const year = cityTime.getFullYear();
  const month = String(cityTime.getMonth() + 1).padStart(2, '0');
  const day = String(cityTime.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const CityPageContainer: React.FC<CityPageContainerProps> = ({ cityName }) => {

  const [weatherData, setWeatherData] = useState<City | null>(null);
  const [todayDate, setTodayDate] = useState<string>('');

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/cities?name=${cityName}`);
      if (response.data && response.data.length > 0) {
        setWeatherData(response.data[0]);
        const date = calculateCityDate(response.data[0].tzoffset);
        setTodayDate(date);
      } else {
        console.error('Данные о погоде не найдены');
      }
    } catch (error) {
      console.error('Ошибка при получении данных о погоде:', error);
    }
  };

  useEffect(() => {
    fetchData();
    const now = new Date();
    const millisTillMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0).getTime() - now.getTime();
    const timeoutId = setTimeout(() => {
      fetchData();
      setInterval(fetchData, 60 * 60 * 1000);
    }, millisTillMidnight);
    return () => clearTimeout(timeoutId);
  }, [cityName]);

  if (!weatherData) {
    return (
      <div> Загрузка данных о погоде... </div>
    );
  }

  console.log(todayDate, cityName);

  return (
    <div className={classes.cityPageContainer}>
      <CityPreview weatherData={weatherData} todayDate={todayDate} />
      <CityWeatherAnalytics weatherData={weatherData} todayDate={todayDate} />
    </div>
  );
};

export default CityPageContainer;