import { useState } from "react";
import City from "../../../../types/City";
import Day from "../../../../types/Day";
import WeatherStore from "../../../../components/stores/WeatherStore/WeatherStore";
import WeatherChartsContainer from "../../../../components/other/WeatherChartsContainer/WeatherChartsContainer";

type ChartType = 'line' | 'bar';

const generateChartData = (weatherData: City, key: string, startDate: string) => {
  const startIndex = weatherData.days.findIndex((day: Day) => day.datetime === '2024-07-07');
  if (startIndex === -1) {
    console.error(`Дата ${startDate} не найдена в данных weatherData`);
    return [];
  }
  return weatherData.days.slice(startIndex, startIndex + 8).map((day: Day) => ({
    time: day.datetime.slice(5),
    value: day[key],
  }));
};

const JournalRangeScreen= () => {

  const { weatherData, todayDate } = WeatherStore;

  const [selectedOption, setSelectedOption] = useState<string>('temperature'); 

  const chartData = {
    temperature: weatherData ? generateChartData(weatherData, 'temp', todayDate) : [],
    wind: weatherData ? generateChartData(weatherData, 'windspeed', todayDate) : [],
    humidity: weatherData ? generateChartData(weatherData, 'humidity', todayDate) : [],
    pressure: weatherData ? generateChartData(weatherData, 'pressure', todayDate) : [],
    precip: weatherData ? generateChartData(weatherData, 'precip', todayDate) : [],
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
    </>
  );
};

export default JournalRangeScreen;