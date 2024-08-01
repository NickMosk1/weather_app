import { useState } from 'react';
import WeatherChartsContainer from '../../../../../../components/other/WeatherChartsContainer/WeatherChartsContainer';
import Day from '../../../../../../types/Day';
import Hour from '../../../../../../types/Hour';
import ForecastDataStore from '../../../../../../stores/ForecastDataStore/ForecastDataStore';
import { useNavigate } from 'react-router-dom';
import City from '../../../../../../types/City';

type ChartType = 'line' | 'bar';

const getNextDate = (date: string, daysToAdd: number): string => {
    const dateObj = new Date(date);
    dateObj.setDate(dateObj.getDate() + daysToAdd);
    return dateObj.toISOString().split('T')[0];
};

const generateChartData = (weatherData: Day, key: string, startIndex: number) => {
    return weatherData.hours.map((hour: Hour, index: number) => ({
        time: hour.datetime.slice(0, -3),
        value: hour[key],
        index: startIndex + index,
    }));
};

const getWeatherDataForDate = (weatherData: City | null, date: string) => {
    return weatherData?.days.find((day: Day) => day.datetime === date);
};

const getThreeDayWeather = (weatherData: City, date: string) => {
    const todayIndex: number = weatherData?.days.findIndex((day: Day) => day.datetime === date);
    if (todayIndex === -1) {
        return undefined;
    } else {
        const todayWeather = weatherData?.days[todayIndex];
        const secondDayWeather = weatherData?.days[todayIndex + 1];
        const thirdDayWeather = weatherData?.days[todayIndex + 2];
        return {...todayWeather, ...secondDayWeather, ...thirdDayWeather};
    }
};

const ThreeDaysScreen= () => {
    
    const [selectedOption, setSelectedOption] = useState<string>('temperature'); 
    const {forecastData, todayDate} = ForecastDataStore;
    const navigate = useNavigate();

    let threeDayWeather;

    if (!forecastData) {
        navigate(`/error`, { state: { additionalData: " сегодня, завтра и послезавтра", errorType: "dateDataIsNotFound" } });
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return null;
    } else {
        threeDayWeather = getThreeDayWeather(forecastData, todayDate);
        if (!threeDayWeather) {
            navigate(`/error`, { state: { additionalData: " сегодня, завтра и послезавтра", errorType: "dateDataIsNotFound" } });
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return null;
        }
    }

    console.log(generateChartData(threeDayWeather, 'temp', 0));

    const todayWeather = getWeatherDataForDate(forecastData, todayDate);
    const secondDayWeather = getWeatherDataForDate(forecastData, getNextDate(todayDate, 1));
    const thirdDayWeather = getWeatherDataForDate(forecastData, getNextDate(todayDate, 2));

    const dates = [todayDate, getNextDate(todayDate, 1), getNextDate(todayDate, 2)];

    if (!todayWeather || !secondDayWeather || !thirdDayWeather) {
        navigate(`/error`, { state: { additionalData: " сегодня, завтра и послезавтра", errorType: "dateDataIsNotFound" } });
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return null;
    }

    const chartData = {
        temperature: [
        ...generateChartData(todayWeather, 'temp', 0),
        ...generateChartData(secondDayWeather, 'temp', todayWeather.hours.length),
        ...generateChartData(thirdDayWeather, 'temp', todayWeather.hours.length + secondDayWeather.hours.length)
        ],
        wind: [
        ...generateChartData(todayWeather, 'windspeed', 0),
        ...generateChartData(secondDayWeather, 'windspeed', todayWeather.hours.length),
        ...generateChartData(thirdDayWeather, 'windspeed', todayWeather.hours.length + secondDayWeather.hours.length)
        ],
        humidity: [
        ...generateChartData(todayWeather, 'humidity', 0),
        ...generateChartData(secondDayWeather, 'humidity', todayWeather.hours.length),
        ...generateChartData(thirdDayWeather, 'humidity', todayWeather.hours.length + secondDayWeather.hours.length)
        ],
        pressure: [
        ...generateChartData(todayWeather, 'pressure', 0),
        ...generateChartData(secondDayWeather, 'pressure', todayWeather.hours.length),
        ...generateChartData(thirdDayWeather, 'pressure', todayWeather.hours.length + secondDayWeather.hours.length)
        ],
        precip: [
        ...generateChartData(todayWeather, 'precip', 0),
        ...generateChartData(secondDayWeather, 'precip', todayWeather.hours.length),
        ...generateChartData(thirdDayWeather, 'precip', todayWeather.hours.length + secondDayWeather.hours.length)
        ]
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
                dates={dates} 
            />
        </>
    );
};

export default ThreeDaysScreen;