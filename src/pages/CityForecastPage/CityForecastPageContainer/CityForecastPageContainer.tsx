import { useEffect } from 'react';
import CityForecastAnalytics from './CityForecastAnalytics/CityForecastAnalytics';
import SingleDayCityPreview from '../../../components/other/SingleDayCityPreview/SingleDayCityPreview';
import LinearPageLoader from '../../../components/pageLoaders/LinearPageLoader/LinearPageLoader';
import ForecastDataStore from '../../../stores/ForecastDataStore/ForecastDataStore';
import { observer } from 'mobx-react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

interface CityForecastPageContainerProps {
    cityName: string;
}

const CityForecastPageContainer: React.FC<CityForecastPageContainerProps> = observer(({cityName}) => {

    const {forecastData, isLoading, todayDate, fetchForecastData} = ForecastDataStore;
    const navigate = useNavigate();

    useEffect(() => {
        if (forecastData === null) {
            fetchForecastData(cityName)
        } else {
            if (cityName !== forecastData.name) {
                fetchForecastData(cityName)
            }
        }
        const millisRemainTillNextHour = (60 - new Date().getMinutes()) * 60 * 1000 - new Date().getSeconds() * 1000 - new Date().getMilliseconds();
        const timeoutId = setTimeout(() => { 
            fetchForecastData(cityName);
            setInterval(() => {fetchForecastData(cityName)}, 60 * 60 * 1000);
        }, millisRemainTillNextHour);
        return () => clearTimeout(timeoutId); 
    }, [cityName]);

    return (
        <>
            {!forecastData && isLoading && <LinearPageLoader/>}
            {!forecastData && !isLoading && (
                navigate(`/error`, { state: { additionalData: cityName, errorType: 'cityIsNotFound' } }),
                window.scrollTo({ top: 0, behavior: 'smooth' })
            )}
            {forecastData && isLoading && <LinearPageLoader/>}
            {forecastData && !isLoading && (
                <CityForecastPageContainerWrapper>
                    <SingleDayCityPreview 
                        weatherData={forecastData} 
                        todayDate={todayDate} 
                        leftColumn={["tempmax", "temp", "tempmin", "pressure"]}
                        rightColumn={["dew", "humidity", "windgust", "preciptype"]}
                    />
                    <CityForecastAnalytics/>
                </CityForecastPageContainerWrapper>
            )}
        </>
    );
});

export default CityForecastPageContainer;

const CityForecastPageContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 70%;
`;