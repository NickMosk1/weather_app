import { Paper } from '@mui/material';
import MyChipBar from '../MyChipBar/MyChipBar';
import classes from './WeatherChartsContainer.module.css';
import CustomBarChart from '../Charts/CustomBarChart/CustomBarChart';
import CustomLineChart from '../Charts/CustomLineChart/CustomLineChart';

interface ChartData {
  time?: string;
  date?: string;
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
  dates?: string[]; 
}

const getChartComponent = (chartType: 'line' | 'bar'): React.ElementType => {
  switch (chartType) {
    case 'line':
      return CustomLineChart;
    case 'bar':
      return CustomBarChart;
    default:
      throw new Error('Unknown chart type');
  }
};

const WeatherChartsContainer: React.FC<WeatherChartsContainerProps> = ({ selectedOption, setSelectedOption, chartData, chips, unitNames, chartType, dates }) => {

  const ChartComponent = getChartComponent(chartType);

  return (
    <Paper style={{ backgroundColor: 'unset', boxShadow: 'unset', textAlign: 'center' }}>
      <div className={classes.weatherChartsContainer}>
        {chips.map(chip => (
          selectedOption === chip.value && 
          <ChartComponent 
            data={chartData[chip.value]} 
            chartName={chip.label} 
            unitName={unitNames[chip.value]} 
            dates={dates} 
          />
        ))}
      </div>
      <MyChipBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} chips={chips} />
    </Paper>
  );
};

export default WeatherChartsContainer;