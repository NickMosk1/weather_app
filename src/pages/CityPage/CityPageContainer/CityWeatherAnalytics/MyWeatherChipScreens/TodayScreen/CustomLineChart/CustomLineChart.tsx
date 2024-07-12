import React from 'react';

import { styled } from '@mui/system';

import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

const LineChartPatternStyled = styled('div')({
  width: '70%',
  height: 500,
  backgroundColor: '#fff',
  color: '#007bff',
  padding: '16px',
  marginTop: '50px',
  '& .recharts-text': {
    fill: '#007bff',
    fontSize: '14px', // Изменение размера шрифта
    fontWeight: 'bold', // Изменение толщины шрифта
  },
  '& .recharts-cartesian-axis-tick-line': {
    stroke: '#007bff',
    strokeWidth: 2, // Изменение толщины линий осей
  },
  '& .recharts-cartesian-axis-line': {
    stroke: '#007bff',
    strokeWidth: 2, // Изменение толщины линий осей
  },
  '& .recharts-tooltip-wrapper': {
    color: '#007bff',
  },
  '& .recharts-legend-item text': {
    fill: '#007bff',
    fontSize: '14px', // Изменение размера шрифта легенды
    fontWeight: 'bold', // Изменение толщины шрифта легенды
  },
});


type CustomTooltipProps = {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
};

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px' }}>
        <p className="label">{`${label}`}</p>
        <p className="intro">{`${payload[0].value}°C`}</p>
      </div>
    );
  }

  return null;
};

const EmptyLegend = () => null;

interface WeatherData {
  time: string;
  value: number;
}

interface CustomLineChartProps {
  data: WeatherData[];
  chartName: string;
}

const CustomLineChart: React.FC<CustomLineChartProps> = ({ data, chartName }) => {
  return (
    <LineChartPatternStyled>
      <h3>{chartName}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={['auto', 'auto']} tickFormatter={(value) => `${value}°C`} />
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<EmptyLegend />} />
          <Line type="monotone" dataKey="value" stroke="#007bff" strokeWidth={3} activeDot={{ r: 8 }} label={false} />
        </LineChart>
      </ResponsiveContainer>
    </LineChartPatternStyled>
  );
};

export default CustomLineChart;