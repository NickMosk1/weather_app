import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import CustomTooltip from './CustomTooltip/CustomTooltip';
import BarChartPatternStyled from './BarChartPatternStyled/BarChartPatternStyled';
import { useContext } from 'react';
import { ThemeContext } from '../../../themes/ThemeContext/ThemeContext';
import styled from '@emotion/styled';

interface CustomBarChartProps {
    data: {time: string; value: number; index?: number;}[];
    chartName: string;
    unitName: string;
    dates?: string[]; 
}

const CustomBarChart: React.FC<CustomBarChartProps> = ({ data, chartName, unitName, dates }) => {

    const {darkMode} = useContext(ThemeContext);

    return (
        <CustomBarChartWrapper>
            <ChartName> {chartName} </ChartName>
            <BarChartPatternStyled darkMode={darkMode}>
                <ResponsiveContainer>
                    <BarChart data={data}>
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
                        <Bar dataKey="value" fill="#007bff" strokeWidth={3} />
                    </BarChart>
                </ResponsiveContainer>
            </BarChartPatternStyled>
        </CustomBarChartWrapper>
    );
};

export default CustomBarChart;

const CustomBarChartWrapper = styled.div`
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