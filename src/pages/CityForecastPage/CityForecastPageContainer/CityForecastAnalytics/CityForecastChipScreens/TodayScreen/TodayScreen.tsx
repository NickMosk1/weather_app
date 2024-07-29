import { useState } from 'react';
import WeatherChartsContainer from '../../../../../../components/other/WeatherChartsContainer/WeatherChartsContainer';
import DayAndNightDataContainer from '../../../../../../components/other/DayAndNightDataContainer/DayAndNightDataContainer';
import ForecastDataStore from '../../../../../../components/stores/ForecastDataStore/ForecastDataStore';

type ChartType = 'line' | 'bar';

const TodayScreen = () => {
    
    const [selectedOption, setSelectedOption] = useState<string>('temperature'); 
    const {forecastData, todayDate} = ForecastDataStore;

    const todayWeather = forecastData?.days.find(day => day.datetime === todayDate);

    if (!todayWeather) {return (<div>Данные о погоде на текущую дату не найдены</div>)} {/* в будущем добавить обработчик ошибок */}

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

    const sunSetAndRiseData = [
        {time: todayWeather.sunrise, epoch: todayWeather.sunriseEpoch}, 
        {time: todayWeather.sunset, epoch: todayWeather.sunsetEpoch}
    ];
        
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
            <DayAndNightDataContainer sunSetAndRiseData={sunSetAndRiseData} moonPhaseData={todayWeather.moonphase}/>
        </>
    );
};

export default TodayScreen;