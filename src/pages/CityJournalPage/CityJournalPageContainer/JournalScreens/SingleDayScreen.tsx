import { useState } from "react";
import SingleDateInputContainer from "../../../../components/other/DateInputContainers/SingleDateInputContainer/SingleDateInputContainer";
import DayAndNightDataContainer from "../../../../components/other/DayAndNightDataContainer/DayAndNightDataContainer";
import WeatherChartsContainer from "../../../../components/other/WeatherChartsContainer/WeatherChartsContainer";
import DateDataIsNotFoundError from "../../../../components/errorScreens/DateDataIsNotFoundError/DateDataIsNotFoundError";
import { observer } from "mobx-react";
import JournalDataStore from "../../../../stores/JournalDataStore/JournalDataStore";

type ChartType = 'line' | 'bar';

const SingleDayScreen = observer(() => {

    const [choosenDate, setChoosenDate] = useState<string>('2024-07-07');
    const {journalData} = JournalDataStore;
    const [selectedOption, setSelectedOption] = useState<string>('temperature');
    
    const todayWeather = journalData?.days.find(day => day.datetime === choosenDate);

    if (!todayWeather) {
        return(
            <>
                <SingleDateInputContainer choosenDate={choosenDate} setChoosenDate={setChoosenDate}/>
                <DateDataIsNotFoundError additionalData={" на " + choosenDate}/>
            </>
        )
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

    return(
        <>
            <SingleDateInputContainer choosenDate={choosenDate} setChoosenDate={setChoosenDate}/>
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
    )
});

export default SingleDayScreen;