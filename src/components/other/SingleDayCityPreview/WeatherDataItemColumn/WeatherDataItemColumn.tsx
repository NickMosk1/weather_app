import Day from '../../../../types/Day';
import WeatherDataItem from './WeatherDataItem/WeatherDataItem';
import styled from '@emotion/styled';

interface WeatherDataItemColumnProps {
    weatherData: Day;
    items: string[];
}

const WeatherDataItemColumn: React.FC<WeatherDataItemColumnProps> = ({ weatherData, items }) => {
    return (
        <WeatherDataItemColumnWrapper>
            {items.map((item, index) => (
                <WeatherDataItem title={item} data={String(weatherData[item])} key={index}/>
            ))}
        </WeatherDataItemColumnWrapper>
    );
};

export default WeatherDataItemColumn;

const WeatherDataItemColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    width: 20%;
`;