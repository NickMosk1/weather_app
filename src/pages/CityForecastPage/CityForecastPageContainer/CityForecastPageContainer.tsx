import { useEffect } from 'react';
import CityForecastAnalytics from './CityForecastAnalytics/CityForecastAnalytics';
import SingleDayCityPreview from '../../../components/other/SingleDayCityPreview/SingleDayCityPreview';
import LinearPageLoader from '../../../components/pageLoaders/LinearPageLoader/LinearPageLoader';
import ForecastDataStore from '../../../components/stores/ForecastDataStore/ForecastDataStore';
import { observer } from 'mobx-react';
import styled from '@emotion/styled';

interface CityForecastPageContainerProps {
    cityName: string;
}

const CityForecastPageContainer: React.FC<CityForecastPageContainerProps> = observer(({cityName}) => {

    const {forecastData, todayDate, fetchForecastData} = ForecastDataStore;

    useEffect(() => { 
        const millisRemainTillNextHour = (60 - new Date().getMinutes()) * 60 * 1000 - new Date().getSeconds() * 1000 - new Date().getMilliseconds();
        const timeoutId = setTimeout(() => { 
            fetchForecastData(cityName);
            setInterval(() => {fetchForecastData(cityName)}, 60 * 60 * 1000);
        }, millisRemainTillNextHour);
        return () => clearTimeout(timeoutId); 
    }, [cityName]);

    if (!forecastData) {return (<LinearPageLoader/>);} 

    return (
        <CityForecastPageContainerWrapper>
            <SingleDayCityPreview 
                weatherData={forecastData} 
                todayDate={todayDate} 
                leftColumn={["tempmax", "temp", "tempmin", "pressure"]}
                rightColumn={["dew", "humidity", "windgust", "preciptype"]}
            />
            <CityForecastAnalytics/>
        </CityForecastPageContainerWrapper>
    );
});

export default CityForecastPageContainer;

const CityForecastPageContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 70%;
`;