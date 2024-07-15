import { useState } from 'react';
import City from '../../../../../../types/City';
import WeatherChartsContainer from '../../../../../../components/other/WeatherChartsContainer/WeatherChartsContainer';
import CityRoutingContainer from '../../../../../../components/routingContainers/CityRoutingContainer/CityRoutingContainer';
import Day from '../../../../../../types/Day';

interface WeekScreenProps {
  weatherData: City;
  todayDate: string;
}

type ChartType = 'line' | 'bar';

const generateChartData = (weatherData: City, key: string, startDate: string) => {
  const startIndex = weatherData.days.findIndex((day: any) => day.datetime === startDate);
  if (startIndex === -1) {
    console.error(`Дата ${startDate} не найдена в данных weatherData`);
    return [];
  }
  return weatherData.days.slice(startIndex, startIndex + 14).map((day: Day) => ({
    time: day.datetime.slice(5),
    value: day[key],
  }));
};

const WeekScreen: React.FC<WeekScreenProps> = ({ weatherData, todayDate }) => {
  
  const [selectedOption, setSelectedOption] = useState<string>('temperature'); 

  const chartData = {
    temperature: generateChartData(weatherData, 'temp', todayDate),
    wind: generateChartData(weatherData, 'windspeed', todayDate),
    humidity: generateChartData(weatherData, 'humidity', todayDate),
    pressure: generateChartData(weatherData, 'pressure', todayDate),
    precip: generateChartData(weatherData, 'precip', todayDate)
  };

  const chips = [
    { label: 'Температура', value: 'temperature' },
    { label: 'Скорость ветра', value: 'wind' },
    { label: 'Влажность', value: 'humidity' },
    { label: 'Давление', value: 'pressure' },
    { label: 'Осадки', value: 'precip' }
  ];
  
  const unitNames = {
    temperature: '°C',
    wind: 'м/с',
    humidity: '%',
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

  return (
    <>
      <WeatherChartsContainer 
        selectedOption={selectedOption} 
        setSelectedOption={setSelectedOption} 
        chartData={chartData} 
        chips={chips} 
        unitNames={unitNames}
        chartType={chartTypes[selectedOption as keyof typeof chartTypes]} 
      />
      <CityRoutingContainer/>
    </>
  );
};

export default WeekScreen;