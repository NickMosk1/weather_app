import styled from '@emotion/styled';
import CityInfo from '../CityInfo/CityInfo';
import WeatherDataItemColumn from './WeatherDataItemColumn/WeatherDataItemColumn';
import Day from '../../../types/Day';

interface SingleDayCityPreviewProps {
    singleDayWeatherData: Day;
    cityInfoData: CityInfoData;
    leftColumn: string[];
    rightColumn: string[];
}

type CityInfoData = {
    cityNameInfo: string;
    cityResolvedAddress: string;
    cityTzoffset: number;
}

const SingleDayCityPreview: React.FC<SingleDayCityPreviewProps> = ({ singleDayWeatherData, cityInfoData, leftColumn, rightColumn}) => {
    return (
        <SingleDayCityPreviewWrapper>  
            <WeatherDataItemColumn weatherData={singleDayWeatherData} items={leftColumn} />
            <CityInfo cityInfoData={cityInfoData} />
            <WeatherDataItemColumn weatherData={singleDayWeatherData} items={rightColumn} />
        </SingleDayCityPreviewWrapper>
    );
};

export default SingleDayCityPreview;

const SingleDayCityPreviewWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: fit-content;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    margin-top: 40px;
`;