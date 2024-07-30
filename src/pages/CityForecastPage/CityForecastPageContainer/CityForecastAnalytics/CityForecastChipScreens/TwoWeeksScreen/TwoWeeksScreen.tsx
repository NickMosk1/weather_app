import { useState } from 'react';
import City from '../../../../../../types/City';
import WeatherChartsContainer from '../../../../../../components/other/WeatherChartsContainer/WeatherChartsContainer';
import Day from '../../../../../../types/Day';
import ForecastDataStore from '../../../../../../stores/ForecastDataStore/ForecastDataStore';

type ChartType = 'line' | 'bar';

const generateChartData = (weatherData: City, key: string, startDate: string) => {
    const startIndex = weatherData.days.findIndex((day: Day) => day.datetime === startDate);
    if (startIndex === -1) {
        console.error(`Дата ${startDate} не найдена в данных weatherData`);
        return [];
    }
    return weatherData.days.slice(startIndex, startIndex + 14).map((day: Day) => ({
        time: day.datetime.slice(5),
        value: day[key],
    }));
};

const WeekScreen = () => {
    
    const [selectedOption, setSelectedOption] = useState<string>('temperature'); 
    const {forecastData, todayDate} = ForecastDataStore;

    if(!forecastData) {return (<>Ошибка в поиске данных</>)};

    const chartData = {
        temperature: generateChartData(forecastData, 'temp', todayDate),
        wind: generateChartData(forecastData, 'windspeed', todayDate),
        humidity: generateChartData(forecastData, 'humidity', todayDate),
        pressure: generateChartData(forecastData, 'pressure', todayDate),
        precip: generateChartData(forecastData, 'precip', todayDate)
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

export default WeekScreen;