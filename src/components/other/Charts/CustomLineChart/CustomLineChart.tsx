import React from 'react';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import CustomTooltip from './CustomTooltip/CustomTooltip';
import LineChartPatternStyled from './LineChartPatternStyled/LineChartPatternStyled';
import classes from './CustomLineChart.module.css';

interface CustomLineChartProps {
  data: {
    time: string;
    value: number;
  }[];
  chartName: string;
  unitName: string;
}

const CustomLineChart: React.FC<CustomLineChartProps> = ({ data, chartName, unitName }) => {

  return (

    <div className={classes.customLineChart}>

      <div className={classes.chartName}> {chartName} </div>

      <LineChartPatternStyled>

        <ResponsiveContainer>

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="time" />

            <YAxis domain={['auto', 'auto']} tickFormatter={(value) => `${value} ${unitName}`} />

            <Tooltip content={<CustomTooltip unitName={unitName}/>} />

            <Legend content={() => null} />

            <Line type="monotone" dataKey="value" stroke="#007bff" strokeWidth={3} activeDot={{ r: 8 }} label={false} />

          </LineChart>

        </ResponsiveContainer>

      </LineChartPatternStyled>

    </div>

  );

};

export default CustomLineChart;