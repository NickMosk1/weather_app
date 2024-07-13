import React from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import CustomTooltip from './CustomTooltip/CustomTooltip';
import classes from './CustomBarChart.module.css';
import BarChartPatternStyled from './BarChartPatternStyled/BarChartPatternStyled';

interface CustomBarChartProps {
  data: {
    time: string;
    value: number;
  }[];
  chartName: string;
  unitName: string;
}

const CustomBarChart: React.FC<CustomBarChartProps> = ({ data, chartName, unitName }) => {

  return (
    <div className={classes.customBarChart}>
      <div className={classes.chartName}> {chartName} </div>
      <BarChartPatternStyled>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={['auto', 'auto']} tickFormatter={(value) => `${value} ${unitName}`} />
            <Tooltip content={<CustomTooltip unitName={unitName}/>} />
            <Legend content={() => null} />
            <Bar dataKey="value" fill="#007bff" strokeWidth={3} />
          </BarChart>
        </ResponsiveContainer>
      </BarChartPatternStyled>
    </div>
  );
};

export default CustomBarChart;