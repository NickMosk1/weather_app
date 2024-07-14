import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import CustomTooltip from './CustomTooltip/CustomTooltip';
import LineChartPatternStyled from './LineChartPatternStyled/LineChartPatternStyled';
import classes from './CustomLineChart.module.css';

interface CustomLineChartProps {
  data: {time: string; value: number; index: number;}[];
  chartName: string;
  unitName: string;
  dates?: string[]; 
}

const CustomLineChart: React.FC<CustomLineChartProps> = ({ data, chartName, unitName, dates }) => {
  return (
    <div className={classes.customLineChart}>
      <div className={classes.chartName}> {chartName} </div>
      <LineChartPatternStyled>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={['auto', 'auto']} tickFormatter={(value) => `${value} ${unitName}`} />
            <Tooltip 
              content={({ payload = [], label }) => { {/* можно только так, в библиотеке recharts сюда можно передать актив, пэйлоад, лэйбл */}
                if (payload.length) {
                  
                  console.log('Payload:', payload);
                  return (
                    <CustomTooltip 
                      data={{ value: payload[0].payload.value, index: payload[0].payload.index }} 
                      label={label} 
                      unitName={unitName} 
                      dates={dates}
                    />
                  );
                }
                return null;
              }} 
            /> 
            <Legend content={() => null} />
            <Line type="monotone" dataKey="value" stroke="#007bff" strokeWidth={3} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </LineChartPatternStyled>
    </div>
  );
};

export default CustomLineChart;