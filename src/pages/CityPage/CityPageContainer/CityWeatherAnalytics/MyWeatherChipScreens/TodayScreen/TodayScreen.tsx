import React, { useState } from 'react';
import City from '../../../../../../types/City';
import WeatherChartsContainer from '../../../../../../components/other/WeatherChartsContainer/WeatherChartsContainer';
import SunSetAndRiseContainer from '../../../../../../components/other/SunSetAndRiseContainer/SunSetAndRiseContainer';

interface TodayScreenProps {
  weatherData: City;
  todayDate: string;
}

const TodayScreen: React.FC<TodayScreenProps> = ({ weatherData, todayDate }) => {
  
  const [selectedOption, setSelectedOption] = useState<string>('temperature'); {/* все хуки до условного рендера должны быть */}

  const todayWeather = weatherData.days.find(day => day.datetime === todayDate);

  if (!todayWeather) {
    return <div>Данные о погоде на текущую дату не найдены</div>;
  }

  const chartData = {
    temperature: todayWeather.hours.map(hour => ({ time: hour.datetime.slice(0, -3), value: hour.temp })),
    wind: todayWeather.hours.map(hour => ({ time: hour.datetime.slice(0, -3), value: hour.windspeed })),
    humidity: todayWeather.hours.map(hour => ({ time: hour.datetime.slice(0, -3), value: hour.humidity })),
    pressure: todayWeather.hours.map(hour => ({ time: hour.datetime.slice(0, -3), value: hour.pressure })),
  };

  const chips = [
    { label: 'Температура', value: 'temperature' },
    { label: 'Ветер', value: 'wind' },
    { label: 'Влажность', value: 'humidity' },
    { label: 'Давление', value: 'pressure' },
  ];
  
  const unitNames = {
    temperature: '°C',
    wind: 'м/с',
    humidity: 'гр',
    pressure: 'мм'
  };

  const sunSetAndRiseData = [{sunrise: todayWeather.sunrise}, {sunset: todayWeather.sunset}];

  return (

    <>

      <WeatherChartsContainer 

        selectedOption={selectedOption} 

        setSelectedOption={setSelectedOption} 

        chartData={chartData} 

        chips={chips} 

        unitNames={unitNames}

      />

      <SunSetAndRiseContainer sunSetAndRiseData = {sunSetAndRiseData}/>

    </>

  );

};

export default TodayScreen;