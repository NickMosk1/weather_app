import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import CustomTooltip from './CustomTooltip/CustomTooltip';
import LineChartPatternStyled from './LineChartPatternStyled/LineChartPatternStyled';
import { useContext } from 'react';
import { ThemeContext } from '../../../themes/ThemeContext/ThemeContext';
import styled from '@emotion/styled';

interface CustomLineChartProps {
    data: {time: string; value: number; index?: number;}[];
    chartName: string;
    unitName: string;
    dates?: string[]; 
}

const CustomLineChart: React.FC<CustomLineChartProps> = ({ data, chartName, unitName, dates }) => {
  
  const {darkMode} = useContext(ThemeContext);

  return (
        <CustomLineChartWrapper>
            <ChartName> {chartName} </ChartName>
            <LineChartPatternStyled darkMode={darkMode}>
                <ResponsiveContainer>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis domain={['auto', 'auto']} tickFormatter={(value) => `${value} ${unitName}`} />
                        <Tooltip 
                            content={({ payload = [], label }) => { {/* можно только так, в библиотеке recharts сюда можно передать актив, пэйлоад, лэйбл */}
                                if (payload.length) {
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
        </CustomLineChartWrapper>
    );
};

export default CustomLineChart;

const CustomLineChartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
`;

const ChartName = styled.div`
    margin: 40px;
    font-size: 200%;
    font-weight: 900;
    color: #007bff;
    text-align: center;
`;