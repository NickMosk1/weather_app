import React, { useState } from 'react';
import City from '../../../../../../types/City';
import WeatherChartsContainer from '../../../../../../components/other/WeatherChartsContainer/WeatherChartsContainer';
import DayAndNightDataContainer from '../../../../../../components/other/DayAndNightDataContainer/DayAndNightDataContainer';
import CityRoutingContainer from '../../../../../../components/routingContainers/CityRoutingContainer/CityRoutingContainer';

interface ThreeDaysScreenProps {
  weatherData: City;
  todayDate: string;
}

type ChartType = 'line' | 'bar';

const ThreeDaysScreen: React.FC<ThreeDaysScreenProps> = ({ weatherData, todayDate }) => {
  
  const [selectedOption, setSelectedOption] = useState<string>('temperature'); 

  const todayWeather = weatherData.days.find(day => day.datetime === todayDate);

  if (!todayWeather) {
    return <div>Данные о погоде на текущую дату не найдены</div>;
  }

  const chartData = {
    temperature: todayWeather.hours.map(hour => ({ time: hour.datetime.slice(0, -3), value: hour.temp })),
    wind: todayWeather.hours.map(hour => ({ time: hour.datetime.slice(0, -3), value: hour.windspeed })),
    humidity: todayWeather.hours.map(hour => ({ time: hour.datetime.slice(0, -3), value: hour.humidity })),
    pressure: todayWeather.hours.map(hour => ({ time: hour.datetime.slice(0, -3), value: hour.pressure })),
    precip: todayWeather.hours.map(hour => ({ time: hour.datetime.slice(0, -3), value: hour.precip })),
  };

  const chips = [
    { label: 'Температура', value: 'temperature' },
    { label: 'Скорость ветра', value: 'wind' },
    { label: 'Влажность', value: 'humidity' },
    { label: 'Давление', value: 'pressure' },
    { label: 'Осадки', value: 'precip' },
  ];
  
  const unitNames = {
    temperature: '°C',
    wind: 'м/с',
    humidity: 'гр',
    pressure: 'мм',
    precip: 'мм'
  };

  const chartTypes: { [key: string]: ChartType } = {
    temperature: 'line',
    wind: 'line',
    humidity: 'line',
    pressure: 'bar',
    precip: 'bar'
  };

  const sunSetAndRiseData = [{ time: todayWeather.sunrise, epoch: todayWeather.sunriseEpoch }, { time: todayWeather.sunset, epoch: todayWeather.sunsetEpoch }];

  const moonPhaseData = todayWeather.moonphase;

  return (
    <>
    
      <CityRoutingContainer/>
    </>
  );
};

export default ThreeDaysScreen;