import { Paper } from '@mui/material';
import MyChipBar from '../MyChipBar/MyChipBar';
import CustomBarChart from '../Charts/CustomBarChart/CustomBarChart';
import CustomLineChart from '../Charts/CustomLineChart/CustomLineChart';
import styled from '@emotion/styled';

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
            <WeatherChartsContainerWrapper>
                {chips.map((chip, index) => (
                    selectedOption === chip.value && 
                    <ChartComponent 
                        data={chartData[chip.value]} 
                        chartName={chip.label} 
                        unitName={unitNames[chip.value]} 
                        dates={dates} 
                        key={index}
                    />
                ))}
            </WeatherChartsContainerWrapper>
            <MyChipBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} chips={chips}/>
        </Paper>
    );
};

export default WeatherChartsContainer;

const WeatherChartsContainerWrapper = styled.div`
    margin-bottom: 30px;
`;