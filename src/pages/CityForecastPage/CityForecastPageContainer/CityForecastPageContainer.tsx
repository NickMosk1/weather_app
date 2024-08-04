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

type CityInfoData = {
    cityNameInfo: string;
    cityResolvedAddress: string;
    cityTzoffset: number;
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
    
    const todayWeather = forecastData?.days.find(day => day.datetime === todayDate);
    const cityNameInfo = forecastData?.name;
    const cityResolvedAddress = forecastData?.resolvedAddress.slice(forecastData.name.length + 2);
    const cityTzoffset = forecastData?.tzoffset;

    if(!isLoading){
        if (!forecastData) {
            navigate(`/error`, { state: { additionalData: cityName, errorType: 'cityIsNotFound' } });
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return null;
        } 
        if (!todayWeather || !cityNameInfo || !cityResolvedAddress || !cityTzoffset) {
            navigate(`/error`, { state: { additionalData: " сегодня", errorType: "dateDataIsNotFound" } });
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return null;
        } 
    } else {
        return <LinearPageLoader/>
    }

    const cityInfoData: CityInfoData = {
        cityNameInfo: cityNameInfo,
        cityResolvedAddress: cityResolvedAddress,
        cityTzoffset: cityTzoffset,
    };

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
                        singleDayWeatherData = {todayWeather} 
                        cityInfoData = {cityInfoData}
                        leftColumn = {["tempmax", "temp", "tempmin", "pressure"]}
                        rightColumn = {["dew", "humidity", "windgust", "preciptype"]}
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