import React from 'react';
import { Paper } from '@mui/material';
import CustomLineChart from '../Charts/CustomLineChart/CustomLineChart';
import CustomBarChart from '../Charts/CustomBarChart/CustomBarChart';
import MyChipBar from '../MyChipBar/MyChipBar';
import classes from './WeatherChartsContainer.module.css';

interface ChartData {
  time: string;
  value: number;
}

interface Chip {
  label: string;
  value: string;
}

interface WeatherChartsContainerProps {
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  chartData: { [key: string]: ChartData[] };
  chips: Chip[];
  unitNames: { [key: string]: string };
  chartType: 'line' | 'bar';
}

const WeatherChartsContainer: React.FC<WeatherChartsContainerProps> = ({ selectedOption, setSelectedOption, chartData, chips, unitNames, chartType }) => {

  let ChartComponent: React.ElementType;
  switch (chartType) {
    case 'line':
      ChartComponent = CustomLineChart;
      break;
    case 'bar':
      ChartComponent = CustomBarChart;
      break;
  }

  return (
    <Paper style={{ backgroundColor: 'unset', boxShadow: 'unset', padding: '15px', textAlign: 'center' }}>
      <div className={classes.customLineChartContainer}>
        {chips.map(chip => (
          selectedOption === chip.value && 
          <ChartComponent 
            key={chip.value} 
            data={chartData[chip.value]} 
            chartName={chip.label} 
            unitName={unitNames[chip.value]} 
          />
        ))}
      </div>
      <MyChipBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} chips={chips} />
    </Paper>
  );
};

export default WeatherChartsContainer;