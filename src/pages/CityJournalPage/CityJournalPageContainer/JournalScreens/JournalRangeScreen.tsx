import { useState } from "react";
import JournalDataStore from "../../../../components/stores/JournalDataStore/JournalDataStore";
import City from "../../../../types/City";
import Day from "../../../../types/Day";
import WeatherChartsContainer from "../../../../components/other/WeatherChartsContainer/WeatherChartsContainer";
import RangeDateInputContainer from "../../../../components/other/DateInputContainers/RangeDateInputContainer/RangeDateInputContainer";
import DateDataIsNotFoundError from "../../../../components/errorScreens/DateDataIsNotFoundError/DateDataIsNotFoundError";
import { observer } from "mobx-react";
import IncorrectInputError from "../../../../components/errorScreens/IncorrectInputError/IncorrectInputError";

type ChartType = 'line' | 'bar';

const generateChartData = (weatherData: City, paramName: string, startIndex: number, endIndex: number) => {
    return weatherData.days.slice(startIndex, endIndex + 1).map((day: Day) => ({
        time: day.datetime.slice(5),
        value: day[paramName],
    }));
};

const JournalRangeScreen = observer(() => {

    const {journalData} = JournalDataStore;
    const [startDate, setStartDate] = useState<string>('2024-07-07');
    const [endDate, setEndDate] = useState<string>('2024-07-21');
    const [selectedOption, setSelectedOption] = useState<string>('temperature');
    
    if(!journalData){return(<>теоретически невозможный исход</>)}

    const startIndex = journalData.days.findIndex((day: Day) => day.datetime === startDate);
    const endIndex = journalData.days.findIndex((day: Day) => day.datetime === endDate);
    
    if(Date.parse(startDate) > Date.parse(endDate)){
        return(
            <>
                <RangeDateInputContainer startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
                <IncorrectInputError additionalData={" от " + startDate + " до " + endDate}/>
            </>
        )
    }

    if(startIndex === -1 || endIndex === -1){
        return(
            <>
                <RangeDateInputContainer startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
                <DateDataIsNotFoundError additionalData={" с " + startDate + " по " + endDate}/>
            </>
        )
    }

    const chartData = {
        temperature: generateChartData(journalData, 'temp', startIndex, endIndex),
        wind: generateChartData(journalData, 'windspeed', startIndex, endIndex),
        humidity: generateChartData(journalData, 'humidity', startIndex, endIndex),
        pressure: generateChartData(journalData, 'pressure', startIndex, endIndex),
        precip: generateChartData(journalData, 'precip', startIndex, endIndex)
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
});


export default JournalRangeScreen;