import { useState } from "react";
import WeatherStore from "../../../../components/stores/WeatherStore/WeatherStore";
import City from "../../../../types/City";
import Day from "../../../../types/Day";
import WeatherChartsContainer from "../../../../components/other/WeatherChartsContainer/WeatherChartsContainer";
import RangeDateInputContainer from "../../../../components/other/DateInputContainers/RangeDateInputContainer/RangeDateInputContainer";

type ChartType = 'line' | 'bar';

const generateChartData = (weatherData: City, key: string, startDate: string, endDate: string) => {
    const startIndex = weatherData.days.findIndex((day: Day) => day.datetime === startDate);
    const endIndex = weatherData.days.findIndex((day: Day) => day.datetime === endDate) + 1;
    if (startIndex === -1 || startIndex > endIndex) {
      console.error(`Дата ${startDate} не найдена в данных weatherData`);
      return [];
    }
    return weatherData.days.slice(startIndex, endIndex).map((day: Day) => ({
      time: day.datetime.slice(5),
      value: day[key],
    }));
};

const JournalRangeScreen = () => {

    const {weatherData} = WeatherStore;
    const [startDate, setStartDate] = useState<string>('2024-07-07');
    const [endDate, setEndDate] = useState<string>('2024-07-21');
    const [selectedOption, setSelectedOption] = useState<string>('temperature');
    
    if (!weatherData) {return (<div>Данные о погоде в городе не найдены</div>)} 

    const chartData = {
        temperature: generateChartData(weatherData, 'temp', startDate, endDate),
        wind: generateChartData(weatherData, 'windspeed', startDate, endDate),
        humidity: generateChartData(weatherData, 'humidity', startDate, endDate),
        pressure: generateChartData(weatherData, 'pressure', startDate, endDate),
        precip: generateChartData(weatherData, 'precip', startDate, endDate)
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
   
    return(
        <>
            <RangeDateInputContainer startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
            <WeatherChartsContainer 
                selectedOption={selectedOption} 
                setSelectedOption={setSelectedOption} 
                chartData={chartData} 
                chips={chips} 
                unitNames={unitNames}
                chartType={chartTypes[selectedOption as keyof typeof chartTypes]} 
            />
        </>
    )
}


export default JournalRangeScreen;